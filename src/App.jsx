import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import SupportPage from './pages/SupportPage';
import { ParallaxProvider } from 'react-scroll-parallax';
import Background from './components/Background';

function App() {
  return (
    <ParallaxProvider>
      <Background />
      <Router>
        <MainApp />
      </Router>
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
