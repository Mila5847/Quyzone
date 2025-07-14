import VideoPlayer from "./VideoPlayer";
import '../styles/components/_ImageCarousel.scss';

function HowItWorks() {
  return (
    <>
    <h2>ABOUT THE PROJECT</h2>
    <h3>"Printable - Posable - Perfectible"</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos- </p>
    <div className="video-row">
      <VideoPlayer src="/videos/switch_video_1.webm" caption="3 seconds video" />
      <VideoPlayer src="/videos/switch_video_2.webm" caption="3 seconds video" />
      <VideoPlayer src="/videos/switch_video_3.webm" caption="3 seconds video" />
    </div>

    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos- trud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hen-
    </>
  );
}

export default HowItWorks;
