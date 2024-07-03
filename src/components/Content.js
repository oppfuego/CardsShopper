import VoucherDetails from "./VoucherDetails";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content6 ${className}`}>
      <form className="frame-container">
        <div className="card-designshoes-parent">
          <div className="card-designshoes">
            <img
              className="product-image-icon"
              loading="lazy"
              alt=""
              src="/rectangle-50@2x.png"
            />
            <div className="product-title">
              <h1 className="shoes-wallets-container">
                <p className="shoes">{`Shoes &`}</p>
                <p className="wallets">Wallets</p>
              </h1>
            </div>
            <div className="usd-100-10001">USD $100 -$1000</div>
          </div>
          <div className="voucher-info">
            <VoucherDetails aboutThisGiftVoucher="About this Gift Voucher" />
            <VoucherDetails aboutThisGiftVoucher="How to Use" />
            <VoucherDetails aboutThisGiftVoucher="Brands Included In this Voucher" />
            <VoucherDetails aboutThisGiftVoucher={`Terms & Conditions`} />
            <div className="voucher-note">
              <div className="note">Note:</div>
              <div className="discover-the-perfect">{`Discover the perfect blend of style and utility with our Shoes & Wallet Gift Card. Whether it's stepping out in fashionable footwear or staying organized with a sleek wallet, this versatile gift card offers endless possibilities. Give the gift of choice and let your loved ones indulge in their favorite brands and styles.
`}</div>
            </div>
          </div>
        </div>
        <div className="gift-card">
          <div className="card-title2">
            <h2 className="shoes-wallet">{`Shoes & Wallet Gift Card`}</h2>
            <div className="introducing-the-shoes">{`Introducing the Shoes & Wallet Gift Card from WishDeck - the perfect pairing for those who appreciate both style and practicality. With this versatile eGift card, recipients can explore a wide array of footwear options to step out in fashion-forward confidence, while also browsing through a selection of sleek wallets to complement their everyday essentials.`}</div>
          </div>
          <div className="recipient">
            <div className="i-would-like">I would Like to:</div>
            <div className="recipient-options">
              <button className="recipient-buttons">
                <div className="gift-a-friend">Gift a Friend</div>
              </button>
              <button className="recipient-buttons1">
                <div className="gift-myself">Gift Myself</div>
              </button>
            </div>
          </div>
          <div className="amount">
            <div className="gift-card-worth">Gift Card Worth:</div>
            <div className="amount-options">
              <div className="amount-values">
                <div className="usd-200">USD $200</div>
              </div>
              <button className="amount-values1">
                <div className="usd-500">USD $500</div>
              </button>
              <div className="amount-values2">
                <div className="usd-700">USD $700</div>
              </div>
              <button className="amount-values3">
                <div className="usd-1000">USD $1000</div>
              </button>
            </div>
          </div>
          <div className="quantity">
            <div className="select-your-quantity">Select your Quantity</div>
            <div className="quantity-controls">
              <div className="add-button">
                <div className="add-button-child" />
                <img
                  className="add-icon"
                  loading="lazy"
                  alt=""
                  src="/add.svg"
                />
              </div>
              <div className="empty-quantity">
                <div className="empty-label">4</div>
              </div>
              <div className="add-button1">
                <div className="add-button-item" />
                <div className="add-icon-wrapper">
                  <img
                    className="add-icon1"
                    loading="lazy"
                    alt=""
                    src="/vector-600.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="button2">
            <img className="tag-icon" alt="" src="/tag-icon.svg" />
            <div className="button3">Add to Cart</div>
            <img className="tag-icon1" alt="" src="/tag-icon.svg" />
          </button>
        </div>
      </form>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
