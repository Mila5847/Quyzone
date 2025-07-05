import '../VideoPlayer.scss';

function VideoPlayer({ src, caption = '' }) {
  return (
    <div className="video-wrapper">
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className="native-video"
      />
      {caption && <div className="caption">{caption}</div>}
    </div>
  );
}

export default VideoPlayer;