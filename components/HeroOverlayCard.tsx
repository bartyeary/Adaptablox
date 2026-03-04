'use client';

import { useRef, useState } from 'react';

type Props = {
  agentId?: string;
};

export default function HeroOverlayCard({ agentId = '7734' }: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [settled, setSettled] = useState(false);

  const handlePointerMove: React.PointerEventHandler<HTMLDivElement> = (event) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    const maxTilt = 10; // degrees
    const tiltX = -py * maxTilt;
    const tiltY = px * maxTilt;

    el.style.setProperty('--tiltX', `${tiltX}deg`);
    el.style.setProperty('--tiltY', `${tiltY}deg`);
  };

  const handlePointerLeave: React.PointerEventHandler<HTMLDivElement> = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--tiltX', '0deg');
    el.style.setProperty('--tiltY', '0deg');
  };

  return (
    <div
      ref={cardRef}
      className={`hero-overlay-card ${!settled ? 'settle-in' : ''}`}
      aria-label="Agent card"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onAnimationEnd={() => setSettled(true)}
    >
      <div className="hero-overlay-card-inner">
        <img
          src="/assets/profile.svg"
          alt=""
          aria-hidden="true"
          className="hero-overlay-card-avatar"
        />
        <div className="hero-overlay-card-text">
          <div className="hero-overlay-card-line">AGENT_ID: 001</div>
          <div className="hero-overlay-card-line">ROLE_VECTOR: ANALYST</div>
          <div className="hero-overlay-card-line">CONSTRAINT_DEPTH: 05</div>
          <div className="hero-overlay-card-line">ACTION_CHECK: PENDING</div>
        </div>
      </div>
    </div>
  );
}

