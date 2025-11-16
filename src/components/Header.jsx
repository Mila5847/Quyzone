import { useLayoutEffect, useRef } from 'react';
import Logo from './logo';
import '../styles/components/_Header.scss';

export default function BrandHeader({
  title = 'MECHABUST',
  subtitles = ['PRINTABLE', 'POSABLE', 'PERFECTIBLE'],
  id = 'Logo',
  className = 'section ',
}) {
  const titleRef = useRef(null);
  const subtitlesRef = useRef(null);

  useLayoutEffect(() => {
    const titleEl = titleRef.current;
    const subsEl = subtitlesRef.current;
    if (!titleEl || !subsEl) return;

    subsEl.style.letterSpacing = '0px';
    const titleWidth = titleEl.offsetWidth;
    const subsWidth = subsEl.scrollWidth;
    const diff = titleWidth - subsWidth;
    if (diff <= 0) return;

    const text = (subsEl.textContent || '').replace(/\s/g, '');
    const gaps = Math.max(text.length, 1);

    subsEl.style.letterSpacing = `${diff / gaps}px`;
  }, [title, subtitles.join('|')]);

  return (
    <section id={id} className={`${className} brand-header`}>
      <Logo />

      <div className="brand-heading">
        <h1 ref={titleRef}>{title}</h1>

        <div className="sub-h1" ref={subtitlesRef}>
          {subtitles.map((word, i) => (
            <span key={i}>
              {word}
              {i < subtitles.length - 1 && (
                <span className="spacer-horizontal">&#x25CF;</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
