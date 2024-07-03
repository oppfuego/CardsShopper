import FrameComponent2 from "../components/FrameComponent2";
import FooterDesktop from "../components/FooterDesktop";
import "./UserDashboard.css";

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <FrameComponent2 />
      <FrameComponent2 />
      <FooterDesktop
        group="pending_I8:57089;4:21124"
        social3="/social-32@2x.png"
      />
    </div>
  );
};

export default UserDashboard;
