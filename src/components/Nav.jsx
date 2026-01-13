import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Nav() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleClick = (e, path) => {
    if (path === location.pathname) {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHowItWorksClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById('what-is-the-product');
      if (element) {
        const targetPosition = element.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        const smoothScroll = (timestamp) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const percentage = Math.min(progress / duration, 1);
          // Easing function for smoother animation
          const easeInOutCubic =
            percentage < 0.5
              ? 4 * percentage * percentage * percentage
              : 1 - Math.pow(-2 * percentage + 2, 3) / 2;

          window.scrollTo(0, startPosition + distance * easeInOutCubic);

          if (progress < duration) {
            requestAnimationFrame(smoothScroll);
          }
        };

        requestAnimationFrame(smoothScroll);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav">
      <RouterLink to="/" onClick={handleHowItWorksClick}>
        How It Works
      </RouterLink>
      <RouterLink to="/building-manual" onClick={(e) => handleClick(e, '/building-manual')}>
        Building Manual
      </RouterLink>
      <RouterLink to="/contact" onClick={(e) => handleClick(e, '/contact')}>
        Contact
      </RouterLink>
    </nav>
  );
}

export default Nav;
