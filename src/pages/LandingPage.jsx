import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HowItWorks from '../components/HowItWorks';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';
import '../style.scss';

function LandingPage() {
// Uncomment the following lines if you want to handle scroll restoration 

//   const location = useLocation();

//   useEffect(() => {
//     const scrollTarget = location.state?.scrollTarget;

//     requestAnimationFrame(() => {
//       if (scrollTarget) {
//         const el = document.getElementById(scrollTarget);
//         if (el) {
//           el.scrollIntoView({ behavior: 'smooth' });
//         }
//       } else {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       }
//     });
//   }, [location.key]);

  return (
    <div>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
       <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default LandingPage;
