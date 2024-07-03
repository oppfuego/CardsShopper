import FrameComponent from "../components/FrameComponent";
import Featured from "../components/Featured";
import Brands from "../components/Brands";
import FooterDesktop from "../components/FooterDesktop";
import "./ProductListing.css";

const ProductListing = () => {
  return (
    <div className="product-listing">
      <FrameComponent
        headerContentFlexDirection="column"
        headerContentPadding="unset"
      />
      <section className="hero">
        <div className="hero-image-parent">
          <img
            className="hero-image-icon"
            loading="lazy"
            alt=""
            src="/frame-16@2x.png"
          />
          <h1 className="browse-through-our">Browse through our collection</h1>
          <div className="whether-youre-celebrating">
            Whether you're celebrating a birthday, expressing gratitude, or
            simply spreading joy, our curated selection of eGift cards offers
            something for everyone.
          </div>
        </div>
      </section>
      <Featured />
      <Brands />
      <FooterDesktop
        group="pending_I8:56735;4:21124"
        social3="/social-31@2x.png"
      />
    </div>
  );
};

export default ProductListing;
