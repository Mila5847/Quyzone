import { Link } from "react-router-dom";

const Logo = ({ to = "/" }) => {
  return (
    <section className="logo-section">
      <Link to={to} className="logo-link" aria-label="Go to home">
        <img src="/images/logo/logo.svg" alt="Logo" draggable="false" />
      </Link>
    </section>
  );
};

export default Logo;
