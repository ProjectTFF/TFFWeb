import React from 'react';
import '../Assets/Styles/footer.css';
import ScrollToTop from './scrollToTop';

function Footer() {
  return (
    <footer>
      <ScrollToTop />
      <div className="container">
        <span className="copyright">
          © 2022 &nbsp;
          <a href="/">Tampere Flute Fest</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
