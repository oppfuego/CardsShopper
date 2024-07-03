import PopularCardNames from "./PopularCardNames";
import FooterDesktop from "./FooterDesktop";
import PropTypes from "prop-types";
import "./Popular.css";

const Popular = ({ className = "" }) => {
  return (
    <section className={`popular ${className}`}>
      <div className="popular-title">
        <h1 className="most-popular-giftcards11">Most Popular Giftcards</h1>
        <div className="popular-cards1">
          <PopularCardNames sWARCard="/swarcard@2x.png" />
          <PopularCardNames sWARCard="/twitchatcard@2x.png" />
          <PopularCardNames sWARCard="/phpc7v4wi-u9qysa@2x.png" />
          <PopularCardNames sWARCard="/phpweyzt4-nxwfxd@2x.png" />
        </div>
      </div>
      <FooterDesktop
        group="pending_I8:56800;4:21124"
        social3="/social-32@2x.png"
      />
    </section>
  );
};

Popular.propTypes = {
  className: PropTypes.string,
};

export default Popular;
