import PropTypes from "prop-types";
import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <div className={`checkout-parent ${className}`}>
      <h2 className="checkout">Checkout</h2>
      <input className="header3" placeholder="Billing Details" type="text" />
      <div className="form-field-block">
        <div className="row-1">
          <div className="block-1">
            <input
              className="first-name"
              placeholder="First Name"
              type="text"
            />
          </div>
          <div className="block-2">
            <input className="last-name" placeholder="Last Name" type="text" />
          </div>
        </div>
        <div className="row-2">
          <div className="block-11">
            <input
              className="company-name"
              placeholder="Company Name"
              type="text"
            />
          </div>
          <div className="block-21">
            <div className="country">Country</div>
            <img className="icon3" alt="" src="/icon1.svg" />
          </div>
        </div>
        <div className="row-3">
          <div className="block-12">
            <input
              className="street-address"
              placeholder="Street Address"
              type="text"
            />
          </div>
        </div>
        <div className="block-22">
          <input
            className="apartment-suite"
            placeholder="Apartment / Suite / Unit / etc. (Optional)"
            type="text"
          />
        </div>
        <div className="row-4">
          <div className="block-13">
            <input
              className="town-city"
              placeholder="Town / City"
              type="text"
            />
          </div>
        </div>
        <div className="block-23">
          <input
            className="email-address"
            placeholder="Email Address"
            type="text"
          />
        </div>
        <div className="row-5">
          <div className="block-14">
            <input className="zip" placeholder="ZIP" type="text" />
          </div>
          <div className="block-24">
            <input className="phone" placeholder="Phone" type="text" />
          </div>
        </div>
      </div>
      <div className="form-divider" />
      <div className="button-group">
        <button className="button8">
          <img className="tag-icon6" alt="" src="/tag-icon.svg" />
          <div className="button9">Go Back</div>
          <img className="tag-icon7" alt="" src="/tag-icon.svg" />
        </button>
        <button className="button10">
          <img className="tag-icon8" alt="" src="/tag-icon.svg" />
          <div className="button11">Checkout</div>
          <img className="tag-icon9" alt="" src="/tag-icon.svg" />
        </button>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
