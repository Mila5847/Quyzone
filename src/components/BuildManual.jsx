import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { scroller } from "react-scroll";
import "../styles/pages/_SupportPage.scss";
import MediaCarousel from "./MediaCarousel";

function BuildManual() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = useCallback(
    (name) => {
      if (location.pathname !== "/") {
        // Go to LandingPage and let it scroll via useEffect
        navigate("/", { state: { scrollTarget: name } });
      } else {
        // If already on LandingPage, scroll immediately
        scroller.scrollTo(name, {
          smooth: "easeInOutQuart",
          duration: 600,
          offset: -80,
        });
      }
    },
    [location.pathname, navigate],
  );

  return (
    <>
      <nav className="nav">
        <button onClick={() => scrollTo("how-it-works")}>How It Works</button>
        <button onClick={() => scrollTo("gallery")}>Gallery</button>
        <RouterLink to="/design-manual">Design Manual</RouterLink>
        <RouterLink to="/support">Support</RouterLink>
      </nav>

      <section>
        <h2>Support</h2>
       <section>
        <h3>Showcase</h3>
        <MediaCarousel />
      </section>
      </section>
    </>
  );
}

export default BuildManual;