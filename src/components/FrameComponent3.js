import CardItems from "./CardItems";
import CardItems1 from "./CardItems1";
import PropTypes from "prop-types";
import "./FrameComponent3.css";
import {Link} from "react-router-dom";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`trending-wrapper ${className}`}>
      <div className="trending">
        <div className="trending-title">
          <h1 className="trending-gift-cards">Trending Gift Cards</h1>
        </div>
        <div className="trending-card-grid">
          <Link to="/pdp">
            <CardItems
                mORRIGBCard="/mangogbcard@2x.png"
                text="Mango UK"
                text1="Gift Card"
                propLeft="0px"
                propTop="0px"
            />
          </Link>

          <Link to="/pdp">

          <CardItems
            mORRIGBCard="/columbiasportswear@2x.png"
            text="Columbia"
            text1="Subscription Cards"
            propLeft="460px"
            propTop="0px"
          />
            </Link>

          <Link to="/pdp">
          <CardItems
            mORRIGBCard="/amazon@2x.png"
            text="Amazon"
            text1="Online Store Vouchers"
            propLeft="920px"
            propTop="0px"
          />
            </Link>
          <Link to="/pdp">

          <CardItems1
            visaInternational="/bm@2x.png"
            text={`B & M`}
            text1="Gift Cards"
            propTop="0px"
            propWidth="420px"
            propLeft="1380px"
          />
            </Link>
          <Link to="/pdp">

          <CardItems1
            visaInternational="/mores-steakhouse@2x.png"
            text="Moe’s Steakhouse"
            text1="Gift Cards"
            propTop="420px"
            propWidth="420px"
            propLeft="0px"
          />
            </Link>
          <Link to="/pdp">

          <CardItems1
            visaInternational="/nike@2x.png"
            text="Nike"
            text1="Gift Card"
            propTop="420px"
            propWidth="420px"
            propLeft="460px"
          />
            </Link>
          <Link to="/pdp">

          <CardItems1
            visaInternational="/argosgbcard@2x.png"
            text="Argos"
            text1="Gift Card"
            propTop="420px"
            propWidth="420px"
            propLeft="920px"
          />
            </Link>
          <Link to="/pdp">

          <CardItems1
            visaInternational="/lyftuscard@2x.png"
            text="Lyft"
            text1="Discount Cards"
            propTop="420px"
            propWidth="426px"
            propLeft="1380px"
          />
            </Link>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
