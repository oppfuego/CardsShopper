import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FooterDesktop from "../components/FooterDesktop";
import "./CheckoutCart1.css";

const CheckoutCart1 = () => {
  return (
    <div className="checkout-cart1">
      <FrameComponent8 />
      <section className="checkout-cart-inner">
        <form className="frame-parent">
          <FrameComponent7 />
          <FrameComponent6 />
        </form>
      </section>
      <FooterDesktop
        group="pending_I8:57012;4:21124"
        social3="/social-33@2x.png"
      />
    </div>
  );
};

export default CheckoutCart1;
