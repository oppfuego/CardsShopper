import PropTypes from "prop-types";
import "./VoucherDetails.css";

const VoucherDetails = ({ className = "", aboutThisGiftVoucher }) => {
  return (
    <div className={`voucher-details ${className}`}>
      <div className="about-this-gift">{aboutThisGiftVoucher}</div>
      <div className="voucher-icons">
        <img className="icon-set" alt="" src="/icon-set.svg" />
      </div>
    </div>
  );
};

VoucherDetails.propTypes = {
  className: PropTypes.string,
  aboutThisGiftVoucher: PropTypes.string,
};

export default VoucherDetails;
