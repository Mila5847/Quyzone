import { useLayoutEffect, useRef, Fragment } from 'react';
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
  const headerRef = useRef(null); 

  useLayoutEffect(() => {
    const titleEl = titleRef.current;
    const subsEl = subtitlesRef.current;
    const headerEl = headerRef.current;
    if (!titleEl || !subsEl || !headerEl) return;

    if (window.matchMedia('(max-width: 600px)').matches) {
      subsEl.style.letterSpacing = '';
    } else {
      subsEl.style.letterSpacing = '0px';
      const titleWidth = titleEl.offsetWidth;
      const subsWidth = subsEl.scrollWidth;
      const diff = titleWidth - subsWidth;
      if (diff > 0) {
        const text = (subsEl.textContent || '').replace(/\s/g, '');
        const gaps = Math.max(text.length, 1);
        subsEl.style.letterSpacing = `${diff / gaps}px`;
      }
    }

    const headingEl = headerEl.querySelector('.brand-heading');
    if (headingEl) {
      headerEl.style.setProperty('--logo-h', `${headingEl.offsetHeight}px`);
    }
  }, [title, subtitles.join('|')]);

  return (
    <section ref={headerRef} id={id} className={`${className} brand-header`}>
      <Logo />

      <div className="brand-heading">
        <h1 ref={titleRef}>{title}</h1>

        <div className="sub-h1" ref={subtitlesRef}>
          {subtitles.map((word, i) => (
            <Fragment key={i}>
              <span className="sub-h1__item">{word}</span>
              {i < subtitles.length - 1 && (
                <span className="sub-h1__dot" aria-hidden="true">
                  &#x25CF;
                </span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
