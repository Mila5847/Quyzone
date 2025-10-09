import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Nav() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleClick = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="nav">
      <RouterLink to="/" onClick={() => handleClick('/')}>
        How It Works
      </RouterLink>
      <RouterLink to="/building-manual" onClick={() => handleClick('/building-manual')}>
        Building Manual
      </RouterLink>
      <RouterLink to="/contact" onClick={() => handleClick('/contact')}>
        Contact
      </RouterLink>
    </nav>
  );
}

export default Nav;
