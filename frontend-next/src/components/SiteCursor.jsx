'use client';
import { useEffect, useRef, useState } from 'react';

// Curseur du site, version fidele au composant "Axis Cursor" (Originkit) :
// crosshair (ligne verticale + horizontale) + point orange #FF8600 de 14px,
// qui REMPLACE le curseur natif (cursor: none).
// Adaptations prod : pas de framer-motion (CSS pur), desactive sur tactile.
const DOT_COLOR = '#FF8600';
const DOT_SIZE = 14;
const LINE_COLOR = 'rgba(255, 134, 0, 0.35)';
const LINE_THICKNESS = 1;
const HOVER_SCALE = 1.5;

const SiteCursor = () => {
  const dotRef = useRef(null);
  const vRef = useRef(null);
  const hRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Uniquement sur les appareils avec un vrai pointeur (pas de tactile)
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!fine.matches) return;
    setEnabled(true);

    // Le point + les barres remplacent le curseur natif
    const style = document.createElement('style');
    style.id = 'site-cursor-style';
    style.textContent = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    let raf = 0;
    let x = -100;
    let y = -100;
    let hovering = false;
    let visible = false;

    const render = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${hovering ? HOVER_SCALE : 1})`;
        dotRef.current.style.opacity = visible ? '1' : '0';
      }
      if (vRef.current) {
        vRef.current.style.transform = `translateX(${x}px) translateX(-50%)`;
        vRef.current.style.opacity = visible ? '1' : '0';
      }
      if (hRef.current) {
        hRef.current.style.transform = `translateY(${y}px) translateY(-50%)`;
        hRef.current.style.opacity = visible ? '1' : '0';
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
      document.getElementById('site-cursor-style')?.remove();
    };
  }, []);

  if (!enabled) return null;

  const common = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 2147483647,
    opacity: 0,
    transition: 'opacity 0.2s ease-in-out',
    willChange: 'transform',
  };

  return (
    <>
      {/* Ligne verticale */}
      <div
        ref={vRef}
        aria-hidden="true"
        style={{ ...common, top: 0, left: 0, height: '100vh', width: LINE_THICKNESS, backgroundColor: LINE_COLOR }}
      />
      {/* Ligne horizontale */}
      <div
        ref={hRef}
        aria-hidden="true"
        style={{ ...common, top: 0, left: 0, width: '100vw', height: LINE_THICKNESS, backgroundColor: LINE_COLOR }}
      />
      {/* Point */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          ...common,
          top: 0,
          left: 0,
          width: DOT_SIZE,
          height: DOT_SIZE,
          borderRadius: '9999px',
          backgroundColor: DOT_COLOR,
          transition: 'opacity 0.2s ease-in-out, transform 0.1s ease-out',
        }}
      />
    </>
  );
};

export default SiteCursor;
