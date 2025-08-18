import { useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import Logo from '../components/Logo';
import Hero from '../components/hero';
import HowItWorks from '../components/HowItWorks';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';
import Footer from '../components/footer';

import '../styles/layout/_nav.scss';

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
    const scrollTarget = (location.state)?.scrollTarget;
    setTimeout(() => {
      if (scrollTarget) {
        const el = document.getElementById(scrollTarget);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState({}, '');
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  }, [location.key]);

  /*------------------------------------------------------------------*/

  return (
    <ParallaxProvider>
      <div>
        <section id="Logo" className="section container">
          <Logo />
          <h1>MECHABUST</h1>
          <div className="sub-h1">
            <span>PRINTABLE</span>
            <span className="spacer-horizontal">&nbsp;&#x25CF;&nbsp;</span>
            <span>POSABLE</span>
            <span className="spacer-horizontal">&nbsp;&#x25CF;&nbsp;</span>
            <span>PERFECTIBLE</span>
          </div>
        </section>

        {/* PARALLAX BACKGROUND SECTION */}
        <section id="hero" className="section container parallax-hero">
          <div className="parallax-hero__wrap">
            {/* This div is ONLY the background, moved with Parallax */}
            <Parallax speed={-20}>
              <div className="parallax-hero__bg" />
            </Parallax>

            {/* Foreground content stays fixed in the section */}
            <div className="parallax-hero__content">
              <Hero />
            </div>
          </div>
        </section>

        <nav className="nav section container">
          <button onClick={() => scrollTo('how-it-works')}>How It Works</button>
          <button onClick={() => scrollTo('gallery')}>Gallery</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
          <Link to="/support">Support</Link>
          <div className="divider"></div>
        </nav>

        <section id="how-it-works" className="section container">
          <HowItWorks />
        </section>

        <section id="gallery" className="section container">
          <Gallery />
        </section>

        <section id="contact" className="section container">
          <Contact />
        </section>

        <section id="footer" className="section container">
          <Footer />
        </section>
      </div>
    </ParallaxProvider>
  );
}

export default LandingPage;
