import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import { Element, Link as ScrollLink, scroller } from 'react-scroll';

import HowItWorks from '../components/HowItWorks';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/hero';

import '../styles/layout/_nav.scss'
import '../styles/pages/_LandingPage.scss';

function LandingPage() {
  const location = useLocation();

  // If navigated here with { state: { scrollTarget } }, scroll after mount
  useEffect(() => {
    const target = location.state?.scrollTarget;
    if (target) {
      // tiny delay so DOM is ready
      setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: 'easeInOutQuart',
          duration: 600,
          offset: -80, // adjust if you have a fixed header
        });
        // clear state so back/forward isn’t affected
        window.history.replaceState({}, document.title);
      }, 0);
    }
  }, [location.key]);

  return (
    <div className="landing-page">
       <Parallax speed={0}>
        <Header title="PIONEER.3" />
       </Parallax>
     

      <section id="hero" className="section">
        <Parallax speed={0}>
          <Hero />
        </Parallax>
      </section>

<div>
  <Parallax speed={3}>
   <img className="foreground" src="./images/foreground-test.png"/>
</Parallax>
</div>
  
      <nav className="nav section ">
        <div>
        {/* react-scroll links */}
        <ScrollLink
          className="menu-button"
          activeClass="active"
          to="how-it-works"
          spy
          smooth="easeInOutQuart"
          duration={600}
          offset={-80}
        >
          How It Works
        </ScrollLink>

        <ScrollLink
          activeClass="active"
          to="gallery"
          spy
          smooth="easeInOutQuart"
          duration={600}
          offset={-80}
        >
          Gallery
        </ScrollLink>

        {/* keep router link to Support page */}
        <RouterLink to="/design-manual">Design Manual</RouterLink>
        <RouterLink to="/support">Support</RouterLink>
        </div>
        
      </nav>
      <div className="divider"></div>

      {/* Mark each section with <Element name="..."> */}
      <Element name="how-it-works">
        <section id="how-it-works" className="section container" style={{ mixBlendMode: 'multiply' }}>
          <Parallax speed={0}>
            <HowItWorks />
          </Parallax>
        </section>
      </Element>

      <Element name="gallery">
        <section id="gallery" className="section container">
          <Parallax translateY={[0, 0]}>
            <Gallery />
          </Parallax>
        </section>
      </Element>

      <section id="footer" className="section container">
        <Footer />
      </section>
    </div>
  );
}

export default LandingPage;
