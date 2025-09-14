import React, { useMemo, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../styles/components/_MediaCarousel.scss";

function MediaCarousel() {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);

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
          <video className="media" controls playsInline preload="metadata">
            <source src="/videos/manual/anim-coverBotR.mp4" type="video/mp4" />
          </video>
        </div>
      </div>,
      <div className="item" data-value="5" key="5">
        <div className="carousel-frame">
          <video className="media" controls playsInline preload="metadata">
            <source src="/videos/manual/anim-coverBotL.mp4" type="video/mp4" />
          </video>
        </div>
      </div>,
    ],
    []
  );

  const total = items.length;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
     <h2>A1</h2>

      <div className="carousel">
      <AliceCarousel
        disableDotsControls
        disableButtonsControls
        ref={carouselRef}
        items={items}
        activeIndex={activeIndex}
        onSlideChanged={(e) => setActiveIndex((e.item))}
      />
      
      <p className="index">{`${activeIndex + 1}/${total}`}</p>
      <div className="caption-container">
        <p className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>

      <button
        type="button"
        className="btn-prev"
        aria-label="Previous"
        onClick={() => carouselRef.current?.slidePrev()}
      >
        &lang;
      </button>
      <button
        type="button"
        className="btn-next"
        aria-label="Next"
        onClick={() => carouselRef.current?.slideNext()}
      >
        &rang;
      </button>
    </div>
    </>
  );
}

export default MediaCarousel;
