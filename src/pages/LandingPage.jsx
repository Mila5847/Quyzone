import { useEffect, useCallback } from 'react';
import { Link,
  useLocation,
  useNavigate, } from 'react-router-dom';

import Logo from '../components/Logo';
import Hero from '../components/hero';
import HowItWorks from '../components/HowItWorks';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';
import Footer from '../components/footer';

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

  return (
    <div>
  <   section id="Logo" className='section container'>
        <Logo />
        <h1 >MECH BUST</h1>
        <div className='sub-h1'><span>PRINTABLE</span><span className='spacer-horizontal'>&#x25CF;</span><span>POSABLE</span><span className='spacer-horizontal'>&#x25CF;</span><span>PERFECTIBLE</span></div>
      </section >
      
  <   section id="hero">
        <Hero />
      </section>

   <nav className="nav section container" >
        <button onClick={() => scrollTo('how-it-works')}>How It Works</button>
        <button onClick={() => scrollTo('gallery')}>Gallery</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
        <Link to="/support">Support</Link>
      </nav>


      <section id="how-it-works" className='section container'>
        <HowItWorks />
      </section>

      <section id="gallery" className='section container'>
        <Gallery />
      </section>

      <section id="contact" className='section container'>
        <Contact />
      </section>

      <section id="footer" className='section container'>
        <Footer />
      </section>

    </div>
  );
}

export default LandingPage;
