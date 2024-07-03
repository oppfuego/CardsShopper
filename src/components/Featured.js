import PropTypes from "prop-types";
import "./Featured.css";

const Featured = ({ className = "" }) => {
  return (
    <section className={`featured ${className}`}>
      <div className="featured-grid">
        <div className="ihop-card">
          <div className="ihop-card-title">
            <div className="sort-2">
              <div className="find">Find</div>
              <div className="form-field">
                <input
                  className="form-label"
                  placeholder="Search"
                  type="text"
                />
                <img className="icon" alt="" src="/icon.svg" />
              </div>
            </div>
            <div className="sort-1">
              <a className="sort-by">{`Sort by `}</a>
              <div className="form-field1">
                <div className="form-label1">Latest</div>
                <img className="icon1" alt="" src="/icon-1.svg" />
              </div>
            </div>
            <div className="sort-3">
              <div className="explore-our-gift">Explore Our Gift Cards</div>
              <div className="form-field2">
                <div className="form-label2">Select by Brands</div>
                <img className="icon2" alt="" src="/icon-1.svg" />
              </div>
            </div>
          </div>
          <div className="find-filter">
            <img
              className="find-filter-child"
              loading="lazy"
              alt=""
              src="/group-8796.svg"
            />
            <div className="clear-all-filters">Clear All Filters</div>
          </div>
        </div>
        <div className="amazon-card">
          <div className="amazon-content">
            <img
              className="amazon-icon"
              loading="lazy"
              alt=""
              src="/amazon1@2x.png"
            />
            <div className="amazon-popularity">
              <div className="most-popular-giftcards">
                Most Popular Giftcards
              </div>
              <h3 className="upto-10-off">Upto 10% OFF</h3>
            </div>
          </div>
          <div className="m-o-r-r-i-g-bcard">
            <img
              className="costa-card-icon"
              loading="lazy"
              alt=""
              src="/costacard@2x.png"
            />
            <div className="m-o-r-r-i-g-bcard-info">
              <div className="most-popular-giftcards1">
                Most Popular Giftcards
              </div>
              <h3 className="upto-10-off1">Upto 10% OFF</h3>
            </div>
          </div>
          <div className="c-o-s-t-a-card">
            <img
              className="lowes-icon"
              loading="lazy"
              alt=""
              src="/lowes@2x.png"
            />
            <div className="c-o-s-t-a-card-info">
              <div className="most-popular-giftcards2">
                Most Popular Giftcards
              </div>
              <h3 className="upto-10-off2">Upto 10% OFF</h3>
            </div>
          </div>
          <div className="lowes-card">
            <img
              className="ihop-icon"
              loading="lazy"
              alt=""
              src="/ihop1@2x.png"
            />
            <div className="lowes-card-info">
              <div className="most-popular-giftcards3">
                Most Popular Giftcards
              </div>
              <h3 className="upto-10-off3">Upto 10% OFF</h3>
            </div>
          </div>
        </div>
        <div className="amazon-card1">
          <div className="morri-gb-card-parent">
            <img
              className="morri-gb-card-icon1"
              loading="lazy"
              alt=""
              src="/morrigbcard1@2x.png"
            />
            <div className="most-popular-giftcards-parent">
              <div className="most-popular-giftcards4">
                Most Popular Giftcards
              </div>
              <h3 className="upto-10-off4">Upto 10% OFF</h3>
            </div>
          </div>
          <div className="mores-steakhouse-parent">
            <img
              className="mores-steakhouse-icon"
              loading="lazy"
              alt=""
              src="/mores-steakhouse1@2x.png"
            />
            <div className="most-popular-giftcards-group">
              <div className="most-popular-giftcards5">
                Most Popular Giftcards
              </div>
              <h3 className="upto-10-off5">Upto 10% OFF</h3>
            </div>
          </div>
          <div className="lyft-us-card-parent">
            <img
              className="lyft-us-card-icon"
              loading="lazy"
              alt=""
              src="/lyftuscard@2x.png"
            />
            <div className="most-popular-giftcards-container">
              <div className="most-popular-giftcards6">
                Most Popular Giftcards
              </div>
              <h3 className="upto-10-off6">Upto 10% OFF</h3>
            </div>
          </div>
          <div className="all-bar-one-parent">
            <img
              className="all-bar-one"
              loading="lazy"
              alt=""
              src="/all-bar-one1@2x.png"
            />
            <div className="frame-div">
              <div className="most-popular-giftcards7">
                Most Popular Giftcards
              </div>
              <h3 className="upto-10-off7">Upto 10% OFF</h3>
            </div>
          </div>
        </div>
        <div className="gift-card-grid">
          <div className="nike-card">
            <img
              className="nike-gb-card-icon"
              loading="lazy"
              alt=""
              src="/nikegbcard1@2x.png"
            />
            <div className="nike-info">
              <div className="most-popular-giftcards8">
                Most Popular Giftcards
              </div>
              <h3 className="upto-10-off8">Upto 10% OFF</h3>
            </div>
          </div>
          <div className="adidas-card">
            <div className="card-design-adidas">
              <div className="adidas-image" />
              <div className="adidas-price">
                <img
                  className="image-1-icon"
                  loading="lazy"
                  alt=""
                  src="/image-1@2x.png"
                />
              </div>
              <div className="usd-100-1000">USD $100 -$1000</div>
            </div>
            <div className="adidas-details">
              <div className="most-popular-giftcards9">
                Most Popular Giftcards
              </div>
              <h3 className="upto-10-off9">Upto 10% OFF</h3>
            </div>
          </div>
          <img
            className="kroger-us-card-icon"
            loading="lazy"
            alt=""
            src="/krogeruscard1@2x.png"
          />
          <img
            className="jlseg-gb-card-icon"
            loading="lazy"
            alt=""
            src="/jlseggbcard@2x.png"
          />
        </div>
        <div className="pagination-container">
          <div className="pagination">
            <img
              className="pagination-block-icon"
              loading="lazy"
              alt=""
              src="/pagination-block.svg"
            />
            <div className="pagination-block">
              <div className="page-buttons" />
              <div className="page-numbers">1</div>
            </div>
            <div className="pagination-block1">
              <div className="pagination-block-child" />
              <div className="div1">2</div>
            </div>
            <div className="pagination-block2">
              <div className="pagination-block-item" />
              <div className="div2">3</div>
            </div>
            <img
              className="pagination-block-icon1"
              loading="lazy"
              alt=""
              src="/pagination-block-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Featured.propTypes = {
  className: PropTypes.string,
};

export default Featured;
