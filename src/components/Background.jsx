import { Parallax } from 'react-scroll-parallax';
import '../styles/components/_background.scss';

export default function Background() {
  return (
    <>
    <Parallax speed={-20}>
      <div className="parallax-wallpaper" />
    </Parallax>
    </>
  );
}

