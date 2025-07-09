import { useEffect, useCallback } from 'react';
import { Link,
  useLocation,
  useNavigate, } from 'react-router-dom';


import Hero from '../components/hero';

import Footer from '../components/footer';

import HowItWorks from '../components/HowItWorks';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';

import '../style.scss';

function LandingPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = useCallback((id) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTarget: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname, navigate]);


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

  <   section id="hero">
        <Hero />
      </section>

   <nav className="nav">
        <button onClick={() => scrollTo('how-it-works')}>How It Works</button>
        <button onClick={() => scrollTo('gallery')}>Gallery</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
        <Link to="/support">Support</Link>
      </nav>


      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="footer">
        <Footer />
      </section>

    </div>
  );
}

export default LandingPage;
