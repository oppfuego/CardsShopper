import PropTypes from "prop-types";
import "./InfoCollection.css";

const InfoCollection = ({
  className = "",
  informationWeCollect,
  personalInformation,
  weMayCollectPersonalInfor,
  usageInformation,
  weAutomaticallyCollectInf,
}) => {
  return (
    <div className={`info-collection ${className}`}>
      <h1 className="information-we-collect-container">
        <ol className="information-we-collect">
          <li>{informationWeCollect}</li>
        </ol>
      </h1>
      <div className="info-types">
        <div className="type-info">
          <div className="personal-information">{personalInformation}</div>
          <div className="we-may-collect">{weMayCollectPersonalInfor}</div>
        </div>
        <div className="type-info1">
          <div className="usage-information">{usageInformation}</div>
          <div className="we-automatically-collect">
            {weAutomaticallyCollectInf}
          </div>
        </div>
      </div>
    </div>
  );
};

InfoCollection.propTypes = {
  className: PropTypes.string,
  informationWeCollect: PropTypes.string,
  personalInformation: PropTypes.string,
  weMayCollectPersonalInfor: PropTypes.string,
  usageInformation: PropTypes.string,
  weAutomaticallyCollectInf: PropTypes.string,
};

export default InfoCollection;
