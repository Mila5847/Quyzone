import '../styles/components/_hero.scss';
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <div>
          <div className="cta">
            <div style={{ lineHeight: "40.564px", paddingTop: "10.9775px" }}>Get<br /></div>
            Yours <br />
            <span>HERE!</span>
          </div>
          <button
            className="cta-button cta-gumroad"
            aria-label="Buy on Gumroad"
            onClick={() => {
              window.open('https://quyzone.gumroad.com', '_blank', 'noopener,noreferrer');
            }}
          >
          </button>
        </div>
        <div className="left-separator"></div>
        <div className="hero-separator">
          <img src="/images/decorative/hero-separator.svg" alt="" />
        </div>
        <div className="right-separator"></div>
      </div>
    </section >
  );
};

export default Hero;
