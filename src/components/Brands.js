import PropTypes from "prop-types";
import "./Brands.css";

const Brands = ({ className = "" }) => {
  return (
    <section className={`brands1 ${className}`}>
      <h1 className="explore-brands">Explore Brands</h1>
      <div className="brand-logos">
        <img
          className="card-design-fenty"
          loading="lazy"
          alt=""
          src="/card-design-fenty@2x.png"
        />
        <div className="card-design-rolex">
          <div className="logo-containers" />
          <img
            className="image-1-icon1"
            loading="lazy"
            alt=""
            src="/image-1-1@2x.png"
          />
        </div>
        <div className="card-design-adidas1">
          <div className="card-design-adidas-child" />
          <img
            className="image-1-icon2"
            loading="lazy"
            alt=""
            src="/image-1-2@2x.png"
          />
        </div>
        <div className="card-design-nike">
          <div className="card-design-nike-child" />
          <img
            className="image-1-icon3"
            loading="lazy"
            alt=""
            src="/image-1-3@2x.png"
          />
        </div>
        <img
          className="card-design-fenty1"
          loading="lazy"
          alt=""
          src="/card-design-fenty@2x.png"
        />
        <div className="card-design-rolex1">
          <div className="card-design-rolex-child" />
          <img
            className="image-1-icon4"
            loading="lazy"
            alt=""
            src="/image-1-1@2x.png"
          />
        </div>
        <div className="card-design-adidas2">
          <div className="card-design-adidas-item" />
          <img
            className="image-1-icon5"
            loading="lazy"
            alt=""
            src="/image-1-2@2x.png"
          />
        </div>
        <div className="card-design-nike1">
          <div className="card-design-nike-item" />
          <img className="image-1-icon6" alt="" src="/image-1-3@2x.png" />
        </div>
        <img
          className="card-design-fenty2"
          loading="lazy"
          alt=""
          src="/card-design-fenty@2x.png"
        />
        <div className="card-design-rolex2">
          <div className="card-design-rolex-item" />
          <img className="image-1-icon7" alt="" src="/image-1-1@2x.png" />
        </div>
        <img
          className="card-design-fenty3"
          loading="lazy"
          alt=""
          src="/card-design-fenty@2x.png"
        />
      </div>
    </section>
  );
};

Brands.propTypes = {
  className: PropTypes.string,
};

export default Brands;
