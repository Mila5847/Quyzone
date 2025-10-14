import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import MediaCarousel from './MediaCarousel';
import '../styles/components/_BuildManual.scss';
import Nav from './Nav';

function BuildManual() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // 👉 Data for carousel 0
  const carousel0Items = [{ type: 'img', src: '/images/manual/ori_receiver.jpg', alt: 'Slide 1' }];
  const carousel0Captions = ['Part A-0 (post-curing NOT recommended)'];

  // 👉 Data for carousel 1
  const carousel1Items = [
    { type: 'img', src: '/images/manual/pres_coverBot.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori_coverBot.jpg', alt: 'Slide 2' },
    { type: 'video', src: '/videos/manual/anim-coverBotR.mp4', alt: 'Slide 3' },
    { type: 'video', src: '/videos/manual/anim-coverBotL.mp4', alt: 'Slide 4' },
  ];
  const carousel1Captions = [
    'Step 2 \u27A4 A-0 + A-1',
    'Part A-1(R) (post-curing NOT recommended)',
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
    'Part A-3 (post-curing NOT recommended)',
    'A-3 \u27A4 A-0',
    'A-3 \u27A4 A-0',
  ];

  return (
    <div className="build-manual">
      <Nav />

      <br />

      <section>
        <h2>PIONEER.3</h2>
        <h3 className="subassembly-title">
          SUB ASSEMBLY A<span className='post-cure-warning'>(post-curing NOT recommended)</span>{' '}
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
