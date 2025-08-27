import { useEffect, useRef, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import '../styles/components/_backToTop.scss';

export default function BackToTop({ threshold = 300, duration = 600 }) {
  const [show, setShow] = useState(false);
  const raf = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        setShow(window.scrollY > threshold);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, [threshold]);

  const toTop = () => {
    // react-scroll smooth scroll
    scroll.scrollToTop({ smooth: 'easeInOutQuart', duration });
    // or: window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={`back-to-top ${show ? 'show' : ''}`}
      onClick={toTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
