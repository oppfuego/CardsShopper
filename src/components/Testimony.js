import PropTypes from "prop-types";
import "./Testimony.css";

const Testimony = ({ className = "" }) => {
  return (
    <section className={`testimony ${className}`}>
      <div className="testimonial-container">
        <div className="testimonial-title">
          <h1 className="hear-it-directly">
            Hear It Directly from Our Clients
          </h1>
          <div className="testimonial-subtitle">
            <h3 className="where-client-reviews">
              {" "}
              Where Client Reviews Speak Louder Than Words!
            </h3>
          </div>
        </div>
      </div>
      <div className="testimonial-content">
        <img
          className="testimonial-image-icon"
          loading="lazy"
          alt=""
          src="/rectangle-764@2x.png"
        />
        <div className="we-recently-had-the-pleasure-o-parent">
          <div className="we-recently-had">
            We recently had the pleasure of indulging in a shopping spree at
            CardsShopper and we couldn't be more thrilled to share our
            experience! From start to finish, every aspect of our transaction
            was nothing short of exceptional. I recently had the pleasure of
            indulging in an unparalleled shopping experience...
          </div>
          <div className="testimonial-author">
            <div className="testimonial-author-info">
              <h1 className="bruce-payne">Bruce Payne</h1>
              <div className="lawyer">Lawyer</div>
            </div>
            <img
              className="arrow-icon"
              loading="lazy"
              alt=""
              src="/arrow.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Testimony.propTypes = {
  className: PropTypes.string,
};

export default Testimony;
