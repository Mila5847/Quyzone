// App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import LandingPage from "./pages/LandingPage";
import SupportPage from "./pages/SupportPage";
import { ParallaxProvider } from "react-scroll-parallax";
import Background from "./components/Background";
import BackToTop from "./components/BackToTop";
import DesignManual from "./pages/DesignManual";

function App() {
  return (
    <ParallaxProvider>
      {/* Keep background outside animations so it doesn't blink */}
      <Background />
      <Router>
        <MainApp />
      </Router>
      <BackToTop threshold={300} duration={600} />
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
            path="/support"
            element={
              <PageFade>
                <SupportPage />
              </PageFade>
            }
          />
        </Route>

        <Route element={<ManualLayout />}>
          <Route path="/design-manual" element={<DesignManual />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function ManualLayout() {
  return (
    <main className="manual-page site-content">
      <Outlet />
    </main>
  );
}

function PageFade({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.28, ease: "easeInOut" }}
      style={{ minHeight: "100dvh" }}
    >
      {children}
    </motion.main>
  );
}

export default App;
