import '../styles/components/_footer.scss';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="meetMe">

        Lets Meet Up!

      </div>
      <div className="social-icons">
        <a href="https://www.youtube.com/@quyzone" target="_blank" rel="noopener noreferrer">
          <img src="/images/logo/YouTube.svg" alt="YouTube" width={110} height={130} />
        </a>
        <a href="https://www.instagram.com/thequyzone/" target="_blank" rel="noopener noreferrer">
          <img src="/images/logo/Instagram.svg" alt="Instagram" width={100} height={130} />
        </a>
        <a href="https://x.com/quyzone" target="_blank" rel="noopener noreferrer">
          <img src="/images/logo/X-logo.svg" alt="X (Twitter)" width={85} height={130} />
        </a>
        <a href="https://www.facebook.com/thequyzone" target="_blank" rel="noopener noreferrer">
          <img src="/images/logo/Facebook.svg" alt="Facebook" width={100} height={130} />
        </a>
      </div>
      <div className="meetMe">
        <RouterLink to="/contact" onClick={() => handleClick('/contact')}>
          &gt; Contact
        </RouterLink>
      </div>
      <div>© 2025 quyzone.com - Design by Quy Tran. Development by Mila Kehayova.  Model weathering by Laury-Anne Morel</div>
    </div>
  );
};

export default Footer;
