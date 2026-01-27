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
    {
      q: 'Why this strange shape for the ship??',
      a: 'Thanks for asking! Two reasons: first, it was meant as a parody of the classic Benchee 3D print test. Second, when you flip it upside down, it totally looks like a mech head.'
    },
    { q: 'Where does it come from?', a: 'Quisque eget luctus mi...' },
    { q: 'Why do we use it?', a: 'Suspendisse massa risus...' },
    { q: 'Why do we use it?', a: 'Suspendisse massa risus...' },
    { q: 'Why do we use it?', a: 'Suspendisse massa risus...' },
  ];

  return (
    <>
      <Nav />

      <section className="contact-intro">
        <h2>Contact</h2>
        <p>&nbsp;&nbsp;Got questions? Trust me, someone else wondered the same thing. Dive below — the answers live there. And if not, congrats on being the first… reach out and let me know. </p>
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
