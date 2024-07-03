import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CardItems1.css";

const CardItems1 = ({
  className = "",
  visaInternational,
  text,
  text1,
  propTop,
  propWidth,
  propLeft,
}) => {
  const cardItems1Style = useMemo(() => {
    return {
      top: propTop,
      width: propWidth,
      left: propLeft,
    };
  }, [propTop, propWidth, propLeft]);

  return (
    <div className={`card-items1 ${className}`} style={cardItems1Style}>
      <img
        className="visa-international-icon"
        loading="lazy"
        alt=""
        src={visaInternational}
      />
      <div className="content3">
        <div className="card-body2">
          <div className="card-title1">
            <div className="text7">{text}</div>
            <div className="text8">{text1}</div>
          </div>
          <div className="card-subtitle1">
            <div className="text9">Sub Title</div>
          </div>
        </div>
        <div className="list-group1">
          <div className="componentslist-group-item2">
            <div className="content4">
              <div className="text10">1st list item</div>
              <div className="min-width-change-size-here2">
                <div className="ignore4" />
                <div className="ignore5" />
              </div>
            </div>
          </div>
          <div className="componentslist-group-item3">
            <div className="content5">
              <div className="text11">2nd list item</div>
              <div className="min-width-change-size-here3">
                <div className="ignore6" />
                <div className="ignore7" />
              </div>
            </div>
          </div>
        </div>
        <div className="card-body3">
          <div className="layout-blockshorizontal21">
            <div className="texttext2">
              <div className="text12">Card link</div>
            </div>
            <div className="texttext3">
              <div className="text13">Another link</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardItems1.propTypes = {
  className: PropTypes.string,
  visaInternational: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propWidth: PropTypes.any,
  propLeft: PropTypes.any,
};

export default CardItems1;
