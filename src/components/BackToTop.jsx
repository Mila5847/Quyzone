import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import '../styles/components/_backToTop.scss';

export default function BackToTop({ threshold = 300, duration = 600 }) {
  const [show, setShow] = useState(false);
  const [isHoverBackToTop, setIsHoverBackToTop] = useState(false);
  const [isHoverIndex, setIsHoverIndex] = useState(false);
  const raf = useRef(0);

  const location = useLocation(); // <- drives rerenders on route change
  const navigate = useNavigate();

  // HashRouter can put the route in the hash (e.g. #/building-manual)
  const isBuildingManual =
    location.pathname.includes('building-manual') ||
    (location.hash ?? '').includes('building-manual');

  const assets = isBuildingManual
    ? {
        upNeutral: '/images/ui/upArrowNeutralManual.svg',
        upHover: '/images/ui/upArrowHoverManual.svg',
        logoNeutral: '/images/ui/mini-LogoManual.svg',
        logoHover: '/images/ui/mini-LogoHoverManual.svg',
      }
    : {
        upNeutral: '/images/ui/upArrowNeutral.svg',
        upHover: '/images/ui/upArrowHover.svg',
        logoNeutral: '/images/ui/mini-Logo.svg',
        logoHover: '/images/ui/mini-LogoHover.svg',
      };

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

  const toTop = () => scroll.scrollToTop({ smooth: 'easeInOutQuart', duration });
  const toIndex = () => navigate('/'); // <- no full reload

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
        <img src={isHoverBackToTop ? assets.upHover : assets.upNeutral} alt="" />
      </button>

      <button
        type="button"
        className={`back-to-top index ${show ? 'show' : ''}`}
        onClick={toIndex}
        onMouseEnter={() => setIsHoverIndex(true)}
        onMouseLeave={() => setIsHoverIndex(false)}
        aria-label="Go to index"
      >
        <img src={isHoverIndex ? assets.logoHover : assets.logoNeutral} alt="" />
      </button>
    </>
  );
}
