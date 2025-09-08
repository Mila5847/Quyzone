// src/components/BrandHeader.tsx
import Logo from "./logo";

/**
 * @typedef {Object} HeaderProps
 * @property {string} [title] - only this is editable
 * @property {string} [id]
 * @property {string} [className]
 */

/**
 * @param {HeaderProps} props
 */
export default function BrandHeader({
  title = "MECHABUST",
  id = "Logo",
  className = "section ",
}) {
  return (
    <section id={id} className={className}>
      <Logo />

      <h1>{title}</h1>
      <div className="sub-h1">
        <span>PRINTABLE</span>
        <span className="spacer-horizontal">&nbsp;&#x25CF;&nbsp;</span>
        <span>POSABLE</span>
        <span className="spacer-horizontal">&nbsp;&#x25CF;&nbsp;</span>
        <span>PERFECTIBLE</span>
      </div>
    </section>
  );
}
