import Header from '../components/Header';
import { Parallax } from 'react-scroll-parallax';
import QAndA from '../components/QAndA';
import Footer from '../components/Footer';

function ContactPage() {
  return (
    <div>
      <Parallax speed={0}>
        <Header title="CONTACT" subtitles={['CONTACT1', 'CONTACT2', 'CONTACT3']} />
      </Parallax>

      <Parallax speed={0}>
        <QAndA />
      </Parallax>

      <Parallax speed={0}>
        <Footer />
      </Parallax>
    </div>
  );
}

export default ContactPage;
