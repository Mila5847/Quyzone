import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import SupportPage from './pages/SupportPage';
import './style.scss';

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTarget: id } });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="nav">
        <button onClick={() => scrollTo('how-it-works')}>How It Works</button>
        <button onClick={() => scrollTo('gallery')}>Gallery</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
        <Link to="/support">Support</Link>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </>
  );
}

export default App;
