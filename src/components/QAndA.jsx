import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import '../styles/pages/_ContactPage.scss';
import ContactForm from './ContactForm';
import { useEffect } from 'react';
import Nav from './Nav';

function QAndA() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const faqs = [
    { q: 'What is Lorem Ipsum?', a: 'Lorem ipsum dolor sit amet...' },
    { q: 'Where does it come from?', a: 'Quisque eget luctus mi...' },
    { q: 'Why do we use it?', a: 'Suspendisse massa risus...' },
  ];

  return (
    <>
      <Nav />

      <section className="contact-intro">
        <h2>Contact</h2>
        <p>Include frequently asked questions, help guides, or contact options here.</p>
      </section>

      <Accordion className="faq" allowMultiple transition transitionTimeout={200}>
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
