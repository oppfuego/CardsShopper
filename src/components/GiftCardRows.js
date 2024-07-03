import PropTypes from "prop-types";
import "./GiftCardRows.css";

const GiftCardRows = ({ className = "", sWARCard, swarovskiGiftCard }) => {
  return (
    <div className={`gift-card-rows ${className}`}>
      <div className="gift-card-dividers" />
      <div className="gift-card-names">
        <img className="swar-card-icon1" loading="lazy" alt="" src={sWARCard} />
        <div className="gift-card-descriptions">
          <div className="swarovski-gift-card">{swarovskiGiftCard}</div>
          <div className="worth-usd-400">Worth USD $400</div>
        </div>
        <div className="gift-card-credits">
          <div className="credit-symbols">$120.00</div>
          <div className="credits">12 Credits</div>
        </div>
        <div className="gift-card-actions">
          <div className="gift-card-quantity">
            <div className="quantity-buttons">
              <img
                className="icon-plus"
                loading="lazy"
                alt=""
                src="/iconplus.svg"
              />
            </div>
            <div className="quantity-dividers">3</div>
            <div className="decrement-buttons">
              <img
                className="icon-minus"
                loading="lazy"
                alt=""
                src="/iconminus.svg"
              />
            </div>
          </div>
          <div className="gift-card-durations">
            <div className="hourly">Hourly</div>
            <div className="duration-values">
              <img
                className="duration-units-icon"
                alt=""
                src="/quantity-display.svg"
              />
            </div>
          </div>
        </div>
        <div className="gift-card-separator">$120.00</div>
      </div>
    </div>
  );
};

GiftCardRows.propTypes = {
  className: PropTypes.string,
  sWARCard: PropTypes.string,
  swarovskiGiftCard: PropTypes.string,
};

export default GiftCardRows;
