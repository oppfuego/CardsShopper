import FrameComponent5 from "../components/FrameComponent5";
import GiftCardsContent from "../components/GiftCardsContent";
import FooterDesktop from "../components/FooterDesktop";
import "./CheckoutCart.css";

const CheckoutCart = () => {
  return (
    <div className="checkout-cart">
      <FrameComponent5 />
      <section className="gift-cards-content-wrapper">
        <GiftCardsContent />
      </section>
      <FooterDesktop
        group="pending_I8:56909;4:21124"
        social3="/social-33@2x.png"
      />
    </div>
  );
};

export default CheckoutCart;
