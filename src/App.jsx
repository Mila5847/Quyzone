// App.jsx
import { HashRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import LandingPage from './pages/LandingPage';
import { ParallaxProvider } from 'react-scroll-parallax';
import Background from './components/Background';
import BackToTop from './components/BackToTop';
import BuildingManual from './pages/BuildingManual';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <ParallaxProvider>
      <Background />
      <Router>
        <MainApp />
        <BackToTop threshold={300} duration={600} />  
      </Router>
    </ParallaxProvider>
  );
}


function MainApp() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route>
          <Route
            path="/"
            element={
              <PageFade>
                <LandingPage />
              </PageFade>
            }
          />
          <Route
            path="/contact"
            element={
              <PageFade>
                <ContactPage />
              </PageFade>
            }
          />
          <Route path="/building-manual" element={<BuildingManual />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function PageFade({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.28, ease: 'easeInOut' }}
      style={{ minHeight: '100dvh' }}
    >
      {children}
    </motion.main>
  );
}

export default App;
