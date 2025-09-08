// src/components/Background.jsx
import { useEffect, useRef } from "react";
import "../styles/components/_background.scss";

export default function Background() {
  const raf = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      // throttle with rAF for smoothness
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        // “speed -20”: move 20% of page scroll upward****************************
        const y = -window.scrollY * 0.35;
        // ****************************
        document.documentElement.style.setProperty("--bg-y", `${y}px`);
      });
    };

    onScroll(); // set initial position
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return <div className="parallax-wallpaper fixed-bg" aria-hidden />;
}
