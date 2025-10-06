import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { scroller } from 'react-scroll';
import MediaCarousel from './MediaCarousel';
import '../styles/components/_BuildManual.scss';

function BuildManual() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = useCallback(
    (name) => {
      if (location.pathname !== '/') {
        // Go to LandingPage and let it scroll via useEffect
        navigate('/', { state: { scrollTarget: name } });
      } else {
        // If already on LandingPage, scroll immediately
        scroller.scrollTo(name, {
          smooth: 'easeInOutQuart',
          duration: 600,
          offset: -80,
        });
      }
    },
    [location.pathname, navigate],
  );



  // 👉 Data for carousel 0
  const carousel0Items = [
    { type: 'img', src: '/images/manual/ori_receiver.jpg', alt: 'Slide 1' },

  ];
  const carousel0Captions = [
    'Part A-0',

  ];

  // 👉 Data for carousel 1
  const carousel1Items = [
    { type: 'img', src: '/images/manual/pres_coverBot.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori_coverBot.jpg', alt: 'Slide 3' },
    { type: 'video', src: '/videos/manual/anim-coverBotR.mp4', alt: 'Slide 4' },
    { type: 'video', src: '/videos/manual/anim-coverBotL.mp4', alt: 'Slide 5' },
  ];
  const carousel1Captions = [
    'Step 2 \u27A4 A-0 + A-1',
    'Part A-1(R)',
    'A-1(R) \u27A4 A-0',
    'A-1(L) \u27A4 A-0',
  ];

  // 👉 Data for carousel 2
  const carousel2Items = [
    { type: 'img', src: '/images/manual/pres-3.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/A-3.jpg', alt: 'Slide 1' },
    {
      type: 'video',
      src: '/videos/manual/anim-a02-back.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-a02-front.mp4',
      alt: 'Alt video',
    },

  ];
  const carousel2Captions = [
    'Step 3 \u27A4 A-0 + A-3',
    'Part A-3',
    'A-3 \u27A4 A-0',
    'A-3 \u27A4 A-0',
  ];

  return (
    <div className="build-manual">
      <nav className="nav">
        <button onClick={() => scrollTo('how-it-works')}>How It Works</button>
        <RouterLink to="/building-manual">Building Manual</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>

      <br />

      <section>
        <h2>PIONEER.3</h2>
        <h3 className="subassembly-title">
          SUB ASSEMBLY A{' '}
          <img className="overflow-image" src="./images/decorative/assemblyA.png" alt="assemblyA" />
        </h3>

        <section className="carousel-section">
          <MediaCarousel itemsData={carousel0Items} captions={carousel0Captions} title="1" />
        </section>

        <section className="carousel-section">
          <MediaCarousel itemsData={carousel1Items} captions={carousel1Captions} title="2" />
        </section>

        {/* Second carousel for additional media */}
        <section className="carousel-section">
          <MediaCarousel itemsData={carousel2Items} captions={carousel2Captions} title="3" />
        </section>
      </section>
    </div>
  );
}

export default BuildManual;
