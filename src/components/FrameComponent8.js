import HeaderDesktop from "./HeaderDesktop";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import "./FrameComponent8.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section className={`header-desktop-group ${className}`}>
      <HeaderDesktop />
      <FrameComponent1 yourCart="Checkout" group5="/group-5@2x.png" />
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
