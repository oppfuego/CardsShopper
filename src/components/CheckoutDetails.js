import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CheckoutDetails.css";

const CheckoutDetails = ({
  className = "",
  propWidth,
  propMinWidth,
  propAlignSelf,
}) => {
  const checkoutDetailsStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propMinWidth, propAlignSelf]);

  return (
    <div
      className={`checkout-details ${className}`}
      style={checkoutDetailsStyle}
    >
      <input
        className="checkout-header"
        placeholder="Checkout Details"
        type="text"
      />
      <div className="total-details">
        <div className="total-labels">
          <div className="cart-subtotal">Cart Subtotal</div>
          <div className="total-values">$360.00</div>
        </div>
      </div>
      <div className="tax-details">
        <div className="tax-labels">
          <div className="tax-types">
            <div className="shipping-handling">{`Shipping & Handling`}</div>
            <div className="other-taxes">Other Taxes</div>
          </div>
          <div className="tax-types1">
            <div className="div3">$0.00</div>
            <div className="div4">$0.00</div>
          </div>
        </div>
      </div>
      <div className="tax-divider">
        <div className="tax-divider-child" />
      </div>
      <div className="total-details1">
        <div className="grand-total-parent">
          <div className="grand-total">Grand Total</div>
          <div className="div5">$360.00</div>
        </div>
      </div>
    </div>
  );
};

CheckoutDetails.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default CheckoutDetails;
