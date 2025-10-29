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

    let targetTime = 0;
    let rafId = 0;
    let lastNow = performance.now();

    const clamp = (v, min, max) =>
      Math.max(min, Math.min(max, v));

    const computeProgressInSection = () => {
      // Progress over the sticky section only
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      // Amount of the section that has scrolled through the viewport
      const total = rect.height + vh;                  // total scrollable path
      const scrolled = clamp(vh - rect.top, 0, total); // 0..total as it passes through
      const progress = scrolled / total;               // 0..1
      return progress;
    };

    const onScroll = () => {
      if (!video.duration || !Number.isFinite(video.duration)) return;
      const progress = computeProgressInSection();
      // Keep a tiny epsilon off the end so browsers don’t “snap” to the last keyframe
      targetTime = clamp(progress * video.duration, 0, video.duration - 0.001);
    };

    const loop = (now) => {
      // time-step aware smoothing (stable across fast/slow machines)
      const dt = clamp((now - lastNow) / 1000, 0, 0.05);
      lastNow = now;

      if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
        // convert a nominal smoothing constant into a dt-aware factor
        // nominal “responsiveness” ~ 0.22 per 60fps frame
        const nominal = 0.22;
        const lerpFactor = 1 - Math.pow(1 - nominal, dt * 60);
        video.currentTime += (targetTime - video.currentTime) * lerpFactor;
      }

      rafId = requestAnimationFrame(loop);
    };

    // Prepare the element
    video.pause(); // make sure the browser isn’t trying to play while we seek
    const start = () => {
      // sync initial target once metadata is known
      onScroll();
      lastNow = performance.now();
      rafId = requestAnimationFrame(loop);
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
    };

    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      start();
    } else {
      const onMeta = () => {
        video.removeEventListener('loadedmetadata', onMeta);
        start();
      };
      video.addEventListener('loadedmetadata', onMeta);
    }

    return () => {
      cancelAnimationFrame(rafId);
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

        <section
          id="how-it-works"
          className="section container"
          ref={sectionRef}
        >
          <Parallax speed={0}>

            <div className="sticky-viewport">
              <video
                ref={videoRef}
                src="/videos/decorative/explodedTest_09.webm"
                playsInline
                muted
                preload="auto"
                controls={false}
              />
            </div>
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
