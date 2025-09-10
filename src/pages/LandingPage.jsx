import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import { Element, Link as ScrollLink, scroller } from "react-scroll";

import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/hero";
import { HowItWorksPart1, HowItWorksPart2 } from "../components/HowItWorks";

import "../styles/layout/_nav.scss";
import "../styles/pages/_LandingPage.scss";

function LandingPage() {
  const location = useLocation();

  // If navigated here with { state: { scrollTarget } }, scroll after mount
  useEffect(() => {
    const target = location.state?.scrollTarget;
    if (target) {
      setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: "easeInOutQuart",
          duration: 600,
          offset: -80,
        });
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
         <img
  className="foreground"
  src="./images/decorative/foregroundTest_01.png"
  alt=""
  width={400}
  height={332}
  style={{ maxWidth: 550, width: '100%', height: 'auto', display: 'block' }}
/>

        </Parallax>
      </div>
      

      <nav className="nav section ">
        <div>
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

          <RouterLink to="/design-manual">Design Manual</RouterLink>
          <RouterLink to="/support">Support</RouterLink>
        </div>
      </nav>
      <div className="divider"></div>

      <Element name="how-it-works">
        <section className="section container">
          <HowItWorksPart1/>
        </section>

        <section
          id="how-it-works"
          className="section container"
          style={{ mixBlendMode: "multiply" }}
        >
          <Parallax speed={0}>
            <HowItWorksPart2/>
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
