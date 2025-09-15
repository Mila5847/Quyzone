import VideoPlayer from "./VideoPlayer";
import "../styles/components/_ImageCarousel.scss";
import "../styles/components/_VideoPlayer.scss";
import "../styles/components/_HowItWorks.scss";

export function HowItWorksPart1() {
  return (
    <div className="howitworks">
      <h2>What is the Product?</h2>
      <q>Or Why You'll love Building My kit</q>
      <img src="/images/decorative/me.png" alt="mascot" />
    </div>
  );
}

export function HowItWorksPart2() {
  return (
    <div className="howitworks">
      <p>
        I'm a huge fan of mechanical design, and let's be honest, so are you.
        That's why we're both here. In need of a brand new model kit to build? I
        hear ya.  At Quyzone you'll find quality kits designed by and for every
        hungry builders—brought to life with a unique cute whimsical touch!
      </p>
      <ul>
        <li>
          "PayWhatYouWant" to start off -yup!- Go ahead and pick it up
          digitally. Support the project as you see fit.
        </li>
        <li>
          Sick of copy-paste bland looks? The beast hums mechanical designs and
          exudes charming personality.
        </li>
        <li>
          Small resin printer? No problem. The largest pieces are designed to
          fit inside a 3"x3" footprint.
        </li>
        <li>
          Lacking a PHD in model making? Got you covered with my animated
          manual.
        </li>
        <li>
          No glue required. Every piece is made to snap-fit like a boss, for
          super satisfying haptic feeback.
        </li>
      </ul>

      <div className="video-row">
        <VideoPlayer
          src="/videos/switch_video_1.webm"
          caption="3 seconds video"
        />
      </div>
    </div>
  );
}
import PropTypes from "prop-types";

export function HowItWorksPart3({ videos = [], className = "" }) {
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

export function HowItWorksPart4() {
  return (
    <div className="howitworks">
       <h2>Me Quy and the Mechabust</h2>
       <p>....</p>
    </div>
  );
}