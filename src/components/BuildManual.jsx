import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { scroller } from 'react-scroll';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import '../styles/pages/_SupportPage.scss';
import Contact from './Contact';

function BuildManual() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = useCallback((name) => {
    if (location.pathname !== '/') {
      // Go to LandingPage and let it scroll via useEffect
      navigate('/', { state: { scrollTarget: name } });
    } else {
      // If already on LandingPage, scroll immediately
      scroller.scrollTo(name, {
        smooth: 'easeInOutQuart',
        duration: 600,
        offset: -80,
      });
    }
  }, [location.pathname, navigate]);


  return (
    <>
      <nav className="nav">
        <button onClick={() => scrollTo('how-it-works')}>How It Works</button>
        <button onClick={() => scrollTo('gallery')}>Gallery</button>
        <RouterLink to="/design-manual">Design Manual</RouterLink>
        <RouterLink to="/support">Support</RouterLink>
      </nav>

      <section>
        <h2>Support</h2>
        <p>Include frequently asked questions, help guides, or contact options here.</p>
      </section>

    </>
  );
}

export default BuildManual;
