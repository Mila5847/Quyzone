import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import { Element, Link as ScrollLink, scroller } from 'react-scroll';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/hero';
import { HowItWorksPart1, HowItWorksPart2, HowItWorksPart3 } from '../components/HowItWorks';

import '../styles/layout/_nav.scss';
import '../styles/pages/_LandingPage.scss';
import TimeLine from '../components/Timeline';
import Nav from '../components/Nav';

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

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
          <img
            className="foreground"
            src="./images/decorative/foregroundTest_01.png"
            alt="beauty Shot"
            width={400}
            height={332}
            /*
          style={{
            maxWidth: 970px,
            width: "100%",
            height: "auto",
            display: "block", 
            left: "-380px",
            top:"-180px"
          }}
            */
          />
        </Parallax>
      </div>

      <Nav />
      <Parallax speed={0}>
        <div className="divider"></div>
      </Parallax>

      <Element name="how-it-works">
        <section className="section container">
          <Parallax speed={0}>
            <HowItWorksPart1 />
          </Parallax>
        </section>

        <section id="how-it-works" className="section container">
          <Parallax speed={0}>
            <HowItWorksPart2 />
          </Parallax>
        </section>

        <section id="how-it-works" className="section container">
          <Parallax speed={-5}>
            <img src="/images/decorative/exploded_01.png" />
          </Parallax>
        </section>

        <section className="section container">
          <TimeLine />
        </section>
      </Element>

{/* IMAGE AFTER TIMELINE*/}
      <Parallax speed={0}>
        <img src='/images/decorative/placeholder.jpg' />
      </Parallax>
     

      <Parallax speed={0}>
        <Footer />
      </Parallax>
    </div>
  );
}

export default LandingPage;
