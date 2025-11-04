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

    // Only scroll to top when navigating to a different route.
    // If the user clicks the nav link for the page they're already on,
    // avoid scrolling so the current scroll position is preserved.
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="nav">
      <RouterLink to="/" onClick={(e) => handleClick(e, '/')}>
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
