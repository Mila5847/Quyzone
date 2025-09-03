import { Link } from 'react-router-dom';


const Logo = () => {
  return (
     <Link to="/" style={{ textDecoration: 'none' }}>

    <section className="logo-section">
      <img src="/images/logo.svg"
      
      
      alt="Logo" />
    </section>
     </Link>

  );
};

export default Logo;
