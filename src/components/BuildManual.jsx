import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { scroller } from "react-scroll";
import MediaCarousel from "./MediaCarousel";
import "../styles/components/_BuildManual.scss";

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
    <div className="build-manual">

      <nav className="nav">
        <button onClick={() => scrollTo("how-it-works")}>How It Works</button>
        <button onClick={() => scrollTo("gallery")}>Gallery</button>
        <RouterLink to="/design-manual">Design Manual</RouterLink>
        <RouterLink to="/support">Support</RouterLink>
      </nav>

      <br />
      
      <section>
        <h2>PIONEER.3</h2>
        <h3 className="subassembly-title">SUB ASSEMBLY A <img className="overflow-image" src="./images/decorative/assemblyA.png" alt="assemblyA" /></h3>
        <section>
          <MediaCarousel />
        </section>
      </section>
      </div>
    </>
  );
}

export default BuildManual;
