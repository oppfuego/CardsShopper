import CheckoutDetails from "./CheckoutDetails";
import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div className={`checkout-details-parent ${className}`}>
      <CheckoutDetails
        propWidth="unset"
        propMinWidth="unset"
        propAlignSelf="stretch"
      />
      <div className="transfer-options">
        <input className="header4" placeholder="Transfer Options" type="text" />
        <div className="checkout-details1">
          <div className="logos-block">
            <div className="block-15">
              <div className="logo-block">
                <img
                  className="image-1-icon8"
                  loading="lazy"
                  alt=""
                  src="/image-11@2x.png"
                />
              </div>
              <div className="bank-transfer">
                <p className="bank">Bank</p>
                <p className="transfer">Transfer</p>
              </div>
            </div>
            <div className="block-25">
              <div className="logo-block1">
                <img
                  className="image-2-icon"
                  loading="lazy"
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
              <div className="google-pay">
                <p className="google">Google</p>
                <p className="pay">Pay</p>
              </div>
            </div>
            <div className="block-3">
              <div className="logo-block2">
                <img
                  className="image-3-icon"
                  loading="lazy"
                  alt=""
                  src="/image-3@2x.png"
                />
              </div>
              <div className="apple-pay">
                <p className="apple">Apple</p>
                <p className="pay1">Pay</p>
              </div>
            </div>
            <div className="block-4">
              <div className="logo-block3">
                <img
                  className="image-4-icon"
                  loading="lazy"
                  alt=""
                  src="/image-4@2x.png"
                />
              </div>
              <div className="paypal">PayPal</div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout1">
        <div className="header5">
          <div className="checkout2">Checkout</div>
        </div>
        <div className="checkout-details2">
          <div className="your-personal-data">
            Your Personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our product
          </div>
          <button className="button12">
            <img className="tag-icon10" alt="" src="/tag-icon.svg" />
            <div className="button13">Checkout</div>
            <img className="tag-icon11" alt="" src="/tag-icon.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
