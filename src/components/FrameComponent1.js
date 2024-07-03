import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "", yourCart, group5 }) => {
  return (
    <div className={`cart-header-parent ${className}`}>
      <div className="cart-header">
        <h1 className="your-cart">{yourCart}</h1>
        <div className="view-or-edit">
          View or edit your cart before checkout
        </div>
      </div>
      <div className="cart-items">
        <img className="cart-items-child" alt="" src={group5} />
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  yourCart: PropTypes.string,
  group5: PropTypes.string,
};

export default FrameComponent1;
