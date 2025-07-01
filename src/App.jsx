import './App.css'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Support from './components/Support'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container text-center py-5">
      <p>Logo Placement: to be implemented</p>
      <p>CTA: Link to Gumroad: to be implemented</p>
      <HowItWorks />
      <Contact />
      <Gallery />
      <Support />
    </div>
  );
}


export default App
