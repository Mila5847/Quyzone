import Logo from './logo';
import '../styles/components/_Header.scss';

export default function BrandHeader({ title = 'MECHABUST', id = 'Logo', className = 'section ' }) {
  return (
    <section id={id} className={`${className} brand-header`}>
      <Logo />

      <div className="brand-heading">
        <h1>{title}</h1>
        <div className="sub-h1">
          <span>PRINTABLE</span>
          <span className="spacer-horizontal">&#x25CF;</span>
          <span>POSABLE</span>
          <span className="spacer-horizontal">&#x25CF;</span>
          <span>PERFECTIBLE</span>
        </div>
      </div>
    </section>
  );
}
