import CardItems from "./CardItems";
import CardItems1 from "./CardItems1";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`main-content-wrapper ${className}`}>
      <div className="main-content">
        <div className="search-container-wrapper">
          <div className="search-container">
            <b className="find-the-gift">
              Find the Gift Card that you’re looking for
            </b>
            <div className="search-bar">
              <div className="search-inputs">
                <div className="search-icon-field">
                  <img
                    className="akar-iconssearch"
                    loading="lazy"
                    alt=""
                    src="/akariconssearch.svg"
                  />
                  <div className="search-destinations-hotels">
                    Search Gift Cards here
                  </div>
                </div>
                <div className="search-input-fields">
                  <img
                    className="sliders-icon"
                    loading="lazy"
                    alt=""
                    src="/sliders.svg"
                  />
                  <h3 className="check-in">Category</h3>
                </div>
                <div className="search-input-fields1">
                  <img
                    className="sliders-icon1"
                    loading="lazy"
                    alt=""
                    src="/sliders-1.svg"
                  />
                  <h3 className="check-in1">Brands</h3>
                </div>
                <div className="search-input-fields2">
                  <div className="div">$10 - $100</div>
                </div>
                <button className="search-button">
                  <div className="search-wrapper">
                    <div className="search">Search</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="popular-cards-title-parent">
          <div className="popular-cards-title">
            <h1 className="popular-cards">Popular Cards</h1>
          </div>
          <div className="card-grid">
            <CardItems
              mORRIGBCard="/morrigbcard@2x.png"
              text="Morrisons"
              text1="1x Dinner Card"
            />
            <CardItems
              mORRIGBCard="/nikegbcard@2x.png"
              text="Nike"
              text1="Nike Store Card"
              propLeft="460px"
              propTop="0px"
            />
            <CardItems
              mORRIGBCard="/all-bar-one@2x.png"
              text="All Bar One"
              text1="Gift Cards"
              propLeft="920px"
              propTop="0px"
            />
            <CardItems
              mORRIGBCard="/ihop@2x.png"
              text="iHop"
              text1="E-Voucher"
              propLeft="1380px"
              propTop="0px"
            />
            <CardItems
              mORRIGBCard="/nintendo-eshop@2x.png"
              text="Nintendo eShop"
              text1="Discount Cards for eshop"
              propLeft="0px"
              propTop="420px"
            />
            <CardItems
              mORRIGBCard="/krogeruscard@2x.png"
              text="Kroger"
              text1="Store Voucher"
              propLeft="460px"
              propTop="420px"
            />
            <CardItems
              mORRIGBCard="/husslegbcard@2x.png"
              text="Hussle UK"
              text1="Gift Cards"
              propLeft="920px"
              propTop="420px"
            />
            <CardItems1
              visaInternational="/visa-international.svg"
              text="Visa"
              text1="Virtual Currency Card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
