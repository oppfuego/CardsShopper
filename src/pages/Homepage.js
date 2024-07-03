import FrameComponent from "../components/FrameComponent";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import Testimony from "../components/Testimony";
import Newsletter from "../components/Newsletter";
import FooterDesktop from "../components/FooterDesktop";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <img className="hero-1-icon" alt="" src="/hero-1@2x.png" />
      <FrameComponent />
      <FrameComponent2 />
      <FrameComponent3 />
      <FrameComponent4 />
      <Testimony />
      <Newsletter />
      <FooterDesktop group="/group-1.svg" social3="/social-3@2x.png" />
    </div>
  );
};

export default Homepage;
