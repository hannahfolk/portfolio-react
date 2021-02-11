import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="col-md-12">
        <div className="social-links">
          <span className="m-4">
            <a
              href="https://www.linkedin.com/in/hannahfolk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </span>
          <span className="m-4">
            <a
              href="https://www.github.com/hannahfolk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </span>
          <span className="m-4">
            <a
              href="https://www.twitter.com/hannahfolk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </span>
        </div>

        <div className="copyright py-4 text-center">
          <div className="container">
            <small>Copyright &copy; Hannah Folk</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
