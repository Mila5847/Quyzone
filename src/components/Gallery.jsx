import ImageCarousel from './ImageCarousel';

function Gallery() {
  const images = [
  '/images/sample_image_1.jpg',
  '/images/sample_image_2.jpg',
];


  return (
    <section>
      <h2>Gallery</h2>
      <ImageCarousel images={images} />
    </section>
  );
}

export default Gallery;