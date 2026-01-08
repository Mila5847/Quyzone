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

  // Data for carousel 1
  const carousel1Items = [{ type: 'img', src: '/images/manual/ori_receiver.jpg', alt: 'Slide 1' }];
  const carousel1Captions = ['Part A-0 (P.C.N.R.)*'];


  // Data for carousel 2
  const carousel2Items = [
    { type: 'img', src: '/images/manual/pres-A-2.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori_receiver.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori_coverBot.jpg', alt: 'Slide 2' },
    { type: 'video', src: '/videos/manual/anim-a01-2.mp4', alt: 'Slide 3' },
    { type: 'video', src: '/videos/manual/anim-a01-1.mp4', alt: 'Slide 4' },
  ];
  const carousel2Captions = [
    'Step 2 Preview',
    'Part A-0 (P.C.N.R.)*',
    'Part A-1(R) (P.C.N.R.)*',
    'A-1(R) \u27A4 A-0',
    'A-1(L) \u27A4 A-0',
  ];

  // Data for carousel 3
  const carousel3Items = [
    { type: 'img', src: '/images/manual/pres-A-3.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/A-3.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-a03-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-a03-2.mp4',
      alt: 'Alt video',
    },
  ];
  const carousel3Captions = [
    'Step 3 Preview',
    'Part A-2 (P.C.N.R.)*',
    'A-2 \u27A4 A-1',
    'A-2 \u27A4 A-1',
  ];

  // Data for carousel 4
  const carousel4Items = [
    { type: 'img', src: '/images/manual/pres-A-4.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/A-4.jpg', alt: 'Slide 1' },
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
  const carousel4Captions = [
    'Step 4 Preview',
    'Part A-3 (P.C.N.R.)*',
    'A-3 \u27A4 A-0',
    'A-3 \u27A4 A-0',
  ];

  // Data for carousel 5
  const carousel5Items = [
    { type: 'img', src: '/images/manual/pres-A-6.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori_A05.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori_A06.jpg', alt: 'Slide 1' },
    {
      type: 'video',
      src: '/videos/manual/anim-a06-1.mp4',
      alt: 'Alt video',
    },
  ];
  const carousel5Captions = [
    'Step 5 Preview',
    'Part A-5 (P.C.N.R.)*',
    'Part A-6 (P.C.N.R.)*',
    'A-6 \u27A4 A-5',
    'A-6 \u27A4 A-5',
  ];

  // Data for carousel 6
  const carousel6Items = [
    { type: 'img', src: '/images/manual/pres-A-5.jpg', alt: 'Slide 1' },

    {
      type: 'video',
      src: '/videos/manual/anim-a05-2.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-a05-1.mp4',
      alt: 'Alt video',
    },
  ];
  const carousel6Captions = [
    'Step 6 Preview',
    'A-3 \u27A4 A-0',
    'A-3 \u27A4 A-0',
  ];

  // Data for carousel 7
  const carousel7Items = [
    { type: 'img', src: '/images/manual/pres-A-7.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-A07.jpg', alt: 'Slide 2' },

    {
      type: 'video',
      src: '/videos/manual/anim-a07-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-a07-2.mp4',
      alt: 'Alt video',
    },
  ];
  const carousel7Captions = [
    'Step 7 Preview',
    'Part A-3 (P.C.N.R.)*',
    'A-4 \u27A4 A-3',
    'A-4 \u27A4 A-3',
  ];

  //-------------------------------------------------------------------------------------------------------------------------------//
  //------------------------------------------------------- DATA FOR SUB B --------------------------------------------------------//
  //-------------------------------------------------------------------------------------------------------------------------------//

  // Data for carousel 8
  const carousel8Items = [
    { type: 'img', src: '/images/manual/pres-B01.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-B00.jpg', alt: 'Slide 2' },
    { type: 'img', src: '/images/manual/ori-B01.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-b00-1.mp4',
      alt: 'Alt video',
    },

  ];
  const carousel8Captions = [
    'Step 8 Preview',
    'Part B-0 (P.C.N.R.)*',
    'Part B-1 (P.C.N.R.)*',
    'B-0 \u27A4 B-1',

  ];

  // Data for carousel 9
  const carousel9Items = [
    { type: 'img', src: '/images/manual/pres-B02.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-B02.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-b01-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-b01-2.mp4',
      alt: 'Alt video',
    },

  ];

  const carousel9Captions = [
    'Step 9 Preview',
    'Part B-2 (P.C.N.R.)*',
    'B-2 \u27A4 B-1',
    'B-2 \u27A4 B-1'

  ];

  // Data for carousel 10
  const carousel10Items = [
    { type: 'img', src: '/images/manual/pres-B03.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-B03.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-b02-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-b02-2.mp4',
      alt: 'Alt video',
    },

  ];

  const carousel10Captions = [
    'Step 10 Preview',
    'Part B-3 (P.C.N.R.)*',
    'B-0 \u27A4 B-0 + B-2',
    'B-0 \u27A4 B-0 + B-2',

  ];

  // Data for carousel 11
  const carousel11Items = [
    { type: 'img', src: '/images/manual/pres-B04.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-B04.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-b03-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-b03-2.mp4',
      alt: 'Alt video',
    },


  ];
  const carousel11Captions = [
    'Step 11 Preview',
    'Part B-4 (P.C.N.R.)*',
    'B-0 \u27A4 B-0 + B-2 + B-3',
    'B-0 \u27A4 B-0 + B-2 + B-3',

  ];

  // Data for carousel 12
  const carousel12Items = [
    { type: 'img', src: '/images/manual/pres-B04.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-B04.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-b03-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-b03-2.mp4',
      alt: 'Alt video',
    },


  ];
  const carousel12Captions = [
    'Step 11 Preview',
    'Part B-4 (P.C.N.R.)*',
    'B-0 \u27A4 B-0 + B-2 + B-3',
    'B-0 \u27A4 B-0 + B-2 + B-3',
  ];

  // Data for carousel 13
  const carousel13Items = [
    { type: 'img', src: '/images/manual/pres-B04.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-B04.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-b03-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-b03-2.mp4',
      alt: 'Alt video',
    },


  ];
  const carousel13Captions = [
    'Step 11 Preview',
    'Part B-4 (P.C.N.R.)*',
    'B-0 \u27A4 B-0 + B-2 + B-3',
    'B-0 \u27A4 B-0 + B-2 + B-3',
  ];

  // Data for carousel 14
  const carousel14Items = [
    { type: 'img', src: '/images/manual/pres-B04.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-B04.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-b03-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-b03-2.mp4',
      alt: 'Alt video',
    },


  ];
  const carousel14Captions = [
    'Step 11 Preview',
    'Part B-4 (P.C.N.R.)*',
    'B-0 \u27A4 B-0 + B-2 + B-3',
    'B-0 \u27A4 B-0 + B-2 + B-3',
  ];

  // Data for carousel 15
  const carousel15Items = [
    { type: 'img', src: '/images/manual/pres-B04.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-B04.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-b03-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-b03-2.mp4',
      alt: 'Alt video',
    },


  ];
  const carousel15Captions = [
    'Step 11 Preview',
    'Part B-4 (P.C.N.R.)*',
    'B-0 \u27A4 B-0 + B-2 + B-3',
    'B-0 \u27A4 B-0 + B-2 + B-3',
  ];

  // Data for carousel 16
  const carousel16Items = [
    { type: 'img', src: '/images/manual/pres-B04.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-B04.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-b03-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-b03-2.mp4',
      alt: 'Alt video',
    },


  ];
  const carousel16Captions = [
    'Step 11 Preview',
    'Part B-4 (P.C.N.R.)*',
    'B-0 \u27A4 B-0 + B-2 + B-3',
    'B-0 \u27A4 B-0 + B-2 + B-3',
  ];

  // Data for carousel 17
  const carousel17Items = [
    { type: 'img', src: '/images/manual/pres-B04.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-B04.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-b03-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-b03-2.mp4',
      alt: 'Alt video',
    },


  ];
  const carousel17Captions = [
    'Step 11 Preview',
    'Part B-4 (P.C.N.R.)*',
    'B-0 \u27A4 B-0 + B-2 + B-3',
    'B-0 \u27A4 B-0 + B-2 + B-3',
  ];

  // Data for carousel 18
  const carousel18Items = [
    { type: 'img', src: '/images/manual/pres-B04.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-B04.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-b03-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-b03-2.mp4',
      alt: 'Alt video',
    },


  ];
  const carousel18Captions = [
    'Step 11 Preview',
    'Part B-4 (P.C.N.R.)*',
    'B-0 \u27A4 B-0 + B-2 + B-3',
    'B-0 \u27A4 B-0 + B-2 + B-3',
  ];

  return (
    <div>


      <Nav />


      <div className="manual-page build-manual">
        <br />

        <section>
          <h2>PIONEER.3</h2>
          <h3 className="subassembly-title">
            SUB-ASSEMBLY A
            <span className="post-cure-warning">Post-Curing NOT Recommended*(PCNR)</span>{' '}
            <img className="overflow-image" src="./images/decorative/assemblyA.png" alt="assemblyA" />
          </h3>


          <section className="carousel-section">
            <MediaCarousel itemsData={carousel2Items} captions={carousel2Captions} title="1" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel3Items} captions={carousel3Captions} title="2" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel4Items} captions={carousel4Captions} title="3" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel5Items} captions={carousel5Captions} title="4" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel6Items} captions={carousel6Captions} title="5" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel7Items} captions={carousel7Captions} title="6" />
          </section>
        </section>

        <section>
          <h3 className="subassembly-title">
            SUB-ASSEMBLY B
            <span className="post-cure-warning">Post-Curing NOT Recommended*(PCNR)</span>{' '}
            <img className="overflow-image" src="./images/decorative/assemblyB.png" alt="assemblyA" />
          </h3>


          <section className="carousel-section">
            <MediaCarousel itemsData={carousel8Items} captions={carousel8Captions} title="7" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel9Items} captions={carousel9Captions} title="8" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel10Items} captions={carousel10Captions} title="9" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel11Items} captions={carousel11Captions} title="10" />
          </section>

        </section>

        <section>
          <h3 className="subassembly-title">
            SUB-ASSEMBLY C
            <span className="post-cure-warning">Post-Curing NOT Recommended*(PCNR)</span>{' '}
            <img className="overflow-image" src="./images/decorative/assemblyC.png" alt="assemblyA" />
          </h3>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel12Items} captions={carousel12Captions} title="11" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel13Items} captions={carousel13Captions} title="12" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel14Items} captions={carousel14Captions} title="13" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel15Items} captions={carousel15Captions} title="14" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel16Items} captions={carousel16Captions} title="15" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel17Items} captions={carousel17Captions} title="16" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel18Items} captions={carousel18Captions} title="17" />
          </section>

        </section>
        <section>
          <h3 className="subassembly-title">
            SUB-ASSEMBLY D
            <span className="post-cure-warning">Post-Curing NOT Recommended*(PCNR)</span>{' '}
            <img className="overflow-image" src="./images/decorative/assemblyD.png" alt="assemblyA" />
          </h3>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel1Items} captions={carousel1Captions} title="1" />
          </section>
        </section>
        <section>
          <h3 className="subassembly-title">
            SUB-ASSEMBLY E
            <span className="post-cure-warning">Post-Curing NOT Recommended*(PCNR)</span>{' '}
            <img className="overflow-image" src="./images/decorative/assemblyA.png" alt="assemblyA" />
          </h3>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel1Items} captions={carousel1Captions} title="1" />
          </section>
        </section>
        <section>
          <h3 className="subassembly-title">
            SUB-ASSEMBLY F
            <span className="post-cure-warning">Post-Curing NOT Recommended*(PCNR)</span>{' '}
            <img className="overflow-image" src="./images/decorative/assemblyA.png" alt="assemblyA" />
          </h3>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel1Items} captions={carousel1Captions} title="1" />
          </section>
        </section>
      </div>
    </div>
  );
}

export default BuildManual;
