import GiftCardRows from "./GiftCardRows";
import CheckoutDetails from "./CheckoutDetails";
import PropTypes from "prop-types";
import "./GiftCardsContent.css";

const GiftCardsContent = ({ className = "" }) => {
  return (
    <div className={`gift-cards-content ${className}`}>
      <div className="gift-card-types">
        <div className="product-table">
          <div className="header2">
            <div className="header-child" />
            <div className="product-header">
              <div className="product1">Product</div>
            </div>
            <div className="price-quantity-header">
              <div className="price">Price</div>
              <div className="quantity1">Quantity</div>
            </div>
            <div className="total">Total</div>
          </div>
          <div className="product-row">
            <img
              className="php4uadhq-wgzvqz-icon"
              loading="lazy"
              alt=""
              src="/php4uadhq-wgzvqz@2x.png"
            />
            <div className="product-info">
              <div className="uber-eats50-off">Uber Eats50% OFF Gift Card</div>
              <div className="discount-20-off">Discount: 20% OFF</div>
            </div>
            <div className="product-price">
              <div className="product-currency">$120.00</div>
              <a className="credits1">12 Credits</a>
            </div>
            <div className="product-actions">
              <div className="quantity-controls1">
                <div className="increment-control">
                  <img
                    className="icon-plus1"
                    loading="lazy"
                    alt=""
                    src="/iconplus.svg"
                  />
                </div>
                <div className="quantity-value">3</div>
                <div className="decrement-control">
                  <img
                    className="icon-minus1"
                    loading="lazy"
                    alt=""
                    src="/iconminus.svg"
                  />
                </div>
              </div>
              <div className="quantity-controls2">
                <div className="hourly1">Hourly</div>
                <div className="quantity-display-wrapper">
                  <img
                    className="quantity-display-icon"
                    alt=""
                    src="/quantity-display.svg"
                  />
                </div>
              </div>
            </div>
            <div className="product-separator">$120.00</div>
          </div>
        </div>
        <GiftCardRows
          sWARCard="/swarcard1@2x.png"
          swarovskiGiftCard="Swarovski Gift Card"
        />
        <GiftCardRows
          sWARCard="/zooplsatcard@2x.png"
          swarovskiGiftCard="zooplus GiftCard"
        />
        <div className="checkout-actions">
          <div className="action-divider" />
          <div className="action-buttons">
            <button className="button4">
              <img className="tag-icon2" alt="" src="/tag-icon.svg" />
              <div className="button5">Go Back</div>
              <img className="tag-icon3" alt="" src="/tag-icon.svg" />
            </button>
            <button className="button6">
              <img className="tag-icon4" alt="" src="/tag-icon.svg" />
              <div className="button7">Checkout</div>
              <img className="tag-icon5" alt="" src="/tag-icon.svg" />
            </button>
          </div>
        </div>
      </div>
      <CheckoutDetails />
    </div>
  );
};

GiftCardsContent.propTypes = {
  className: PropTypes.string,
};

export default GiftCardsContent;
