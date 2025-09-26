import React, { useEffect, useMemo, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../styles/components/_MediaCarousel.scss";

function MediaCarousel({ itemsData, captions, title }) {
  const carouselRef = useRef(null);
  const videoRefs = useRef([]);

  // Build items from props
  const items = useMemo(
    () =>
      itemsData.map((data, index) => (
        <div className="item" data-value={index + 1} key={index + 1}>
          <div className="carousel-frame">
            {data.type === "img" ? (
              <img src={data.src} alt={data.alt} className="media" />
            ) : (
              <video
                className="media"
                controls
                muted
                playsInline
                preload="metadata"
                loop
                ref={(el) => (videoRefs.current[index] = el)}
              >
                <source src={data.src} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )),
    [itemsData]
  );

  const total = items.length;
  const [activeIndex, setActiveIndex] = useState(0);

  // Play/pause logic for videos
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
      <div className="carousel">
        <AliceCarousel
          disableDotsControls
          disableButtonsControls
          ref={carouselRef}
          items={items}
          activeIndex={activeIndex}
          onSlideChanged={(e) => setActiveIndex(e.item)}
        />
        
        <div>
          <p className="carousel-number">{title}</p>
          <p className="media-index">{`${activeIndex + 1}/${total}`}</p>
          <p className="media-caption">{captions[activeIndex]}</p>
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
