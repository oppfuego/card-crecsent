import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent3 from "../components/FrameComponent3";
import Footer from "../components/Footer";
import "./Account.css";

const Account = () => {
  return (
    <div className="account-1920">
      <FrameComponent1
        yourCart="Welcome, Darnell"
        viewOrEditYourCartBeforeC="Your Personal Dashboard"
        cardCrescentDebugCommit="unset"
        cardDebugCommit="unset"
      />
      <FrameComponent3 />
      <Footer propHeight="574.6px" propPadding="0px 0px 72.8px" />
    </div>
  );
};

export default Account;
