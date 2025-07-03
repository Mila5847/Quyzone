import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import HowItWorks from '../components/HowItWorks';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';

import '../style.scss';

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    const scrollTarget = location.state?.scrollTarget;

    setTimeout(() => {
      if (scrollTarget) {
        const el = document.getElementById(scrollTarget);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });

          // Remove scrollTarget from history so it doesn't affect back/forward
          window.history.replaceState({}, '');
          return;
        }
      }

      // Scroll to top by default (e.g. on refresh)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50); // Delay ensures DOM is fully rendered
  }, [location.key]);

  return (
    <div>
      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default LandingPage;
