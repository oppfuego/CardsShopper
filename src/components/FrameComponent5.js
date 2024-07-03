import FrameComponent from "./FrameComponent";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`header-desktop-parent ${className}`}>
      <FrameComponent
        headerContentFlexDirection="column"
        headerContentPadding="unset"
      />
      <FrameComponent1 yourCart="Your Cart" group5="/group-5@2x.png" />
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
