

import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import { Element, Link as ScrollLink, scroller } from "react-scroll";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/hero";
import {
  HowItWorksPart1,
  HowItWorksPart2,
  HowItWorksPart3,
  HowItWorksPart4,
} from "../components/HowItWorks";

import "../styles/layout/_nav.scss";
import "../styles/pages/_LandingPage.scss";
import TimeLine from "../components/Timeline";


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

          {/* <ScrollLink
            activeClass="active"
            to="gallery"
            spy
            smooth="easeInOutQuart"
            duration={600}
            offset={-80}
          >
            Gallery
          </ScrollLink> */}

          <RouterLink to="/design-manual">Design Manual</RouterLink>
          <RouterLink to="/support">Support</RouterLink>
        </div>
      </nav>
      <div className="divider"></div>

      <Element name="how-it-works">
        <section className="section container">
          <Parallax speed={0}>
            <HowItWorksPart1 />
          </Parallax>
        </section>

        <section
          id="how-it-works"
          className="section container"
          style={{ mixBlendMode: "multiply" }}
        >
          <Parallax speed={0}>
            <HowItWorksPart2 />
          </Parallax>
        </section>

        <section id="how-it-works" className="section container">
          <Parallax speed={0}>
            <div className="howitworks">
              <h2>The Quyzone Signature</h2>
            </div>
          </Parallax>
        </section>

        <section className="section container">
          <div className="hiw-grid">
            {/* 1 */}
            <div className="hiw-item">
              <div style={{ mixBlendMode: "multiply" }}>
                <Parallax speed={0}>
                  <HowItWorksPart3
                    videos={[
                      {
                        src: "/videos/switch_video_2.webm",
                        caption: "3 seconds video",
                      },
                    ]}
                  />
                </Parallax>
              </div>
              <h3>Printability</h3>
              <ol>
                <li>-designed with ease of print in mind</li>
                <li>-largest pieces fit conveniently on the smaller of machines.</li>
                <li>-More time building less time troubleshooting.</li>
              </ol>

            </div>

            {/* 2 */}
            <div className="hiw-item">
              <div style={{ mixBlendMode: "multiply" }}>
                <Parallax speed={0}>
                  <HowItWorksPart3
                    videos={[
                      {
                        src: "/videos/switch_video_3.webm",
                        caption: "3 seconds video",
                      },
                    ]}
                  />
                </Parallax>
              </div>
              <h3>Poseability</h3>
              <ol>
                <li>-meant for expressiveness</li>
                <li>-articulations resistance and smoothness set to ensure reliable posing</li>
                <li>-subtil tuned  to truly give it life.</li>
              </ol>
            </div>

            {/* 3 centered below */}
            <div className="hiw-item hiw-item--full">
              <div style={{ mixBlendMode: "multiply" }}>
                <Parallax speed={0}>
                  <HowItWorksPart3
                    videos={[
                      {
                        src: "/videos/switch_video_3.webm",
                        caption: "3 seconds video",
                      },
                    ]}
                  />
                </Parallax>
              </div>
              <h3>Perfectability</h3>
              <ol>
                <li>-Modular assembly allows switching in and out components.</li>
                <li>-Community's library to add to your build or show off your work.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="section container">
          <TimeLine />
        </section>
      </Element>

      <section id="footer" className="section container">
        <Footer />
      </section>
    </div>
  );
}

export default LandingPage;
