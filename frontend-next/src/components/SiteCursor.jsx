'use client';
import { useEffect, useRef, useState } from 'react';

// Curseur du site, adapté du composant "Axis Cursor" (Originkit).
// Props d'origine conservées : dotColor #FF8600, dotSize 14, showPosition false.
// Adaptations pour la prod : pas de framer-motion (transform + transition CSS,
// plus léger), lignes crosshair désactivées, grossissement au survol des
// éléments cliquables, et désactivation totale sur écrans tactiles.
const DOT_COLOR = '#FF8600';
const DOT_SIZE = 14;
const HOVER_SCALE = 2.2;

const SiteCursor = () => {
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Uniquement sur les appareils avec un vrai pointeur (pas de tactile)
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!fine.matches) return;
    setEnabled(true);

    const dot = () => dotRef.current;
    let raf = 0;
    let x = -100;
    let y = -100;
    let hovering = false;
    let visible = false;

    const render = () => {
      const el = dot();
      if (el) {
        el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${hovering ? HOVER_SCALE : 1})`;
        el.style.opacity = visible ? '1' : '0';
      }
    };

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      visible = true;
      hovering = Boolean(
        e.target.closest &&
          e.target.closest('a, button, [role="button"], input, textarea, select, label, .cursor-pointer')
      );
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(render);
    };
    const onLeave = () => {
      visible = false;
      render();
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: DOT_SIZE,
        height: DOT_SIZE,
        borderRadius: '9999px',
        backgroundColor: DOT_COLOR,
        pointerEvents: 'none',
        zIndex: 2147483647,
        opacity: 0,
        mixBlendMode: 'exclusion',
        transition: 'opacity 0.2s ease-in-out, transform 0.12s ease-out',
        willChange: 'transform',
      }}
    />
  );
};

export default SiteCursor;
