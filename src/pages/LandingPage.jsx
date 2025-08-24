import { useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';

import HowItWorks from '../components/HowItWorks';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';
import Footer from '../components/footer';
import Header from '../components/Header';
import Hero from '../components/hero';
import Background from '../components/Background';

import '../styles/layout/_nav.scss'

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

  /*------------------------------------------------------------------*/

  return (
    <div>
    <Header title="MECHABUST" />
    <section id="hero" className="section container">
    <Parallax speed={0}>
      <Hero />
    </Parallax>
    </section>

   <nav className="nav section container" >
   
        <button  className="menu-button" onClick={() => scrollTo('how-it-works')}>How It Works</button>
        <button onClick={() => scrollTo('gallery')}>Gallery</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
        <Link to="/support">Support</Link>
        <div className="divider"></div>
      </nav>

      <section id="how-it-works" className="section container">
        <Parallax speed={0}>
          <HowItWorks />
        </Parallax>
      </section>

      <section id="gallery" className="section container">
        <Parallax translateY={[0, 0]}>
          <Gallery />
        </Parallax>
      </section>

      <section id="contact" className="section container">
        <Parallax speed={0}>
          <Contact />
        </Parallax>
      </section>

      <section id="footer" className="section container">
        <Footer />
      </section>
    </div>
  );
}

export default LandingPage;
