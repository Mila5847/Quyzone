import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { scroller } from "react-scroll";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import "../styles/pages/_ContactPage.scss";
import ContactForm from "./ContactForm";

function QAndA() {
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
    [location.pathname, navigate]
  );

  const faqs = [
    { q: "What is Lorem Ipsum?", a: "Lorem ipsum dolor sit amet..." },
    { q: "Where does it come from?", a: "Quisque eget luctus mi..." },
    { q: "Why do we use it?", a: "Suspendisse massa risus..." },
  ];

  return (
    <>
      <nav className="nav">
        <button onClick={() => scrollTo("how-it-works")}>How It Works</button>
        <RouterLink to="/building-manual">Building Manual</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>

      <section>
        <h2>Contact</h2>
        <p>
          Include frequently asked questions, help guides, or contact options
          here.
        </p>
      </section>

      <Accordion
        className="faq"
        allowMultiple
        transition
        transitionTimeout={200}
      >
        {faqs.map((item, idx) => (
          <AccordionItem
            key={idx}
            header={
              <div className="accordion-header">
                <span>{item.q}</span>
                <span className="arrow">▼</span>
              </div>
            }
          >
            {item.a}
          </AccordionItem>
        ))}
      </Accordion>

      <ContactForm />
    </>
  );
}

export default QAndA;
