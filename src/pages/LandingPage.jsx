import { useEffect, useRef } from 'react';
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

  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    const computeProgressInSection = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const scrolled = clamp(vh - rect.top, 0, total);
      return scrolled / total;
    };

    let ticking = false;

    const update = () => {
      ticking = false;
      if (!video.duration || !Number.isFinite(video.duration)) return;
      const progress = computeProgressInSection();
      const startProgress = 0.4;
      const endProgress = 0.8;
      const adjProgress = clamp((progress - startProgress) / (endProgress - startProgress), 0, 1);
      const targetTime = clamp(adjProgress * video.duration, 0, video.duration - 0.001);
      video.currentTime = targetTime;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    video.pause();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      // initialize
      onScroll();
    } else {
      const onMeta = () => {
        video.removeEventListener('loadedmetadata', onMeta);
        onScroll();
      };
      video.addEventListener('loadedmetadata', onMeta);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

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
            src="./images/decorative/Hero-foreground.png"
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
      <div className="divider"></div>


      <Element name="how-it-works">
        <section className="section container">
          <Parallax speed={0}>
            <HowItWorksPart1 />
          </Parallax>
        </section>
        <div className="howItWorks-instructions">
          <div className="howItWorks-instructions-item">
            <span>Download</span>
            <br />
            (Support)
          </div>
          <div className="howItWorks-instructions-item">
            <span>Resin Print</span>
            <br />
            (No Postcuring)
          </div>
          <div className="howItWorks-instructions-item">
            <span>Assemble</span>
            <br />
            (Customize)
          </div>
        </div>

        <Parallax speed={0}>
          <>
            <img src="/images/decorative/IconBg.svg" alt="" className="icon-bg icon-bg--default" />
            <img src="/images/decorative/separator_A01.svg" alt="" className="icon-bg icon-bg--mobile" />
          </>
        </Parallax>

        <section id="how-it-works" className="section container mobile__margin">
          <Parallax speed={0}>
            <HowItWorksPart2 />
          </Parallax>
        </section>

        <section id="how-it-works" className="section container white-band" ref={sectionRef}>
          <Parallax speed={0}>
            <div className="sticky-viewport">
              <img
                src="/images/decorative/vidCornerTopLeft.svg"
                alt="Decorative element"
                className="vidCorner"
              />
              <video
                ref={videoRef}
                src="/videos/decorative/explodedTest_09.webm"
                muted
                playsInline
                preload="auto"
                className="explodedView"
              />
              <img
                src="/images/decorative/vidCornerTopRight.svg"
                alt="Decorative element"
                className="vidCorner"
              />
            </div>
          </Parallax>
        </section>

        <section className="section container">
          <TimeLine />
        </section>
      </Element>

      <section className="section container testimonials">
        <blockquote>
          <p>
            I was hesitant at first, but this service delivered beyond my expectations. Five stars!
          </p>

          <div className="author">
            Sarah L, <cite>Beta-tester</cite>
          </div>
        </blockquote>
      </section>

      {/* IMAGE AFTER TIMELINE*/}
      {/*  */}
      <Parallax speed={0}>
        <div className="bottom-image"></div>
      </Parallax>

      <Parallax speed={0}>
        <Footer />
      </Parallax>
    </div>
  );
}

export default LandingPage;
