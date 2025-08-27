import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import SupportPage from './pages/SupportPage';
import { ParallaxProvider } from 'react-scroll-parallax';
import Background from './components/Background';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <ParallaxProvider>
      <Background />
      <Router>
        <MainApp />
      </Router>
       <BackToTop threshold={300} duration={600} />
    </ParallaxProvider>
  );
}

function MainApp() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </>
  );
}

export default App;
