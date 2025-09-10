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
        <img src="/images/sample_image_2.jpg" alt="Slide 1" className="media" />
      </div>,
      <div className="item" data-value="2" key="2">
        <img src="/images/sample_image_1.jpg" alt="Slide 2" className="media" />
      </div>,
      <div className="item" data-value="3" key="3">
        <img src="/images/sample_image_2.jpg" alt="Slide 3" className="media" />
      </div>,
      <div className="item" data-value="4" key="4">
        <img src="/images/sample_image_1.jpg" alt="Slide 4" className="media" />
      </div>,
      <div className="item" data-value="5" key="5">
        <video className="media" controls>
          <source src="/videos/manual/assembly_100001.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>,
    ],
    []
  );

  return (
    <div className="carousel">
      <AliceCarousel
        ref={carouselRef}
        items={items}
        mouseTracking
        touchTracking
        disableDotsControls
        disableButtonsControls
        onSlideChanged={({ item }) => setIndex(item)}
      />

      <p className="index">{`${index + 1}/${items.length}`}</p>
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
  );
}

export default MediaCarousel;
