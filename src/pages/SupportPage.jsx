import Support from '../components/Support';
import Header from '../components/Header';
import { Parallax } from 'react-scroll-parallax';

function SupportPage() {
  return (
    
    <div>
      <Parallax speed={0}>
        <Header title="CONTACT" /> 
      </Parallax>
      
      
      <Support />
    </div>
  );
}

export default SupportPage;
