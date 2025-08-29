import { useEffect, useRef, useState, createContext, useContext, PropsWithChildren } from 'react';
import Lenis from 'lenis';

const LenisCtx = createContext<Lenis | null>(null);
export const useLenis = () => useContext(LenisCtx);

export default function SmoothScrollProvider({ children }) {
  const rafId = useRef<number | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const l = new Lenis({
      duration: 1.1,        // feel free to tweak (seconds-ish)
      smoothWheel: true,
      smoothTouch: false,   // set true if you want it on touchpads too
      wheelMultiplier: 1,   // >1 = faster
      gestureOrientation: 'vertical',
    });
    setLenis(l);

    const loop = (time) => {
      l.raf(time);                  // <- rAF keeps the easing in sync with the browser
      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      l.destroy();
    };
  }, []);

  return <LenisCtx.Provider value={lenis}>{children}</LenisCtx.Provider>;
}
