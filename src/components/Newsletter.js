import PropTypes from "prop-types";
import "./Newsletter.css";

const Newsletter = ({ className = "" }) => {
  return (
    <section className={`newsletter ${className}`}>
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-icon">
            <img
              className="icon-customer-bytes-1"
              loading="lazy"
              alt=""
              src="/icon-customer-bytes-1@2x.png"
            />
          </div>
          <div className="newsletter-title">
            <h2 className="subscibe-newsletter">Subscibe Newsletter</h2>
          </div>
          <div className="subscribe-to-our">
            Subscribe to our email and get updates right in your inbox
          </div>
        </div>
      </div>
      <div className="newsletter-form">
        <div className="newsletter-input">
          <h3 className="enter-your-email">Enter your email</h3>
          <button className="newsletter-button">
            <div className="newsletter-action-button">
              <div className="subscribe">Subscribe</div>
            </div>
          </button>
        </div>
      </div>
      <div className="social-icons-container-wrapper">
        <div className="social-icons-container">
          <img
            className="round-icons"
            loading="lazy"
            alt=""
            src="/round-icons.svg"
          />
          <img
            className="round-icons1"
            loading="lazy"
            alt=""
            src="/round-icons-1.svg"
          />
          <img
            className="round-icons2"
            loading="lazy"
            alt=""
            src="/round-icons-2.svg"
          />
        </div>
      </div>
    </section>
  );
};

Newsletter.propTypes = {
  className: PropTypes.string,
};

export default Newsletter;
