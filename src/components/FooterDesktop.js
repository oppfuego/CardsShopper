import PropTypes from "prop-types";
import "./FooterDesktop.css";
import {Link} from "react-router-dom";

const FooterDesktop = ({ className = "", group, social3 }) => {
  return (
    <section className={`footer-desktop ${className}`}>
      <div className="footer">
        <div className="motto"/>
        <div className="footer-top">
          <div className="footer-links">
            <div className="logo-parent">
              <img className="group-icon" loading="lazy" alt="" src="/group.svg"/>

              <div className="wisconsin-ave-suite">
                Find the Perfect Gift Card for you
              </div>
            </div>
            <div className="shop-parent">
              <b className="shop">Shop</b>
              <div className="footer-link-columns">
                <div className="product">Product</div>
                <div className="sale">Sale</div>
                <Link to="/policy">
                  <div className="return-policy">Return Policy</div>
                </Link>
                <div className="track-order">Track Order</div>
                <div className="complaints">Complaints</div>
              </div>
            </div>
            <div className="menufootervert4">
              <b className="company">Company</b>
              <div className="about-us-parent">
                <div className="about-us">About Us</div>
                <div className="careers">Careers</div>
                <div className="faqs">FAQs</div>
                <div className="teams">Teams</div>
                <div className="contact-us">Contact Us</div>
              </div>
            </div>
            <div className="button-parent">

              <button className="button1">
                <div className="get-started">Contact Us</div>
              </button>

              <button className="button1">
                <div className="get-started">Get started</div>
              </button>
            </div>
            <div className="social-icons-parent">
              <div className="social-icons">
                <img
                    className="social-icon"
                    loading="lazy"
                    alt=""
                    src="/social.svg"
                />
              </div>
              <img
                  className="social-icon1"
                  loading="lazy"
                  alt=""
                  src="/social-1.svg"
              />
              <img
                  className="social-icon2"
                  loading="lazy"
                  alt=""
                  src="/social-2.svg"
              />
              <div className="social-icons1">
                <img
                    className="social-icon3"
                    loading="lazy"
                    alt=""
                    src={social3}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrapper">
          <div className="copyright">
            <div className="all-rights-reserved">
              © 2024 All Rights Reserved
            </div>
          </div>
        </div>
        <hr className="divider"/>
        <div className="company-info">
          EtherFusion LLC<br/>
          License number: 2325896<br/>
          Sharjah Media City (Shams), Al Messaned, Al Bataeh, Sharjah, United Arab Emirates
        </div>
      </div>
    </section>
  );
};

FooterDesktop.propTypes = {
  className: PropTypes.string,
  group: PropTypes.string,
  social3: PropTypes.string,
};

export default FooterDesktop;
