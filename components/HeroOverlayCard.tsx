'use client';

import { useRef } from 'react';
import styles from './HeroOverlayCard.module.css';

type Props = {
  agentId?: string;
};

export default function HeroOverlayCard({ agentId = '7734' }: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null);

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
      className={styles.card}
      aria-label="Agent card"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className={styles.inner}>
        <img
          src="/assets/profile.svg"
          alt=""
          aria-hidden="true"
          className={styles.avatar}
        />
        <div className={styles.text}>
          <div className={styles.line}>AGENT_ID: 001</div>
          <div className={styles.line}>ROLE_VECTOR: ANALYST</div>
          <div className={styles.line}>CONSTRAINT_DEPTH: 05</div>
          <div className={styles.line}>ACTION_CHECK: PENDING</div>
        </div>
      </div>
    </div>
  );
}

