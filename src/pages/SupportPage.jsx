import Support from '../components/Support';
import Header from '../components/Header';
import { Parallax } from 'react-scroll-parallax';

function SupportPage() {
  return (
    
    <div>
      <Parallax speed={0}>
        <Header title="SUPPORT PAGE TITLE HERE" /> 
      </Parallax>
      
      
      <Support />
    </div>
  );
}

export default SupportPage;
