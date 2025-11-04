import { useEffect, useRef, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import '../styles/components/_backToTop.scss';

export default function BackToTop({ threshold = 300, duration = 600 }) {
  const [show, setShow] = useState(false);
  const [isHoverBackToTop, setIsHoverBackToTop] = useState(false);
  const [isHoverIndex, setIsHoverIndex] = useState(false);
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
    scroll.scrollToTop({ smooth: 'easeInOutQuart', duration });
  };

  const toIndex = () => {
    window.location.href = '/#'; 
  };

  return (
    <>
      <button
        type="button"
        className={`back-to-top ${show ? 'show' : ''}`}
        onClick={toTop}
        onMouseEnter={() => setIsHoverBackToTop(true)}
        onMouseLeave={() => setIsHoverBackToTop(false)}
        aria-label="Back to top"
      >
        <img
          src={isHoverBackToTop ? '/images/ui/upArrowHover.svg' : '/images/ui/upArrowNeutral.svg'}
          alt=""
        />
      </button>

      <button
        type="button"
        className={`back-to-top index ${show ? 'show' : ''}`}
        onClick={toIndex}
        onMouseEnter={() => setIsHoverIndex(true)}
        onMouseLeave={() => setIsHoverIndex(false)}
        aria-label="Go to index"
      >
        <img
          src={isHoverIndex ? '/images/ui/mini-LogoHover.svg' : '/images/ui/mini-Logo.svg'}
          alt=""
        />
      </button>
    </>
  );
}
