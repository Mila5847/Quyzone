import {

  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useCallback } from 'react';

function Support() {

 const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = useCallback((id) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTarget: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname, navigate]);

  return (
<>
 { <nav className="nav">
        <button onClick={() => scrollTo('how-it-works')}>How It Works</button>
        <button onClick={() => scrollTo('gallery')}>Gallery</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
        <Link to="/support">Support</Link>
      </nav> }
    
    <section>
      <h2>Support</h2>
      <p>Include frequently asked questions, help guides, or contact options here.</p>
    </section>
    </>
  );
}

export default Support;
