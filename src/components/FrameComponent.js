import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";
import {Link} from "react-router-dom";

const FrameComponent = ({
  className = "",
  headerContentFlexDirection,
  headerContentPadding,
}) => {
  const frameSectionStyle = useMemo(() => {
    return {
      flexDirection: headerContentFlexDirection,
      padding: headerContentPadding,
    };
  }, [headerContentFlexDirection, headerContentPadding]);

  return (
    <section
      className={`header-wrapper ${className}`}
      style={frameSectionStyle}
    >
      <header className="header">
        <div className="header-content">

          <Link to="/">
            <img className="group-icon" loading="lazy" alt="" src="/group.svg"/>

          </Link>
          <nav className="navigation-links-parent">
            <div className="navigation-links">
              <Link to="/">
                <h3 className="home">Home</h3>
              </Link>
            </div>
            <div className="navigation-links1">
              <h3 className="brands">Brands</h3>
            </div>
            <div className="navigation-links2">
              <h3 className="offers">Offers</h3>
            </div>
            <div className="navigation-links3">
              <h3 className="contact">Contact</h3>
            </div>
            <div className="navigation-links4">
              <Link to="/sign-up">
                <h3 className="sign-up">Sign Up</h3>

              </Link>
            </div>
          </nav>
        </div>
      </header>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  headerContentFlexDirection: PropTypes.any,
  headerContentPadding: PropTypes.any,
};

export default FrameComponent;
