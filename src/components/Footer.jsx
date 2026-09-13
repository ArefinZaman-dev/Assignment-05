const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">DS</div>

            <h2>
              Dev<span>Stack</span>
            </h2>
          </div>

          <p>
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="social-links">
            <a href="#">GitHub</a>

            <a href="#">Twitter</a>

            <a href="#">LinkedIn</a>
          </div>
        </div>

        <div>
          <h3>Product</h3>

          <a href="#">Home</a>

          <a href="#">Technologies</a>

          <a href="#">Projects</a>
        </div>

        <div>
          <h3>Company</h3>

          <a href="#">About</a>

          <a href="#">Contact</a>

          <a href="#">Careers</a>
        </div>

        <div>
          <h3>Legal</h3>

          <a href="#">Privacy Policy</a>

          <a href="#">Terms of Service</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div>
          <a href="#">Privacy</a>

          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
