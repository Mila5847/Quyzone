import "../styles/components/_hero.scss";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <div>
          <div className="cta">
            Get <br />
            Started <br />
            <span>HERE!</span>
          </div>
          <button
            className="cta-button cta-gumroad"
            aria-label="Buy on Gumroad"
          ></button>
        </div>
        <div className="left-separator"></div>
        <div className="hero-separator">
          <img src="/images/decorative/hero-separator.svg" alt="" />
        </div>
        <div className="right-separator"></div>
      </div>
    </section>
  );
};

export default Hero;
