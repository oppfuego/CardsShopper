import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`offer-container-wrapper ${className}`}>
      <div className="offer-container">
        <img
          className="offer-container-child"
          loading="lazy"
          alt=""
          src="/group-1200.svg"
        />
        <img
          className="offer-container-item"
          loading="lazy"
          alt=""
          src="/group-1201.svg"
        />
        <div className="offer-content">
          <div className="offer-content-child" />
          <div className="offer-title">
            <h1 className="up-to-60-container">
              <span>{`Up To `}</span>
              <span className="span">60%</span>
              <span> off on brands</span>
            </h1>
          </div>
          <div className="frame-group">
            <div className="rectangle-parent">
              <div className="frame-child" />
              <img
                className="image-7-icon"
                loading="lazy"
                alt=""
                src="/image-7@2x.png"
              />
            </div>
            <div className="rectangle-group">
              <div className="frame-item" />
              <img
                className="image-18-icon"
                loading="lazy"
                alt=""
                src="/image-18@2x.png"
              />
            </div>
            <div className="rectangle-container">
              <div className="frame-inner" />
              <img
                className="image-19-icon"
                loading="lazy"
                alt=""
                src="/image-19@2x.png"
              />
            </div>
            <div className="offer-image-placeholder" />
            <img
              className="image-20-icon"
              loading="lazy"
              alt=""
              src="/image-20@2x.png"
            />
            <div className="group-div">
              <div className="rectangle-div" />
              <img
                className="image-21-icon"
                loading="lazy"
                alt=""
                src="/image-21@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
