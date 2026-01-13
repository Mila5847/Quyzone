import VideoPlayer from './VideoPlayer';
import '../styles/components/_ImageCarousel.scss';
import '../styles/components/_VideoPlayer.scss';
import '../styles/components/_HowItWorks.scss';
import TimeLine from './Timeline';

export function HowItWorksPart1() {
  return (
    <div className="howitworks">
      <h2 id="what-is-the-product">What is the Product?</h2>
      <q>Or Why You'll Love Building My Kit</q>

      <div className="howitworks-row">
        <img
          src="/images/decorative/ortho_01.png"
          alt="Pioneer-3 model"
          className="howitworks-image"
        />

        <div className="howitworks-text">
          <p className=" text-indent">
            I'm a huge fan of mechanical design, and let's be honest, so are you. That's why we're
            both here.
          </p>
          <p className=" text-indent">
            Quyzone offers high-quality files kits for <strong>resin printers</strong> designed by
            and for every hungry builder, brought to life with a unique, cute, whimsical touch! Our
            first model, the <strong>Pioneer-3</strong> sub, is pint-sized, compact, and ready for
            deep-sea epicness.
          </p>
          <hr />
          <p>
            → <strong>Printable:</strong> friendly for even smaller resin printers.
          </p>
          <p>
            → <strong>Posable:</strong> looks awesome on shelf with precision joints.
          </p>
          <p>
            → <strong>Perfectible:</strong> features modular assembly allowing for easy upgrades and
            deep customization.
          </p>
        </div>
      </div>
    </div>
  );
}

export function HowItWorksPart2() {
  return (
    <div className="howitworks">
      <div className="white-banner">
        <div className="white-banner__inner">
          <div className="feature">
            <img
              src="/images/decorative/5iconsA.png"
              alt="paywhatyouwant"
              className="feature__icon"
            />
            <p className="feature__desc">
              “<strong>PayWhatYouWant</strong>” Support the project as you see fit.
            </p>
          </div>

          <div className="feature">
            <img src="/images/decorative/5iconsB.png" alt="" className="feature__icon" />
            <p className="feature__desc">
              <strong>Unique Aesthetic</strong> Fresh IP as detailed as whimsical.
            </p>
          </div>

          <div className="feature">
            <img
              src="/images/decorative/5iconsC.jpg"
              alt="small footprint"
              className="feature__icon"
            />
            <p className="feature__desc">
              Small Resin Printer? Parts are designed for <strong>Small Footprints</strong>.
            </p>
          </div>

          <div className="feature">
            <img
              src="/images/decorative/5iconsD.gif"
              alt="animated manual"
              className="feature__icon"
            />
            <p className="feature__desc">
              New to Model Making? My <strong>Animated Manual</strong> has you covered.
            </p>
          </div>

          <div className="feature">
            <img
              src="/images/decorative/5iconsE.jpg"
              alt="No glue needed"
              className="feature__icon"
            />
            <ul className="feature__list">
              <p>
                → <strong>No Glue Needed</strong>
                <br />
                → precision snap
                <br />→ tactile bliss
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import PropTypes from 'prop-types';

export function HowItWorksPart3({ videos = [], className = '' }) {
  return (
    <div className={`howitworks ${className}`}>
      <div className="video-row">
        {videos.map((v, i) => (
          <VideoPlayer
            key={v.src || i}
            src={v.src}
            caption={v.caption}
            poster={v.poster}
            autoPlay={v.autoPlay}
            loop={v.loop}
            muted={v.muted}
            controls={v.controls}
          />
        ))}
      </div>
    </div>
  );
}

HowItWorksPart3.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      caption: PropTypes.string,
      poster: PropTypes.string,
      autoPlay: PropTypes.bool,
      loop: PropTypes.bool,
      muted: PropTypes.bool,
      controls: PropTypes.bool,
    }),
  ),
  className: PropTypes.string,
};
