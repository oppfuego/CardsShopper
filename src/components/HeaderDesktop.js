import PropTypes from "prop-types";
import "./HeaderDesktop.css";
import {Link} from "react-router-dom";

const HeaderDesktop = ({ className = "" }) => {
  return (
    <header className={`header-desktop ${className}`}>
      <div className="header1">
        <div className="group-parent">
            <Link to="/">
              <img className="group-icon2" loading="lazy" alt="" src="/group.svg"/>
            </Link>
          <div className="navigation">
            <div className="nav-items">
              <Link to="/">
                <div className="home1">Home</div>

              </Link>
            </div>
            <div className="nav-items1">
              <div className="brands2">Brands</div>
            </div>
            <div className="nav-items2">
              <div className="offers1">Offers</div>
            </div>
            <div className="nav-items3">
              <div className="contact1">Contact</div>
            </div>
            <div className="nav-items4">
              <Link to="/sign-up">
                <div className="sign-up1">Sign Up</div>

              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

HeaderDesktop.propTypes = {
  className: PropTypes.string,
};

export default HeaderDesktop;
