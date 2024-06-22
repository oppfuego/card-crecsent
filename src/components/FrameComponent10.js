import Header from "./Header";
import PropTypes from "prop-types";
import "./FrameComponent10.css";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <section className={`header-wrapper ${className}`}>
      <Header />
    </section>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
