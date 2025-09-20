import React, { useEffect, useMemo, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../styles/components/_MediaCarousel.scss";

function MediaCarousel() {
  const carouselRef = useRef(null);

  const captions = useMemo(
    () => [
      "Cover bottom — presentation",
      "Receiver — orientation reference",
      "Cover bottom — orientation",
      "Animation: CoverBot movement (right)",
      "Animation: CoverBot movement (left)",
    ],
    []
  );

  const videoRefs = useRef([]);

  const items = useMemo(
    () => [
      <div className="item" data-value="1" key="1">
        <div className="carousel-frame">
          <img src="/images/manual/pres_coverBot.jpg" alt="Slide 1" className="media" />
        </div>
      </div>,
      <div className="item" data-value="2" key="2">
        <div className="carousel-frame">
          <img src="/images/manual/ori_receiver.jpg" alt="Slide 2" className="media" />
        </div>
      </div>,
      <div className="item" data-value="3" key="3">
        <div className="carousel-frame">
          <img src="/images/manual/ori_coverBot.jpg" alt="Slide 3" className="media" />
        </div>
      </div>,
      <div className="item" data-value="4" key="4">
        <div className="carousel-frame">
          <video
            className="media"
            controls
            muted
            playsInline
            preload="metadata"
            loop
            ref={(el) => (videoRefs.current[3] = el)}  
          >
            <source src="/videos/manual/anim-coverBotR.mp4" type="video/mp4" />
          </video>
        </div>
      </div>,
      <div className="item" data-value="5" key="5">
        <div className="carousel-frame">
          <video
            className="media"
            controls
            muted
            playsInline
            preload="metadata"
            loop
            ref={(el) => (videoRefs.current[4] = el)} 
          >
            <source src="/videos/manual/anim-coverBotL.mp4" type="video/mp4" />
          </video>
        </div>
      </div>,
    ],
    []
  );

  const total = items.length;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    for (const v of videoRefs.current) {
      if (v) v.pause();
    }
    const v = videoRefs.current[activeIndex];
    if (v) {
      const p = v.play();
      if (p && typeof p.then === "function") p.catch(() => {});
    }
  }, [activeIndex]);

  return (
    <>
      <h4>A1</h4>

      <div className="carousel">
        <AliceCarousel
          disableDotsControls
          disableButtonsControls
          ref={carouselRef}
          items={items}
          activeIndex={activeIndex}
          onSlideChanged={(e) => setActiveIndex(e.item)}
        />

        <p className="index">{`${activeIndex + 1}/${total}`}</p>

        <div className="caption-container">
          <p className="caption">{captions[activeIndex]}</p> 
        </div>
        
        <button
          type="button"
          className="btn-prev"
          aria-label="Previous"
          onClick={() => carouselRef.current?.slidePrev()}
        >
          <img src="/images/ui/buttonGalleryBack.svg" alt="" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="btn-next"
          aria-label="Next"
          onClick={() => carouselRef.current?.slideNext()}
        >
          <img src="/images/ui/buttonGalleryForward.svg" alt="" aria-hidden="true" />
        </button>
      </div>
    </>
  );
}

export default MediaCarousel;
