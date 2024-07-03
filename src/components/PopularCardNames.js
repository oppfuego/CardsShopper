import PropTypes from "prop-types";
import "./PopularCardNames.css";

const PopularCardNames = ({ className = "", sWARCard }) => {
  return (
    <div className={`popular-card-names ${className}`}>
      <img className="swar-card-icon" loading="lazy" alt="" src={sWARCard} />
      <div className="popular-card-labels">
        <div className="most-popular-giftcards10">Most Popular Giftcards</div>
        <div className="upto-10-off10">Upto 10% OFF</div>
      </div>
    </div>
  );
};

PopularCardNames.propTypes = {
  className: PropTypes.string,
  sWARCard: PropTypes.string,
};

export default PopularCardNames;
