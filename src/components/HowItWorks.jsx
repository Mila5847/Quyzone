import VideoPlayer from "./VideoPlayer";
import '../styles/components/_ImageCarousel.scss';
import '../styles/components/_VideoPlayer.scss';



function HowItWorks() {
  return (
    <>
    <h2>What is the Product?</h2>
    <q>Or Why You'll love Building My kit</q>
    <p>I'm a huge fan of mechanical design, and let's be honest, so are you. That's why we're both here. In need of a brand new model kit to build? I hear ya.  
At Quyzone you'll find quality kits designed by and for every hungry builders—brought to life with a unique cute whimsical touch!</p>
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
