import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CardItems.css";

const CardItems = ({
  className = "",
  mORRIGBCard,
  text,
  text1,
  propLeft,
  propTop,
}) => {
  const cardItemsStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={`card-items ${className}`} style={cardItemsStyle}>
      <img
        className="morri-gb-card-icon"
        loading="lazy"
        alt=""
        src={mORRIGBCard}
      />
      <div className="content">
        <div className="card-body">
          <div className="card-title">
            <div className="text">{text}</div>
            <div className="text1">{text1}</div>
          </div>
          <div className="card-subtitle">
            <div className="text2">Sub Title</div>
          </div>
        </div>
        <div className="list-group">
          <div className="componentslist-group-item">
            <div className="content1">
              <div className="text3">1st list item</div>
              <div className="min-width-change-size-here">
                <div className="ignore" />
                <div className="ignore1" />
              </div>
            </div>
          </div>
          <div className="componentslist-group-item1">
            <div className="content2">
              <div className="text4">2nd list item</div>
              <div className="min-width-change-size-here1">
                <div className="ignore2" />
                <div className="ignore3" />
              </div>
            </div>
          </div>
        </div>
        <div className="card-body1">
          <div className="layout-blockshorizontal2">
            <div className="texttext">
              <div className="text5">Card link</div>
            </div>
            <div className="texttext1">
              <div className="text6">Another link</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardItems.propTypes = {
  className: PropTypes.string,
  mORRIGBCard: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default CardItems;
