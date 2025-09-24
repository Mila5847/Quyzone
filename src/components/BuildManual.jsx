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

  // 👉 Data for first carousel
  const carousel1Items = [
    { type: "img", src: "/images/manual/pres_coverBot.jpg", alt: "Slide 1" },
    { type: "img", src: "/images/manual/ori_receiver.jpg", alt: "Slide 2" },
    { type: "img", src: "/images/manual/ori_coverBot.jpg", alt: "Slide 3" },
    { type: "video", src: "/videos/manual/anim-coverBotR.mp4", alt: "Slide 4" },
    { type: "video", src: "/videos/manual/anim-coverBotL.mp4", alt: "Slide 5" },
  ];
  const carousel1Captions = [
    "Cover bottom — presentation",
    "Receiver — orientation reference",
    "Cover bottom — orientation",
    "Animation: CoverBot movement (right)",
    "Animation: CoverBot movement (left)",
  ];

  // 👉 Data for second carousel
  const carousel2Items = [
    { type: "video", src: "/videos/manual/anim-a02-back.mp4", alt: "Alt video" },
    { type: "video", src: "/videos/manual/anim-a02-front.mp4", alt: "Alt video" },
    { type: "img", src: "/images/manual/alt_view1.jpg", alt: "Alt 1" },
  ];
  const carousel2Captions = [
    "Alternative view — 1",
    "Alternative view — 2",
    "Alternative animation",
  ];

  return (
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
        <h3 className="subassembly-title">
          SUB ASSEMBLY A{" "}
          <img
            className="overflow-image"
            src="./images/decorative/assemblyA.png"
            alt="assemblyA"
          />
        </h3>

        <section>
          <MediaCarousel
            itemsData={carousel1Items}
            captions={carousel1Captions}
            title="A1"
          />
        </section>

        {/* Second carousel for additional media */}
        <section>
          <MediaCarousel
            itemsData={carousel2Items}
            captions={carousel2Captions}
            title="A2"
          />
        </section>
      </section>
    </div>
  );
}

export default BuildManual;
