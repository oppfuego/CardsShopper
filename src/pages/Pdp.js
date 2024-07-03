import HeaderDesktop from "../components/HeaderDesktop";
import Content from "../components/Content";
import Popular from "../components/Popular";
import FooterDesktop from "../components/FooterDesktop";
import "./Pdp.css";

const Pdp = () => {
  return (
    <div className="pdp">
      <HeaderDesktop />
      <Content />
      <Popular />
    </div>
  );
};

export default Pdp;
