/* ============================================================
   Adaptablox Interaction System
   Six self-contained, embeddable widgets. Zero dependencies.

   Usage:
     <script src="adaptablox-widgets.js"></script>
     <ax-intercept></ax-intercept>
     <ax-signals></ax-signals>
     <ax-outcomes></ax-outcomes>
     <ax-receipt></ax-receipt>
     <ax-replay></ax-replay>
     <ax-flow></ax-flow>

   Each widget:
   - fills its container width (height via `height` attribute, default below)
   - uses Shadow DOM (styles never leak in or out)
   - animates only while on screen; respects prefers-reduced-motion
   ============================================================ */
(function () {
  "use strict";

  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const rand = (a, b) => a + Math.random() * (b - a);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const hex = (n) => {
    let s = "";
    for (let i = 0; i < n; i++) s += "0123456789abcdef"[Math.floor(Math.random() * 16)];
    return s;
  };

  /* Theme values needed by canvas / SVG (which can't read CSS vars cheaply) */
  const THEMES = {
    dark: {
      accent: "#7fa8ff", accentR: "127,168,255", dim: "139,148,168",
      out: { allow: "#6fc79a", modify: "#7fa8ff", escalate: "#d9b073", reroute: "#a793e0", deny: "#d98d8d" },
    },
    light: {
      accent: "#3e6ea8", accentR: "62,110,168", dim: "112,120,134",
      out: { allow: "#35864d", modify: "#3e6ea8", escalate: "#c5850f", reroute: "#7a5fb8", deny: "#c4483d" },
    },
  };

  /* Shared design tokens + chrome. Every widget inherits this.
     --ar / --amr / --vr / --wr / --tipr are r,g,b triplets so one token
     retints every alpha variant. theme="light" flips them all. */
  const BASE_CSS =
    ":host{display:block;width:100%;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;" +
    "--ar:127,168,255;--amr:217,176,115;--vr:167,147,224;--wr:255,255,255;--tipr:14,18,25;" +
    "--frame-bg:#0b0e13;--frame-line:rgba(var(--ar),.14);" +
    "--blue:#7fa8ff;--blue-soft:rgba(var(--ar),.55);--line:rgba(var(--ar),.15);--line-hi:rgba(var(--ar),.6);" +
    "--text:#e8edf6;--muted:#8b94a8;--faint:#5a6274;--green:#6fc79a;--amber:#d9b073;--rose:#d98d8d;--violet:#a793e0;" +
    "--mono:'JetBrains Mono',ui-monospace,SFMono-Regular,monospace;color:var(--text)}" +
    ":host([theme='light']){" +
    "--ar:62,110,168;--amr:197,133,15;--vr:122,95,184;--wr:25,28,33;--tipr:34,38,44;" +
    "--frame-bg:#f7f8fa;--frame-line:#e0e3e9;" +
    "--blue:#3e6ea8;--text:#191c21;--muted:#6b7280;--faint:#99a0ab;" +
    "--green:#35864d;--amber:#c5850f;--rose:#c4483d;--violet:#7a5fb8}" +
    "*{box-sizing:border-box;margin:0;padding:0}" +
    ".frame{position:relative;width:100%;height:100%;border-radius:16px;overflow:hidden;" +
    "background:linear-gradient(168deg,rgba(var(--ar),.05),rgba(var(--wr),.012)),var(--frame-bg);" +
    "border:1px solid var(--frame-line);box-shadow:inset 0 1px 0 rgba(var(--wr),.04)}" +
    ".cap{position:absolute;left:16px;top:13px;font-size:9.5px;font-weight:600;letter-spacing:.2em;" +
    "text-transform:uppercase;color:var(--faint);z-index:8;pointer-events:none}" +
    ".sub{position:absolute;right:16px;bottom:11px;font-size:10.5px;color:var(--faint);z-index:8;pointer-events:none;" +
    "font-weight:500;letter-spacing:.02em}" +
    /* tooltip stays dark-on-dark chrome in both themes (matches site tooltips) */
    ".tip{position:absolute;z-index:20;pointer-events:none;max-width:200px;font-size:11px;line-height:1.5;" +
    "color:#e8edf6;background:rgba(var(--tipr),.97);border:1px solid rgba(var(--ar),.35);border-radius:9px;" +
    "padding:8px 11px;opacity:0;transform:translateY(4px);transition:opacity .2s,transform .2s}" +
    ".tip.show{opacity:1;transform:none}" +
    ".tip .tt{display:block;font-weight:600;font-size:9px;letter-spacing:.14em;text-transform:uppercase;" +
    "color:#9fc0ff;margin-bottom:2px}" +
    /* off-screen widgets freeze all CSS animation — zero idle cost */
    ".frame.paused, .frame.paused *, .frame.paused *::before, .frame.paused *::after{" +
    "animation-play-state:paused !important}";

  /* Base class: frame, visibility gating, local tooltip, replay affordance */
  class AxWidget extends HTMLElement {
    constructor() {
      super();
      this._active = false;
      this._timers = [];
      this._raf = null;
    }
    connectedCallback() {
      const h = this.getAttribute("height") || this.defaultHeight();
      this.style.height = h + "px";
      const root = this.attachShadow({ mode: "open" });
      const style = document.createElement("style");
      style.textContent = BASE_CSS + this.css();
      root.appendChild(style);
      const frame = document.createElement("div");
      frame.className = "frame";
      frame.innerHTML = this.html();
      root.appendChild(frame);
      this.frame = frame;
      this.tipEl = document.createElement("div");
      this.tipEl.className = "tip";
      frame.appendChild(this.tipEl);
      this._bindTips();
      this.setup();
      this._inView = false;
      const updateActive = () => {
        this._active = this._inView && !document.hidden;
        this.frame.classList.toggle("paused", !this._active);
        if (this._active) {
          this._maybeLoop();
          this.onVisible();
        }
      };
      this._io = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            this._inView = e.isIntersecting;
            updateActive();
          }),
        { threshold: 0.15 }
      );
      this._io.observe(this);
      this._visHandler = () => updateActive();
      document.addEventListener("visibilitychange", this._visHandler);
    }
    disconnectedCallback() {
      this._io && this._io.disconnect();
      document.removeEventListener("visibilitychange", this._visHandler);
      this._timers.forEach(clearTimeout);
      this._active = false;
      if (this._raf) cancelAnimationFrame(this._raf);
    }
    /* rAF loop that fully stops (no scheduling at all) while inactive */
    startLoop(fn) {
      this._loopFn = fn;
      this._loopOn = false;
      if (REDUCED) { fn(performance.now()); return; } // single static frame
      this._maybeLoop();
    }
    _maybeLoop() {
      if (!this._loopFn || this._loopOn || !this._active || REDUCED) return;
      this._loopOn = true;
      const run = (t) => {
        if (!this._active) { this._loopOn = false; return; }
        this._loopFn(t);
        this._raf = requestAnimationFrame(run);
      };
      this._raf = requestAnimationFrame(run);
    }
    /* current theme values for canvas / SVG drawing — read live, so
       flipping the attribute retints on the next frame */
    get T() {
      return THEMES[this.getAttribute("theme") === "light" ? "light" : "dark"];
    }
    after(ms, fn) {
      const t = setTimeout(fn, ms);
      this._timers.push(t);
      return t;
    }
    every(ms, fn) {
      const loop = () => {
        if (this._active && !REDUCED) fn();
        this.after(ms, loop);
      };
      this.after(60 + Math.random() * 400, loop);
    }
    _bindTips() {
      this.frame.addEventListener("mouseover", (e) => {
        const t = e.target.closest("[data-tip]");
        if (!t) return;
        this.tipEl.innerHTML =
          (t.dataset.tiptitle ? '<span class="tt">' + t.dataset.tiptitle + "</span>" : "") +
          t.dataset.tip;
        this.tipEl.classList.add("show");
        const fr = this.frame.getBoundingClientRect();
        const r = t.getBoundingClientRect();
        const w = this.tipEl.offsetWidth, hh = this.tipEl.offsetHeight;
        let x = r.left - fr.left + r.width / 2 - w / 2;
        x = Math.max(8, Math.min(x, fr.width - w - 8));
        let y = r.top - fr.top - hh - 8;
        if (y < 6) y = r.bottom - fr.top + 8;
        this.tipEl.style.left = x + "px";
        this.tipEl.style.top = y + "px";
      });
      this.frame.addEventListener("mouseout", (e) => {
        if (e.target.closest("[data-tip]")) this.tipEl.classList.remove("show");
      });
    }
    /* subclass API */
    defaultHeight() { return 260; }
    css() { return ""; }
    html() { return ""; }
    setup() {}
    onVisible() {}
  }

  /* ============================================================
     1 · <ax-intercept> — every action meets a decision
     ============================================================ */
  class AxIntercept extends AxWidget {
    defaultHeight() { return 240; }
    css() {
      return (
        ".track{position:absolute;left:12%;right:12%;top:50%;height:1px;background:var(--line)}" +
        ".endpt{position:absolute;top:50%;width:10px;height:10px;border-radius:50%;transform:translate(-50%,-50%);" +
        "border:1px solid var(--line-hi);background:rgba(var(--ar),.12)}" +
        ".endpt.exec{left:88%}.endpt.src{left:12%}" +
        ".endpt.exec.hit{background:var(--blue);box-shadow:0 0 16px rgba(var(--ar),.7)}" +
        ".lens{position:absolute;left:50%;top:50%;width:2px;height:74px;transform:translate(-50%,-50%);" +
        "background:linear-gradient(180deg,transparent,var(--blue-soft) 30%,var(--blue-soft) 70%,transparent);" +
        "border-radius:2px;animation:lensb 4s ease-in-out infinite}" +
        "@keyframes lensb{0%,100%{opacity:.55}50%{opacity:1}}" +
        ".lenshalo{position:absolute;left:50%;top:50%;width:56px;height:110px;transform:translate(-50%,-50%);" +
        "border-radius:50%;background:radial-gradient(ellipse,rgba(var(--ar),.09),transparent 70%)}" +
        ".ring{position:absolute;left:50%;top:50%;width:14px;height:14px;margin:-7px 0 0 -7px;border-radius:50%;" +
        "border:1px solid var(--blue);opacity:0}" +
        ".dot{position:absolute;top:50%;left:0;width:9px;height:9px;margin-top:-4.5px;border-radius:50%;" +
        "background:var(--blue);box-shadow:0 0 12px rgba(var(--ar),.6);will-change:transform,opacity}" +
        ".dot.held{background:var(--muted);box-shadow:none}" +
        ".lbl{position:absolute;top:calc(50% + 26px);font-size:10px;letter-spacing:.12em;text-transform:uppercase;" +
        "color:var(--faint);transform:translateX(-50%)}" +
        ".verdict{position:absolute;left:50%;top:calc(50% - 58px);transform:translateX(-50%);font-size:10px;" +
        "letter-spacing:.1em;text-transform:uppercase;color:var(--blue);opacity:0;transition:opacity .4s;white-space:nowrap}" +
        ".verdict.dim{color:var(--muted)}"
      );
    }
    html() {
      return (
        '<div class="cap">Runtime intercept</div>' +
        '<div class="track"></div>' +
        '<div class="lenshalo"></div>' +
        '<div class="lens" data-tiptitle="Runtime governance" data-tip="Every action crosses this boundary. Nothing executes without a decision."></div>' +
        '<div class="endpt src"></div><div class="endpt exec" id="exec"></div>' +
        '<div class="lbl" style="left:12%">action</div>' +
        '<div class="lbl" style="left:50%">runtime</div>' +
        '<div class="lbl" style="left:88%">execution</div>' +
        '<div class="verdict" id="verdict"></div>' +
        '<div class="sub">there is always a decision before execution</div>'
      );
    }
    setup() {
      this._n = 0;
      this.every(3000, () => this.run());
    }
    run() {
      const f = this.frame, W = f.clientWidth;
      const x0 = W * 0.12, xm = W * 0.5, x1 = W * 0.88;
      this._n++;
      const stopped = this._n % 4 === 0;
      const dot = document.createElement("div");
      dot.className = "dot";
      f.appendChild(dot);
      const verdict = f.querySelector("#verdict");
      const a1 = dot.animate(
        [
          { transform: "translateX(" + x0 + "px)", opacity: 0 },
          { transform: "translateX(" + (x0 + 24) + "px)", opacity: 1, offset: 0.2 },
          { transform: "translateX(" + (xm - 8) + "px)", opacity: 1 },
        ],
        { duration: 950, easing: "cubic-bezier(.4,0,.3,1)", fill: "forwards" }
      );
      a1.onfinish = () => {
        /* decision ring */
        const ring = document.createElement("div");
        ring.className = "ring";
        ring.style.left = xm + "px";
        f.appendChild(ring);
        ring.animate(
          [
            { transform: "scale(.6)", opacity: 0.9 },
            { transform: "scale(2.6)", opacity: 0 },
          ],
          { duration: 620, easing: "ease-out" }
        ).onfinish = () => ring.remove();

        this.after(430, () => {
          if (!stopped) {
            verdict.textContent = "admissible";
            verdict.className = "verdict";
            verdict.style.opacity = 1;
            dot.animate(
              [
                { transform: "translateX(" + (xm - 8) + "px)", opacity: 1 },
                { transform: "translateX(" + x1 + "px)", opacity: 1, offset: 0.85 },
                { transform: "translateX(" + (x1 + 4) + "px)", opacity: 0 },
              ],
              { duration: 850, easing: "cubic-bezier(.4,0,.3,1)", fill: "forwards" }
            ).onfinish = () => {
              dot.remove();
              const ex = f.querySelector("#exec");
              ex.classList.add("hit");
              this.after(320, () => ex.classList.remove("hit"));
            };
          } else {
            verdict.textContent = "held · not admissible";
            verdict.className = "verdict dim";
            verdict.style.opacity = 1;
            dot.classList.add("held");
            dot.animate(
              [
                { transform: "translateX(" + (xm - 8) + "px) scale(1)", opacity: 1 },
                { transform: "translateX(" + (xm - 14) + "px) scale(.75)", opacity: 0.55, offset: 0.6 },
                { transform: "translateX(" + (xm - 18) + "px) scale(.55)", opacity: 0 },
              ],
              { duration: 800, easing: "ease-out", fill: "forwards" }
            ).onfinish = () => dot.remove();
          }
          this.after(1500, () => (verdict.style.opacity = 0));
        });
      };
    }
  }

  /* ============================================================
     2 · <ax-signals> — many factors, one decision
     ============================================================ */
  class AxSignals extends AxWidget {
    defaultHeight() { return 300; }
    css() {
      return (
        "svg{position:absolute;inset:0;width:100%;height:100%}" +
        ".sline{stroke:var(--line);stroke-width:1;transition:stroke .5s}" +
        ".sline.hot{stroke:var(--line-hi)}" +
        ".snode{cursor:default}" +
        ".snode circle.c{fill:rgba(var(--ar),.1);stroke:rgba(var(--ar),.4);stroke-width:1.2;transition:all .4s}" +
        ".snode.hot circle.c{fill:rgba(var(--ar),.28);stroke:var(--blue)}" +
        ".snode text{fill:var(--faint);font-size:10px;letter-spacing:.08em;text-anchor:middle;" +
        "font-family:inherit;text-transform:uppercase;transition:fill .4s;pointer-events:none}" +
        ".snode.hot text{fill:var(--muted)}" +
        ".center circle.core{fill:rgba(var(--ar),.14);stroke:var(--blue-soft);stroke-width:1.2}" +
        ".center circle.halo{fill:none;stroke:rgba(var(--ar),.25);stroke-width:1}" +
        ".center text{fill:var(--muted);font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;text-anchor:middle;font-family:inherit}"
      );
    }
    html() {
      return (
        '<div class="cap">Decision evaluation</div>' +
        '<svg id="s" xmlns="http://www.w3.org/2000/svg"></svg>'
      );
    }
    setup() {
      const NS = "http://www.w3.org/2000/svg";
      const svg = this.frame.querySelector("#s");
      const W = 520, H = 300;
      svg.setAttribute("viewBox", "0 0 " + W + " " + H);
      const cx = W / 2, cy = H / 2 + 6;
      const SIG = [
        ["Authority", "Was this action actually delegated to this agent, with what limits, valid right now?"],
        ["Context", "What surrounds the request — the workflow, the trigger, what came before it."],
        ["Policy", "Live organizational rules, versioned and evaluated at the moment of the action."],
        ["Time", "Freeze windows, expirations, hours — when matters as much as what."],
        ["Environment", "Where the action lands. The same command means different things in different places."],
      ];
      this.nodes = SIG.map((s, i) => {
        const a = (i / SIG.length) * Math.PI * 2 - Math.PI / 2;
        const x = cx + Math.cos(a) * 168, y = cy + Math.sin(a) * 98;
        const line = document.createElementNS(NS, "line");
        line.setAttribute("x1", x); line.setAttribute("y1", y);
        line.setAttribute("x2", cx); line.setAttribute("y2", cy);
        line.setAttribute("class", "sline");
        svg.appendChild(line);
        const g = document.createElementNS(NS, "g");
        g.setAttribute("class", "snode");
        const c = document.createElementNS(NS, "circle");
        c.setAttribute("class", "c");
        c.setAttribute("cx", x); c.setAttribute("cy", y); c.setAttribute("r", 11);
        const t = document.createElementNS(NS, "text");
        t.setAttribute("x", x);
        t.setAttribute("y", y + (y < cy ? -20 : 28));
        t.textContent = s[0];
        const hit = document.createElementNS(NS, "circle");
        hit.setAttribute("cx", x); hit.setAttribute("cy", y); hit.setAttribute("r", 26);
        hit.setAttribute("fill", "transparent");
        hit.dataset.tiptitle = s[0];
        hit.dataset.tip = s[1];
        g.appendChild(c); g.appendChild(t); g.appendChild(hit);
        svg.appendChild(g);
        hit.addEventListener("mouseenter", () => { g.classList.add("hot"); line.classList.add("hot"); });
        hit.addEventListener("mouseleave", () => { g.classList.remove("hot"); line.classList.remove("hot"); });
        return { g, line, x, y };
      });
      /* center */
      const cg = document.createElementNS(NS, "g");
      cg.setAttribute("class", "center");
      const halo = document.createElementNS(NS, "circle");
      halo.setAttribute("class", "halo");
      halo.setAttribute("cx", cx); halo.setAttribute("cy", cy); halo.setAttribute("r", 30);
      const core = document.createElementNS(NS, "circle");
      core.setAttribute("class", "core");
      core.setAttribute("cx", cx); core.setAttribute("cy", cy); core.setAttribute("r", 19);
      const ct = document.createElementNS(NS, "text");
      ct.setAttribute("x", cx); ct.setAttribute("y", cy + 44);
      ct.textContent = "decision";
      cg.appendChild(halo); cg.appendChild(core); cg.appendChild(ct);
      svg.appendChild(cg);
      this.svg = svg; this.NS = NS; this.cx = cx; this.cy = cy;
      this.halo = halo;
      this.every(2800, () => this.converge());
    }
    converge() {
      const { svg, NS, cx, cy } = this;
      this.nodes.forEach((n, i) => {
        this.after(i * 130, () => {
          n.line.classList.add("hot");
          n.g.classList.add("hot");
          const d = document.createElementNS(NS, "circle");
          d.setAttribute("r", 2.6);
          d.setAttribute("fill", this.T.accent);
          svg.appendChild(d);
          d.animate(
            [
              { transform: "translate(" + n.x + "px," + n.y + "px)", opacity: 0.2 },
              { transform: "translate(" + n.x + "px," + n.y + "px)", opacity: 1, offset: 0.15 },
              { transform: "translate(" + cx + "px," + cy + "px)", opacity: 0.9 },
            ],
            { duration: 800, easing: "cubic-bezier(.4,0,.4,1)" }
          ).onfinish = () => {
            d.remove();
            n.line.classList.remove("hot");
            n.g.classList.remove("hot");
          };
        });
      });
      /* resolution pulse */
      this.after(1150, () => {
        const p = document.createElementNS(NS, "circle");
        p.setAttribute("cx", cx); p.setAttribute("cy", cy); p.setAttribute("r", 19);
        p.setAttribute("fill", "none");
        p.setAttribute("stroke", this.T.accent);
        p.setAttribute("stroke-width", "1.2");
        svg.appendChild(p);
        p.animate(
          [
            { transform: "scale(1)", transformOrigin: cx + "px " + cy + "px", opacity: 0.9 },
            { transform: "scale(2.1)", transformOrigin: cx + "px " + cy + "px", opacity: 0 },
          ],
          { duration: 900, easing: "ease-out" }
        ).onfinish = () => p.remove();
      });
    }
  }

  /* ============================================================
     3 · <ax-outcomes> — one gate, five fates
     ============================================================ */
  class AxOutcomes extends AxWidget {
    defaultHeight() { return 280; }
    css() {
      return (
        ":host([theme='light']){--green:#479a60;--blue:#5280b8;--violet:#8d78c4;" +
        "--ar:82,128,184;--vr:141,120,196;--line:rgba(var(--ar),.18);--line-hi:rgba(var(--ar),.42)}" +
        ".gate{position:absolute;left:50%;top:50%;width:4px;height:96px;transform:translate(-50%,-50%);" +
        "background:repeating-linear-gradient(45deg,#D4DAE3 0px,#D4DAE3 8px,#AEB5BF 8px,#AEB5BF 16px);" +
        "background-size:22.627px 22.627px;z-index:6;pointer-events:none}" +
        ".track{position:absolute;left:10%;right:10%;top:50%;height:1px;background:var(--line)}" +
        ".alt{position:absolute;left:50%;width:34%;top:74%;height:1px;" +
        "background:repeating-linear-gradient(90deg,var(--line) 0 5px,transparent 5px 11px)}" +
        ":host([theme='light']) .alt{background:repeating-linear-gradient(90deg,rgba(var(--vr),.34) 0 5px,transparent 5px 11px)}" +
        ".human{position:absolute;left:72%;top:17%;transform:translate(-50%,-50%);" +
        "transition:filter .4s;z-index:5;line-height:0}" +
        ".human img{display:block;width:33px;height:30px}" +
        ".human.hit{filter:drop-shadow(0 0 10px rgba(var(--ar),.55))}" +
        ".hlbl{position:absolute;left:72%;top:17%;transform:translate(-50%,20px);font-size:9px;letter-spacing:.12em;" +
        "text-transform:uppercase;color:var(--faint)}" +
        ".endr{position:absolute;left:90%;top:50%;width:9px;height:9px;border-radius:50%;transform:translate(-50%,-50%);" +
        "border:1px solid var(--line-hi);background:rgba(var(--ar),.12)}" +
        ".endr2{position:absolute;left:84%;top:74%;width:7px;height:7px;border-radius:50%;transform:translate(-50%,-50%);" +
        "border:1px solid rgba(var(--vr),.5);background:rgba(var(--vr),.12)}" +
        ".pill{position:absolute;top:50%;left:0;width:11px;height:11px;margin-top:-5.5px;border-radius:50%;" +
        "background:rgba(139,148,168,.45);box-shadow:0 0 8px rgba(var(--wr),.1);will-change:transform,opacity}" +
        ":host([theme='light']) .pill{background:#b0b7bf}" +
        ".olabel{position:absolute;left:50%;bottom:14px;transform:translateX(-50%);font-size:10.5px;font-weight:600;" +
        "letter-spacing:.16em;text-transform:uppercase;transition:opacity .4s,color .4s;color:var(--muted)}"
      );
    }
    html() {
      return (
        '<div class="cap">Governed outcomes</div>' +
        '<div class="track"></div><div class="alt"></div>' +
        '<div class="gate" data-tiptitle="The same governance" data-tip="One boundary, many outcomes. The situation decides which."></div>' +
        '<div class="human" data-tiptitle="Escalation" data-tip="Some decisions belong to a person. They arrive with full context attached.">' +
        '<img src="/assets/human.svg" alt="" aria-hidden="true" width="33" height="30"></div>' +
        '<div class="hlbl">human</div>' +
        '<div class="endr"></div><div class="endr2"></div>' +
        '<div class="olabel" id="ol" style="opacity:0"></div>'
      );
    }
    setup() {
      if (this.getAttribute("theme") === "light") {
        this._out = {
          allow: "#479a60",
          modify: "#5280b8",
          reroute: "#8d78c4",
        };
      }
      this.SC = [
        { name: "allow", color: "var(--green)" },
        { name: "modify", color: "#F0A84B" },
        { name: "escalate", color: "var(--blue)" },
        { name: "reroute", color: "var(--violet)" },
        { name: "deny", color: "#F54141" },
      ];
      this.i = 0;
      this.busy = false;
      this.frame.addEventListener("click", () => { if (!this.busy) this.run(true); });
      this.every(3600, () => { if (!this.busy) this.run(false); });
    }
    run(manual) {
      this.busy = true;
      const f = this.frame, W = f.clientWidth, H = f.clientHeight;
      const sc = this.SC[this.i % 5];
      this.i++;
      const x0 = W * 0.1, xm = W * 0.5, x1 = W * 0.9;
      const xAllow = x1 - 5;
      const yMid = H * 0.5;
      const p = document.createElement("div");
      p.className = "pill";
      f.appendChild(p);
      const ol = f.querySelector("#ol");
      const a1 = p.animate(
        [
          { transform: "translate(" + x0 + "px,0)", opacity: 0 },
          { transform: "translate(" + (x0 + 20) + "px,0)", opacity: 1, offset: 0.18 },
          { transform: "translate(" + (xm - 16) + "px,0)", opacity: 1 },
        ],
        { duration: 800, easing: "cubic-bezier(.4,0,.3,1)", fill: "forwards" }
      );
      a1.onfinish = () => {
        this.after(300, () => {
          ol.textContent = sc.name;
          ol.style.color = sc.color;
          ol.style.opacity = 1;
          const out = this._out || this.T.out;
          const col =
            sc.name === "escalate" ? out.modify :
            sc.name === "deny" ? "#F54141" :
            sc.name === "modify" ? "#F0A84B" :
            out[sc.name];
          p.style.background = col;
          p.style.boxShadow = "0 0 12px " + col + "88";
          let anim;
          if (sc.name === "allow") {
            anim = p.animate(
              [
                { transform: "translate(" + (xm - 16) + "px,0)" },
                { transform: "translate(" + xAllow + "px,0)", opacity: 1, offset: 0.85 },
                { transform: "translate(" + (xAllow + 5) + "px,0)", opacity: 0 },
              ],
              { duration: 800, easing: "cubic-bezier(.4,0,.3,1)", fill: "forwards" }
            );
          } else if (sc.name === "modify") {
            p.style.borderRadius = "3px"; /* reshaped on the way through */
            p.style.width = "16px";
            anim = p.animate(
              [
                { transform: "translate(" + (xm - 16) + "px,0) rotate(0deg)" },
                { transform: "translate(" + (xm + 30) + "px,0) rotate(90deg)", offset: 0.3 },
                { transform: "translate(" + x1 + "px,0) rotate(90deg)", opacity: 1, offset: 0.85 },
                { transform: "translate(" + (x1 + 5) + "px,0) rotate(90deg)", opacity: 0 },
              ],
              { duration: 950, easing: "cubic-bezier(.4,0,.3,1)", fill: "forwards" }
            );
          } else if (sc.name === "escalate") {
            const hx = W * 0.72 - 5, hy = H * 0.17 - yMid - 5;
            anim = p.animate(
              [
                { transform: "translate(" + (xm - 16) + "px,0)" },
                { transform: "translate(" + (xm + 40) + "px," + hy * 0.35 + "px)", offset: 0.4 },
                { transform: "translate(" + hx + "px," + hy + "px)", opacity: 1, offset: 0.9 },
                { transform: "translate(" + hx + "px," + hy + "px)", opacity: 0 },
              ],
              { duration: 1000, easing: "cubic-bezier(.35,0,.3,1)", fill: "forwards" }
            );
            anim.onfinish = () => {
              const h = f.querySelector(".human");
              h.classList.add("hit");
              this.after(400, () => h.classList.remove("hit"));
            };
          } else if (sc.name === "reroute") {
            const ry = H * 0.74 - yMid, rx = W * 0.84 - 5;
            anim = p.animate(
              [
                { transform: "translate(" + (xm - 16) + "px,0)" },
                { transform: "translate(" + (xm + 34) + "px," + ry * 0.7 + "px)", offset: 0.4 },
                { transform: "translate(" + rx + "px," + ry + "px)", opacity: 1, offset: 0.88 },
                { transform: "translate(" + (rx + 4) + "px," + ry + "px)", opacity: 0 },
              ],
              { duration: 1000, easing: "cubic-bezier(.35,0,.3,1)", fill: "forwards" }
            );
          } else {
            anim = p.animate(
              [
                { transform: "translate(" + (xm - 16) + "px,0) scale(1)", opacity: 1 },
                { transform: "translate(" + (xm - 20) + "px,0) scale(.7)", opacity: 0.5, offset: 0.6 },
                { transform: "translate(" + (xm - 24) + "px,0) scale(.5)", opacity: 0 },
              ],
              { duration: 750, easing: "ease-out", fill: "forwards" }
            );
          }
          const done = () => {
            p.remove();
            this.after(700, () => { ol.style.opacity = 0; this.busy = false; });
          };
          if (anim.onfinish) {
            const prev = anim.onfinish;
            anim.onfinish = () => { prev(); done(); };
          } else anim.onfinish = done;
        });
      };
    }
  }

  /* ============================================================
     4 · <ax-receipt> — governance creates evidence
     ============================================================ */
  class AxReceipt extends AxWidget {
    defaultHeight() { return 308; }
    css() {
      return (
        ".rc{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(250px,80%);" +
        "border-radius:12px;border:1px solid rgba(var(--ar),.24);overflow:hidden;" +
        "background:linear-gradient(175deg,rgba(var(--ar),.06),rgba(var(--wr),.015));" +
        "font-family:var(--mono);font-size:10.5px}" +
        ".rc .h{padding:11px 15px 9px;border-bottom:1px dashed rgba(var(--ar),.22);display:flex;" +
        "justify-content:space-between;align-items:center}" +
        ".rc .h .a{font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:var(--blue);font-weight:500}" +
        ".rc .h .b{font-size:9px;color:var(--faint)}" +
        ".row{display:flex;justify-content:space-between;padding:5.5px 15px;border-bottom:1px solid rgba(var(--wr),.035);" +
        "opacity:0;transform:translateX(-7px);transition:all .4s}" +
        ".row.show{opacity:1;transform:none}" +
        ".row .k{color:var(--faint)}.row .v{color:var(--text)}" +
        ".sig{padding:7px 15px 8px;background:rgba(var(--ar),.04)}" +
        ".sig .k{font-size:8.5px;letter-spacing:.12em;color:var(--faint);text-transform:uppercase;margin-bottom:3px;" +
        "display:flex;justify-content:space-between;align-items:center}" +
        ".sig .hash{white-space:nowrap;color:var(--blue);font-size:9.5px;line-height:1.35;transition:color .5s}" +
        ".sig .hash.ok{color:var(--green)}" +
        ".vmark{display:inline-flex;align-items:center;gap:5px;font-size:9px;color:var(--green);opacity:0;transition:opacity .5s}" +
        ".vmark.show{opacity:1}" +
        ".vmark svg{width:11px;height:11px}"
      );
    }
    html() {
      return (
        '<div class="cap">Admissibility record</div>' +
        '<div class="rc" data-tiptitle="Evidence, not logs" data-tip="Signed at the moment of decision, chained to what came before. Anyone can verify it. No one can forge it.">' +
        '<div class="h"><span class="a">record</span><span class="b" id="rid"></span></div>' +
        '<div id="rows"></div>' +
        '<div class="sig"><div class="k"><span>signature</span><span class="vmark" id="vm">' +
        '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>' +
        '<path d="M8 12.5l2.6 2.6L16 9.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
        "verified</span></div>" +
        '<div class="hash" id="hash"></div></div></div>'
      );
    }
    setup() {
      this._token = 0;
      this.every(8200, () => this.cycle());
      this.after(500, () => this.cycle());
    }
    _bindTips() {
      const rc = this.frame.querySelector(".rc");
      if (!rc) return;
      const title = rc.dataset.tiptitle || "";
      const body = rc.dataset.tip || "";
      const place = (e) => {
        const fr = this.frame.getBoundingClientRect();
        const w = this.tipEl.offsetWidth;
        const hh = this.tipEl.offsetHeight;
        let x = e.clientX - fr.left + 12;
        let y = e.clientY - fr.top + 12;
        x = Math.max(8, Math.min(x, fr.width - w - 8));
        y = Math.max(8, Math.min(y, fr.height - hh - 8));
        this.tipEl.style.left = x + "px";
        this.tipEl.style.top = y + "px";
      };
      const show = (e) => {
        this.tipEl.innerHTML =
          (title ? '<span class="tt">' + title + "</span>" : "") + body;
        this.tipEl.classList.add("show");
        place(e);
      };
      rc.addEventListener("mouseenter", show);
      rc.addEventListener("mousemove", (e) => {
        if (this.tipEl.classList.contains("show")) place(e);
      });
      rc.addEventListener("mouseleave", () => this.tipEl.classList.remove("show"));
    }
    cycle() {
      const tk = ++this._token;
      const ok = () => tk === this._token;
      const f = this.frame;
      const rows = f.querySelector("#rows"), hashEl = f.querySelector("#hash"), vm = f.querySelector("#vm");
      rows.innerHTML = "";
      hashEl.textContent = "";
      hashEl.classList.remove("ok");
      vm.classList.remove("show");
      f.querySelector("#rid").textContent = "0x" + hex(6);
      const now = new Date();
      const DATA = [
        ["decision", pick(["allow", "modify", "escalate", "deny", "reroute"])],
        ["basis", "delegated authority"],
        ["evaluated", now.toISOString().slice(11, 19) + "Z"],
        ["chain", "⛓ 0x" + hex(6) + "…"],
      ];
      DATA.forEach((r, i) => {
        this.after(200 + i * 260, () => {
          if (!ok()) return;
          const d = document.createElement("div");
          d.className = "row";
          d.innerHTML = '<span class="k">' + r[0] + '</span><span class="v">' + r[1] + "</span>";
          rows.appendChild(d);
          requestAnimationFrame(() => requestAnimationFrame(() => d.classList.add("show")));
        });
      });
      /* type hash */
      const hashLen = 37;
      const full = hex(hashLen);
      this.after(200 + 4 * 260 + 150, () => {
        if (!ok()) return;
        let i = 0;
        const t = setInterval(() => {
          if (!ok()) { clearInterval(t); return; }
          i += 2;
          hashEl.textContent = full.slice(0, i);
          if (i >= hashLen) {
            clearInterval(t);
            this.after(450, () => {
              if (!ok()) return;
              hashEl.classList.add("ok");
              vm.classList.add("show");
            });
          }
        }, 26);
        this._timers.push(t);
      });
    }
  }

  /* ============================================================
     5 · <ax-replay> — decisions reconstruct from evidence
     ============================================================ */
  class AxReplay extends AxWidget {
    defaultHeight() { return 280; }
    css() {
      return (
        ".chips{position:absolute;left:0;right:0;bottom:34px;display:flex;justify-content:center;gap:8px}" +
        ".chipr{font-family:var(--mono);font-size:9.5px;padding:5px 10px;border-radius:7px;cursor:pointer;" +
        "border:1px solid var(--line);background:rgba(var(--ar),.04);color:var(--faint);transition:all .35s}" +
        ".chipr:hover{color:var(--muted);border-color:var(--line-hi)}" +
        ".chipr.sel{color:var(--blue);border-color:var(--blue-soft);background:rgba(var(--ar),.1);" +
        "box-shadow:0 0 16px rgba(var(--ar),.14);transform:translateY(-3px)}" +
        ".lane{position:absolute;left:12%;right:12%;top:44%;height:1px;background:var(--line)}" +
        ".lane .fill{position:absolute;right:0;top:0;height:1px;width:0;background:var(--line-hi);transition:width .9s cubic-bezier(.4,0,.3,1)}" +
        ".step{position:absolute;top:44%;transform:translate(-50%,-50%);text-align:center;opacity:0;transition:opacity .5s,transform .5s}" +
        ".step.show{opacity:1}" +
        ".step .b{width:12px;height:12px;border-radius:50%;margin:0 auto;border:1px solid var(--blue-soft);" +
        "background:rgba(var(--ar),.14)}" +
        ".step.show .b{box-shadow:0 0 14px rgba(var(--ar),.35)}" +
        ".step .l{margin-top:9px;font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);white-space:nowrap}" +
        ".rebuilt{position:absolute;left:50%;top:16%;transform:translateX(-50%);font-size:10px;letter-spacing:.14em;" +
        "text-transform:uppercase;color:var(--green);opacity:0;transition:opacity .5s;white-space:nowrap}" +
        ".rebuilt.show{opacity:.95}"
      );
    }
    html() {
      const steps = ["inputs", "decision", "outcome", "receipt"];
      const pos = [16, 39, 62, 85];
      let s = "";
      steps.forEach((n, i) => {
        s += '<div class="step" id="st' + i + '" style="left:' + pos[i] + '%"><div class="b"></div><div class="l">' + n + "</div></div>";
      });
      return (
        '<div class="cap">Audit replay</div>' +
        '<div class="lane"><div class="fill" id="fill"></div></div>' + s +
        '<div class="rebuilt" id="rb">decision reconstructed from evidence</div>' +
        '<div class="chips" id="chips"></div>' +
        '<div class="sub">select a receipt · watch it replay</div>'
      );
    }
    setup() {
      const chips = this.frame.querySelector("#chips");
      this.chipEls = [];
      for (let i = 0; i < 5; i++) {
        const c = document.createElement("button");
        c.className = "chipr";
        c.textContent = "0x" + hex(4);
        c.addEventListener("click", () => this.play(i));
        chips.appendChild(c);
        this.chipEls.push(c);
      }
      this._busy = false;
      this._auto = 0;
      this.every(5200, () => { if (!this._busy) this.play(this._auto++ % 5); });
    }
    play(i) {
      if (this._busy) return;
      this._busy = true;
      const f = this.frame;
      this.chipEls.forEach((c, j) => c.classList.toggle("sel", j === i));
      const fill = f.querySelector("#fill"), rb = f.querySelector("#rb");
      const steps = [3, 2, 1, 0].map((n) => f.querySelector("#st" + n));
      /* reset */
      rb.classList.remove("show");
      steps.forEach((s) => s.classList.remove("show"));
      fill.style.transition = "none";
      fill.style.width = "0";
      void fill.offsetWidth;
      fill.style.transition = "width 2.2s cubic-bezier(.4,0,.3,1)";
      this.after(350, () => {
        fill.style.width = "100%";
        /* reveal backwards: receipt → outcome → decision → inputs */
        steps.forEach((s, j) => this.after(300 + j * 520, () => s.classList.add("show")));
        this.after(300 + 4 * 520 + 200, () => {
          rb.classList.add("show");
          this.after(1600, () => {
            this._busy = false;
          });
        });
      });
    }
  }

  /* ============================================================
     6 · <ax-flow> — throughput, calmly governed
     ============================================================ */
  class AxFlow extends AxWidget {
    defaultHeight() { return 300; }
    css() {
      return (
        "canvas{position:absolute;inset:0;width:100%;height:100%}" +
        ".band{position:absolute;left:50%;top:0;bottom:0;width:1px;" +
        "background:linear-gradient(180deg,transparent,var(--blue-soft) 25%,var(--blue-soft) 75%,transparent);opacity:.5}" +
        ".flowtip{position:absolute;z-index:15;pointer-events:none;font-family:var(--mono);font-size:9.5px;" +
        "color:var(--blue);background:rgba(var(--tipr),.96);border:1px solid rgba(var(--ar),.32);border-radius:7px;" +
        "padding:5px 9px;opacity:0;transition:opacity .25s;white-space:nowrap}" +
        ".flowtip.show{opacity:1}"
      );
    }
    html() {
      return (
        '<div class="cap">Enterprise flow</div>' +
        '<canvas id="cv"></canvas>' +
        '<div class="band"></div>' +
        '<div class="flowtip" id="ft"></div>' +
        '<div class="sub">every one of these was governed</div>'
      );
    }
    setup() {
      const cv = this.frame.querySelector("#cv");
      /* alpha:false + 1x DPR: these are 1–2px dots, retina buys nothing */
      const ctx = cv.getContext("2d", { alpha: true });
      const ft = this.frame.querySelector("#ft");
      let W = 0, H = 0;
      const size = () => {
        W = this.frame.clientWidth; H = this.frame.clientHeight;
        cv.width = W; cv.height = H;
      };
      size();
      this._resize = size;
      window.addEventListener("resize", size);
      const MAX = 90;
      const ps = [];
      const spawn = (x) => ps.push({
        x: x !== undefined ? x : -4,
        y: rand(H * 0.12, H * 0.88),
        sp: rand(0.5, 1.4),
        r: rand(1, 1.8),
        hi: false, id: null, passed: false,
      });
      for (let i = 0; i < MAX * 0.8; i++) spawn(rand(0, W));
      let mx = -100, my = -100;
      this.frame.addEventListener("mousemove", (e) => {
        const r = this.frame.getBoundingClientRect();
        mx = e.clientX - r.left; my = e.clientY - r.top;
      });
      this.frame.addEventListener("mouseleave", () => { mx = my = -100; });
      let lastHi = 0, last = 0;
      const FRAME = 33; /* ~30fps — indistinguishable for a slow drift, half the work */
      this.startLoop((t) => {
        if (t - last < FRAME) return;
        const dt = Math.min((t - last) / 16.7, 3) || 1; /* speed-compensate for the cap */
        last = t;
        const C = this.T; /* live theme colors */
        ctx.clearRect(0, 0, W, H);
        if (ps.length < MAX && Math.random() > 0.45) spawn();
        if (t - lastHi > 1600) {
          lastHi = t;
          const c = ps.filter((p) => !p.hi && p.x > W * 0.52 && p.x < W * 0.75);
          if (c.length) {
            const p = pick(c);
            p.hi = true;
            p.id = "0x" + hex(4);
          }
        }
        let tipShown = false;
        /* pass 1: dim stream, batched into two fills (pre-band / post-band) */
        ctx.fillStyle = "rgba(" + C.dim + ",.32)";
        for (let i = ps.length - 1; i >= 0; i--) {
          const p = ps[i];
          p.x += p.sp * dt;
          if (!p.passed && p.x > W / 2) { p.passed = true; p.sp *= 0.96; }
          if (p.x > W + 6) { ps.splice(i, 1); continue; }
          if (!p.hi && !p.passed) ctx.fillRect(p.x, p.y, p.r, p.r);
        }
        ctx.fillStyle = "rgba(" + C.dim + ",.5)";
        for (let i = 0; i < ps.length; i++) {
          const p = ps[i];
          if (!p.hi && p.passed) ctx.fillRect(p.x, p.y, p.r, p.r);
        }
        /* pass 2: the few governed highlights (arcs are fine at this count) */
        for (let i = 0; i < ps.length; i++) {
          const p = ps[i];
          if (!p.hi) continue;
          const nearMouse = Math.abs(p.x - mx) < 16 && Math.abs(p.y - my) < 16;
          ctx.fillStyle = "rgba(" + C.accentR + ",.95)";
          ctx.beginPath(); ctx.arc(p.x, p.y, 2.4, 0, 7); ctx.fill();
          ctx.strokeStyle = "rgba(" + C.accentR + "," + (nearMouse ? ".8" : ".35") + ")";
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.arc(p.x, p.y, nearMouse ? 8 : 6, 0, 7); ctx.stroke();
          if (nearMouse && !tipShown) {
            tipShown = true;
            ft.textContent = "governed decision · rec " + p.id;
            ft.classList.add("show");
            ft.style.left = Math.min(p.x + 12, W - 150) + "px";
            ft.style.top = Math.max(p.y - 26, 8) + "px";
          }
        }
        if (!tipShown) ft.classList.remove("show");
      });
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      window.removeEventListener("resize", this._resize);
    }
  }

  /* ============================================================
     7 · <ax-sequence> — every step valid, the sequence isn't
     The "telephone game" failure mode: per-step checks pass while
     cumulative drift quietly leaves the delegated-intent envelope.
     Loops in two phases: today (per-request checks) vs governed
     (the sequence itself is evaluated, and held before commit).
     ============================================================ */
  class AxSequence extends AxWidget {
    defaultHeight() { return 235; }
    css() {
      return (
        "svg{position:absolute;inset:0;width:100%;height:100%}" +
        ".dl{fill:none;stroke:rgba(var(--ar),.75);stroke-width:1.6;stroke-linecap:round;transition:stroke .5s}" +
        ".dl.warn{stroke:#F54141}" +
        ".thl{stroke:var(--faint);stroke-width:1;stroke-dasharray:4 6;opacity:.55}" +
        ".endp{fill:#F54141;opacity:0}" +
        ".hold-bar{position:absolute;width:4px;transform:translateX(-50%);" +
        "background:repeating-linear-gradient(45deg,#D4DAE3 0px,#D4DAE3 8px,#AEB5BF 8px,#AEB5BF 16px);" +
        "background-size:22.627px 22.627px;opacity:0;z-index:6;pointer-events:none}" +
        ".dl.held-tail{stroke:rgba(245,65,65,.55);stroke-width:1.6;fill:none}" +
        ".spill{position:absolute;width:13px;height:13px;border-radius:4px;transform:translate(-50%,-50%) scale(.6);" +
        "background:rgba(var(--ar),.16);border:1px solid rgba(var(--ar),.55);opacity:0;" +
        "transition:opacity .35s,transform .35s,border-color .35s;z-index:5}" +
        ".spill.in{opacity:1;transform:translate(-50%,-50%) scale(1)}" +
        ".spill.blocked{border-style:dashed;border-color:#F54141;background:rgba(245,65,65,.12)}" +
        ".stick{position:absolute;transform:translate(-50%,0);font-size:10px;opacity:0;transition:opacity .3s;" +
        "color:var(--green);z-index:5}" +
        ".stick.in{opacity:1}.stick.blocked{color:#F54141}" +
        ".cap{opacity:0;transition:opacity .28s ease}.cap.show{opacity:1}" +
        ".th-cap{position:absolute;left:16px;font-size:9.5px;font-weight:600;letter-spacing:.2em;" +
        "text-transform:uppercase;color:var(--faint);z-index:8;pointer-events:none;transform:translateY(-50%)}"
      );
    }
    html() {
      return (
        '<div class="cap" id="cap"></div>' +
        '<div class="th-cap" id="th-cap">Admissibility</div>' +
        '<svg id="sq" xmlns="http://www.w3.org/2000/svg"></svg>' +
        '<div id="layer" data-tiptitle="Locally valid" data-tip="Every individual step passes its own check. The risk lives in the pattern they compose." style="position:absolute;inset:0"></div>'
      );
    }
    setup() {
      this._tok = 0;
      this._phase = 0;
      this.every(10500, () => this.cycle());
      this.after(600, () => this.cycle());
    }
    cycle() {
      const tk = ++this._tok, ok = () => tk === this._tok;
      const governed = this._phase++ % 2 === 1;
      const f = this.frame, W = f.clientWidth, H = f.clientHeight;
      const svg = f.querySelector("#sq"), layer = f.querySelector("#layer");
      const cap = f.querySelector("#cap");
      const NS = "http://www.w3.org/2000/svg";
      svg.setAttribute("viewBox", "0 0 " + W + " " + H);
      svg.innerHTML = "";
      layer.innerHTML = "";
      cap.classList.remove("show");
      const setCap = (text) => {
        cap.textContent = text;
        cap.classList.remove("show");
        requestAnimationFrame(() => requestAnimationFrame(() => {
          if (ok()) cap.classList.add("show");
        }));
      };
      this.after(140, () => {
        if (!ok()) return;
        setCap(governed ? "Runtime intervention" : "Multi-agent sequence drift");
      });

      const span = H * 0.27;
      const base = H * 0.71;
      const pillY = base + 16;
      const stickY = base + 28;
      const threshY = base - span;       /* the delegated-intent envelope */
      const thLineY = threshY - 5;
      const thCap = f.querySelector("#th-cap");
      thCap.style.top = thLineY + "px";
      const lineStart = 16 + (thCap.offsetWidth || 0) + 10;
      const xs = [0, 1, 2, 3, 4, 5].map((i) => W * (0.12 + i * 0.14));
      const drift = [0.1, 0.22, 0.4, 0.62, 1.08, 1.5]; /* ×span; crosses at step 5 */

      /* admissibility threshold line */
      const th = document.createElementNS(NS, "line");
      th.setAttribute("x1", lineStart); th.setAttribute("x2", W * 0.92);
      th.setAttribute("y1", thLineY); th.setAttribute("y2", thLineY);
      th.setAttribute("class", "thl");
      svg.appendChild(th);

      const ptY = (i) => base - Math.min(drift[i], 1.5) * span;
      const drawSeg = (x1, y1, x2, y2, cls, dotted) => {
        const len = Math.hypot(x2 - x1, y2 - y1);
        if (len < 1) return null;
        if (dotted) {
          const ux = (x2 - x1) / len;
          const uy = (y2 - y1) / len;
          const dash = 4;
          const gap = 6;
          const duration = 500;
          let pos = 0;
          let on = true;
          while (pos < len - 0.01) {
            const chunk = Math.min(on ? dash : gap, len - pos);
            if (on) {
              const start = pos;
              const dLen = chunk;
              const delay = (start / len) * duration;
              const sx = x1 + ux * start;
              const sy = y1 + uy * start;
              const ex = x1 + ux * (start + dLen);
              const ey = y1 + uy * (start + dLen);
              this.after(delay, () => {
                if (!ok()) return;
                const d = document.createElementNS(NS, "line");
                d.setAttribute("x1", String(sx));
                d.setAttribute("y1", String(sy));
                d.setAttribute("x2", String(ex));
                d.setAttribute("y2", String(ey));
                d.setAttribute("class", cls);
                svg.appendChild(d);
                d.style.strokeDasharray = String(dLen);
                d.style.strokeDashoffset = String(dLen);
                d.animate(
                  [{ strokeDashoffset: dLen }, { strokeDashoffset: 0 }],
                  { duration: Math.max(70, dLen * 10), easing: "cubic-bezier(.4,0,.4,1)", fill: "forwards" }
                );
              });
            }
            pos += chunk;
            on = !on;
          }
          return null;
        }
        const s = document.createElementNS(NS, "line");
        s.setAttribute("x1", String(x1));
        s.setAttribute("y1", String(y1));
        s.setAttribute("x2", String(x2));
        s.setAttribute("y2", String(y2));
        s.setAttribute("class", cls);
        svg.appendChild(s);
        s.style.strokeDasharray = String(len);
        s.style.strokeDashoffset = String(len);
        s.animate(
          [{ strokeDashoffset: len }, { strokeDashoffset: 0 }],
          { duration: 420, easing: "cubic-bezier(.4,0,.4,1)", fill: "forwards" }
        );
        return s;
      };

      let prevPt = null;
      let lastSeg = null;

      const STEP = 700;
      for (let i = 0; i <= 5; i++) {
        this.after(200 + i * STEP, () => {
          if (!ok()) return;
          if (governed && i > 4) return; /* run stops at the hold */
          const heldHere = governed && i === 4;
          const curX = xs[i];
          const curY = ptY(i);

          if (heldHere) {
            const barX = (xs[3] + xs[4]) / 2;
            const barTop = threshY - H * 0.16 - 20;
            const barBottom = base + 8;
            const bar = document.createElement("div");
            bar.className = "hold-bar";
            bar.style.left = barX + "px";
            bar.style.top = barTop + "px";
            bar.style.height = barBottom - barTop + "px";
            layer.appendChild(bar);
            bar.animate(
              [
                { opacity: 0 },
                { opacity: 1, offset: 0.1 },
                { opacity: 0, offset: 0.2 },
                { opacity: 1, offset: 0.3 },
                { opacity: 0, offset: 0.4 },
                { opacity: 1, offset: 0.5 },
                { opacity: 0, offset: 0.6 },
                { opacity: 1, offset: 0.7 },
                { opacity: 1 },
              ],
              { duration: 900, easing: "ease-in-out", fill: "forwards" }
            );

            if (prevPt) {
              const yViol = base - 1.5 * span;
              const endX = xs[5];
              const endY = yViol;
              const dx = endX - prevPt.x;
              const barY = prevPt.y + ((barX - prevPt.x) / dx) * (endY - prevPt.y);
              drawSeg(prevPt.x, prevPt.y, barX, barY, "dl held-tail", true);
              this.after(520, () => {
                if (!ok()) return;
                drawSeg(barX, barY, endX, endY, "dl held-tail", true);
              });
            }

            [4, 5].forEach((bi, idx) => {
              this.after(120 + idx * 140, () => {
                if (!ok()) return;
                const p = document.createElement("div");
                p.className = "spill blocked";
                p.style.left = xs[bi] + "px";
                p.style.top = pillY + "px";
                layer.appendChild(p);
                requestAnimationFrame(() => requestAnimationFrame(() => p.classList.add("in")));
                const k = document.createElement("div");
                k.className = "stick blocked";
                k.textContent = "×";
                k.style.left = xs[bi] + "px";
                k.style.top = stickY + "px";
                layer.appendChild(k);
                this.after(180, () => k.classList.add("in"));
              });
            });
            return;
          }

          /* the action pill */
          const p = document.createElement("div");
          p.className = "spill";
          p.style.left = curX + "px";
          p.style.top = pillY + "px";
          layer.appendChild(p);
          requestAnimationFrame(() => requestAnimationFrame(() => p.classList.add("in")));
          /* its local verdict */
          const k = document.createElement("div");
          k.className = "stick";
          k.textContent = "✓";
          k.style.left = curX + "px";
          k.style.top = stickY + "px";
          layer.appendChild(k);
          this.after(180, () => k.classList.add("in"));

          if (prevPt) {
            const segCls = !governed && i === 5 ? "dl warn" : "dl";
            lastSeg = drawSeg(prevPt.x, prevPt.y, curX, curY, segCls, false);
          }
          prevPt = { x: curX, y: curY };

          /* the punchline of the ungoverned run */
          if (!governed && i === 5) {
            this.after(500, () => {
              if (!ok()) return;
              const dot = document.createElementNS(NS, "circle");
              dot.setAttribute("cx", String(curX));
              dot.setAttribute("cy", String(curY));
              dot.setAttribute("r", "4");
              dot.setAttribute("class", "endp");
              svg.appendChild(dot);
              dot.animate(
                [{ opacity: 0 }, { opacity: 1, offset: 0.3 }, { opacity: 0.55 }],
                { duration: 900, fill: "forwards" }
              );
            });
          }
        });
      }
    }
  }

  /* ============================================================
     7b · <ax-drift> — alternative take on sequence drift
     The telephone game, literally: an agent makes six small turns,
     each within tolerance, and arrives somewhere no one chose.
     A faint cone shows the delegated intent. Ungoverned, the path
     exits it silently; governed, the trajectory is held pre-commit.
     ============================================================ */
  class AxDrift extends AxWidget {
    defaultHeight() { return 300; }
    css() {
      return (
        "svg{position:absolute;inset:0;width:100%;height:100%}" +
        ".cone{fill:rgba(var(--ar),.05);stroke:rgba(var(--ar),.28);stroke-width:1;" +
        "stroke-dasharray:4 6;transition:stroke .5s,fill .5s}" +
        ".cone.hot{stroke:rgba(var(--ar),.6);fill:rgba(var(--ar),.08)}" +
        ".seg{stroke:rgba(var(--ar),.8);stroke-width:1.7;stroke-linecap:round}" +
        ".seg.out{stroke:var(--amber)}" +
        ".ghost{stroke:var(--amber);stroke-width:1.6;stroke-dasharray:4 5;stroke-linecap:round;opacity:0;transition:opacity .5s}" +
        ".ghost.in{opacity:.85}" +
        ".tgt{fill:none;stroke:rgba(var(--ar),.5);stroke-width:1.2}" +
        ".tgtc{fill:rgba(var(--ar),.35)}" +
        ".tgtl{fill:var(--faint);font-size:9px;letter-spacing:.12em;text-transform:uppercase;font-family:inherit}" +
        ".gap{stroke:var(--amber);stroke-width:1;stroke-dasharray:2 5;opacity:0;transition:opacity .5s}" +
        ".gap.in{opacity:.7}" +
        ".joint{position:absolute;transform:translate(-50%,-50%);font-size:9.5px;opacity:0;transition:opacity .3s;" +
        "color:var(--green);z-index:5}" +
        ".joint.in{opacity:1}.joint.held{color:var(--amber);font-size:10.5px}" +
        ".mode{position:absolute;left:16px;bottom:11px;font-size:10.5px;color:var(--muted);z-index:8;letter-spacing:.03em}" +
        ".punch{position:absolute;left:50%;top:15%;transform:translateX(-50%);font-size:10.5px;font-weight:600;" +
        "letter-spacing:.1em;text-transform:uppercase;white-space:nowrap;opacity:0;transition:opacity .5s;z-index:8;max-width:94%}" +
        ".punch.warn{color:var(--amber)}.punch.okay{color:var(--blue)}"
      );
    }
    html() {
      return (
        '<div class="cap">Sequence drift · trajectory</div>' +
        '<svg id="dr" xmlns="http://www.w3.org/2000/svg" data-tiptitle="Delegated intent" ' +
        'data-tip="The faint cone is what was authorized. Each turn stays within local tolerance — the trajectory is what leaves."></svg>' +
        '<div id="jlayer" style="position:absolute;inset:0;pointer-events:none"></div>' +
        '<div class="mode" id="mode"></div>' +
        '<div class="punch" id="punch"></div>' +
        '<div class="sub">small approved turns still compound</div>'
      );
    }
    setup() {
      this._tok = 0;
      this._phase = 0;
      this.every(10500, () => this.cycle());
      this.after(600, () => this.cycle());
    }
    cycle() {
      const tk = ++this._tok, ok = () => tk === this._tok;
      const governed = this._phase++ % 2 === 1;
      const f = this.frame, W = f.clientWidth, H = f.clientHeight;
      const svg = f.querySelector("#dr"), jl = f.querySelector("#jlayer");
      const mode = f.querySelector("#mode"), punch = f.querySelector("#punch");
      const NS = "http://www.w3.org/2000/svg";
      svg.setAttribute("viewBox", "0 0 " + W + " " + H);
      svg.innerHTML = "";
      jl.innerHTML = "";
      punch.style.opacity = 0;
      mode.textContent = governed
        ? "with Adaptablox — the trajectory is evaluated"
        : "today — each turn checked in isolation";

      /* geometry: start left, intent cone toward a target on the right */
      const x0 = W * 0.08, y0 = H * 0.4;
      const R = W * 0.74;                       /* cone reach */
      const tan8 = 0.14;                        /* cone half-angle */
      const DEV = [2, 4, 7, 11, 16, 22];        /* per-turn deviation, degrees */
      const L = W * 0.115;                      /* segment length */
      const pts = [{ x: x0, y: y0 }];
      let h = 0;
      DEV.forEach((d) => {
        h += (d * Math.PI) / 180;
        const p = pts[pts.length - 1];
        pts.push({ x: p.x + Math.cos(h) * L, y: p.y + Math.sin(h) * L * 0.92 });
      });

      /* intent cone */
      const cone = document.createElementNS(NS, "polygon");
      cone.setAttribute("points",
        x0 + "," + y0 + " " + (x0 + R) + "," + (y0 - R * tan8) + " " + (x0 + R) + "," + (y0 + R * tan8));
      cone.setAttribute("class", "cone");
      svg.appendChild(cone);

      /* intended outcome */
      const tgt = document.createElementNS(NS, "circle");
      tgt.setAttribute("cx", x0 + R); tgt.setAttribute("cy", y0); tgt.setAttribute("r", 8);
      tgt.setAttribute("class", "tgt");
      svg.appendChild(tgt);
      const tgc = document.createElementNS(NS, "circle");
      tgc.setAttribute("cx", x0 + R); tgc.setAttribute("cy", y0); tgc.setAttribute("r", 2.4);
      tgc.setAttribute("class", "tgtc");
      svg.appendChild(tgc);
      const tl = document.createElementNS(NS, "text");
      tl.setAttribute("x", x0 + R); tl.setAttribute("y", y0 - 16);
      tl.setAttribute("text-anchor", "middle");
      tl.setAttribute("class", "tgtl");
      tl.textContent = "intended";
      svg.appendChild(tl);

      const inCone = (p) => Math.abs(p.y - y0) <= (p.x - x0) * tan8 + 0.5;
      const STEP = 640;
      /* governed: segment 4 (index 3→4) would exit the cone — held pre-commit */
      const HOLD = 3;

      for (let i = 0; i < 6; i++) {
        this.after(300 + i * STEP, () => {
          if (!ok()) return;
          if (governed && i > HOLD) return;
          const a = pts[i], b = pts[i + 1];

          if (governed && i === HOLD) {
            /* pre-commit evaluation: show the turn it would take, and hold */
            const g = document.createElementNS(NS, "line");
            g.setAttribute("x1", a.x); g.setAttribute("y1", a.y);
            g.setAttribute("x2", b.x); g.setAttribute("y2", b.y);
            g.setAttribute("class", "ghost");
            svg.appendChild(g);
            requestAnimationFrame(() => requestAnimationFrame(() => g.classList.add("in")));
            const j = document.createElement("div");
            j.className = "joint held";
            j.textContent = "▲";
            j.style.left = a.x + "px"; j.style.top = a.y - 13 + "px";
            jl.appendChild(j);
            this.after(180, () => j.classList.add("in"));
            this.after(420, () => {
              if (!ok()) return;
              cone.classList.add("hot");
              punch.textContent = "turn valid · trajectory not admissible — held";
              punch.className = "punch okay";
              punch.style.opacity = 1;
            });
            return;
          }

          /* draw the segment with a dash-reveal */
          const len = Math.hypot(b.x - a.x, b.y - a.y);
          const s = document.createElementNS(NS, "line");
          s.setAttribute("x1", a.x); s.setAttribute("y1", a.y);
          s.setAttribute("x2", b.x); s.setAttribute("y2", b.y);
          s.setAttribute("class", "seg" + (!inCone(b) ? " out" : ""));
          s.style.strokeDasharray = len;
          s.style.strokeDashoffset = len;
          svg.appendChild(s);
          s.animate(
            [{ strokeDashoffset: len }, { strokeDashoffset: 0 }],
            { duration: 420, easing: "cubic-bezier(.4,0,.4,1)", fill: "forwards" }
          );
          /* local verdict at the joint */
          const j = document.createElement("div");
          j.className = "joint";
          j.textContent = "✓";
          j.style.left = b.x + "px"; j.style.top = b.y - 13 + "px";
          jl.appendChild(j);
          this.after(430, () => j.classList.add("in"));

          if (!governed && i === 5) {
            this.after(650, () => {
              if (!ok()) return;
              /* how far from intent it actually landed */
              const gap = document.createElementNS(NS, "line");
              gap.setAttribute("x1", b.x); gap.setAttribute("y1", b.y);
              gap.setAttribute("x2", x0 + R); gap.setAttribute("y2", y0);
              gap.setAttribute("class", "gap");
              svg.appendChild(gap);
              requestAnimationFrame(() => requestAnimationFrame(() => gap.classList.add("in")));
              const end = document.createElementNS(NS, "circle");
              end.setAttribute("cx", b.x); end.setAttribute("cy", b.y); end.setAttribute("r", 3.6);
              end.setAttribute("fill", this.T.out.escalate);
              svg.appendChild(end);
              end.animate(
                [{ opacity: 0 }, { opacity: 1, offset: 0.3 }, { opacity: 0.6 }],
                { duration: 900, fill: "forwards" }
              );
              punch.textContent = "every turn approved · an outcome no one chose";
              punch.className = "punch warn";
              punch.style.opacity = 1;
            });
          }
        });
      }
    }
  }

  /* ---------- register ---------- */
  customElements.define("ax-drift", AxDrift);
  customElements.define("ax-sequence", AxSequence);
  customElements.define("ax-intercept", AxIntercept);
  customElements.define("ax-signals", AxSignals);
  customElements.define("ax-outcomes", AxOutcomes);
  customElements.define("ax-receipt", AxReceipt);
  customElements.define("ax-replay", AxReplay);
  customElements.define("ax-flow", AxFlow);
})();
