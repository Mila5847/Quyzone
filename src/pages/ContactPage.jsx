import Header from '../components/Header';
import { Parallax } from 'react-scroll-parallax';
import QAndA from '../components/QAndA';

function ContactPage() {
  return (
    <div>
      <Parallax speed={0}>
        <Header title="CONTACT" />
      </Parallax>

      <Parallax speed={0}>
        <QAndA />
      </Parallax>
    </div>
  );
}

export default ContactPage;
