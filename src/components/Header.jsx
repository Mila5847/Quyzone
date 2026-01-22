import { useLayoutEffect, useEffect, useRef, Fragment } from 'react';
import Logo from './logo';
import '../styles/components/_Header.scss';

export default function BrandHeader({
  title = 'MECHABUST',
  subtitles = ['PRINTABLE', 'POSABLE', 'PERFECTIBLE'],
  id = 'Logo',
  className = 'section ',
  logoClassName = '',
  logoStyle = undefined,
}) {
  const titleRef = useRef(null);
  const subtitlesRef = useRef(null);

  useLayoutEffect(() => {
    const titleEl = titleRef.current;
    const subsEl = subtitlesRef.current;
    if (!titleEl || !subsEl) return;

    const adjustSpacing = () => {
      // keep ONLY the letter-spacing alignment logic (logo sizing removed)
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
    };

    // Initial adjustment
    adjustSpacing();

    // Wait for fonts to load, then adjust again
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        adjustSpacing();
      });
    }

    // Handle window resize
    const handleResize = () => {
      adjustSpacing();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [title, subtitles.join('|')]);

  return (
    <section id={id} className={`${className} brand-header`}>
      <Logo className={logoClassName} style={logoStyle} />

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
