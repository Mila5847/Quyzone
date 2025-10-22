import '../styles/components/_footer.scss';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <a href="https://www.youtube.com/@YourChannel" target="_blank" rel="noopener noreferrer">
          <img src="/images/logo/YouTube.svg" alt="YouTube" width={100} height={130} />
        </a>
        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <img src="/images/logo/Instagram.svg" alt="Instagram" width={100} height={130} />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <img src="/images/logo/X-logo.svg" alt="X (Twitter)" width={100} height={130} />
        </a>
        <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
          <img src="/images/logo/Facebook.svg" alt="Facebook" width={100} height={130} />
        </a>
      </div>
      <div className="meetMe">
        <RouterLink to="/contact" onClick={() => handleClick('/contact')}>
          &gt; Contact
        </RouterLink>
      </div>
      <div>© 2025 quyzone.com - Design by Quy Tran. Development by Mila Kehayova.</div>
    </div>
  );
};

export default Footer;
