import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import '../styles/components/_ImageCarousel.scss';

function ImageCarousel({ images }) {
  return (
    <div className="carousel-container">
      <Swiper
       watchSlidesProgress={true}
       effect="coverflow"
       grabCursor={true}
       centeredSlides={true}
       slidesPerView="auto"
       loop={true}
       navigation
       initialSlide={0}
       pagination={{ clickable: true }}
       coverflowEffect={{
         rotate: 0,
         stretch: 0,
         depth: 150,
         modifier: 2.5,
         slideShadows: false,
       }}
       modules={[EffectCoverflow, Pagination, Navigation]}
       className="styled-swiper"
       >
        {images.map((src, idx) => (
          <SwiperSlide key={idx} className="carousel-slide">
            <img src={src} alt={`Slide ${idx + 1}`} className="carousel-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageCarousel;
