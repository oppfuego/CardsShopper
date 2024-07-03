import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent21.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`account-details-wrapper ${className}`}>
      <div className="account-details">
        <div className="account-info">
          <h2 className="user-account">User Account</h2>
          <TextField
            className="header1"
            placeholder="Your Active Downloads"
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#c2b7ee",
                borderRadius: "5px",
                fontSize: "18px",
              },
              "& .MuiInputBase-input": { color: "#545454" },
            }}
          />
          <div className="download-card">
            <img
              className="card-design-fenty"
              loading="lazy"
              alt=""
              src="/card-design-fenty@2x.png"
            />
            <div className="card-details">
              <div className="card-title">
                <div className="fenty-beauty-50">
                  Fenty Beauty 50% OFF Gift Card
                </div>
                <div className="discount-20-off">Discount: 20% OFF</div>
              </div>
              <div className="credits-value-parent">
                <div className="credits-value">$120.00</div>
                <div className="credits">12 Credits</div>
              </div>
            </div>
            <div className="up-time-parent">
              <div className="up-time">Up Time</div>
              <div className="hrs">120 Hrs</div>
            </div>
            <div className="card-actions">
              <img
                className="icons-block"
                loading="lazy"
                alt=""
                src="/icons-block.svg"
              />
              <div className="renewal-date-parent">
                <div className="renewal-date">
                  <div className="renewal-label">
                    <div className="next-renewal">Next Renewal</div>
                    <div className="april-2024">24 April, 2024</div>
                  </div>
                </div>
                <div className="cancel-action">
                  <div className="cancel-button">
                    <div className="cancel">Cancel</div>
                  </div>
                  <div className="renew-action">
                    <img
                      className="icons-block1"
                      alt=""
                      src="/icons-block-1.svg"
                    />
                    <div className="renew-button">
                      <div className="renew">Renew</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="account-info-child" />
        </div>
        <div className="checkout-details">
          <TextField
            className="header2"
            placeholder="User Details"
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#c2b7ee",
                borderRadius: "5px",
                fontSize: "18px",
              },
              "& .MuiInputBase-input": { color: "#545454" },
            }}
          />
          <div className="user-details">
            <div className="user-information">
              <div className="user-name">
                <div className="name">Name</div>
                <div className="darnell-roob">Darnell Roob</div>
              </div>
              <div className="user-plan-details">
                <div className="plan-labels">
                  <div className="email-address">Email Address</div>
                  <div className="darnellroobhotmailcom">
                    Darnell.Roob@hotmail.com
                  </div>
                </div>
                <div className="plan-labels1">
                  <div className="plan">Plan</div>
                  <div className="basic">Basic</div>
                </div>
                <div className="plan-labels2">
                  <div className="expiry-date">Expiry Date</div>
                  <div className="april-20241">24 April, 2024</div>
                </div>
                <div className="plan-labels3">
                  <div className="auto-renewal">Auto Renewal</div>
                  <div className="on">On</div>
                </div>
              </div>
            </div>
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
