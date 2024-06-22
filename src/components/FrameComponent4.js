import PropTypes from "prop-types";
import "./FrameComponent4.css";
import { IoIosArrowForward } from "react-icons/io";


const FrameComponent4 = ({
  className = "",
  linkHeading2ECommerceGift,
  discoverAVersatileSelecti,
}) => {
  return (
    <div className={`frame-parent11 ${className}`}>
      <div className="link-heading-2-e-commerce-parent">
        <h1 className="link-heading">{linkHeading2ECommerceGift}</h1>
        <div className="discover-a-versatile">{discoverAVersatileSelecti}</div>
      </div>
      <div className="link-button">
        <div className="show-all">{`show all `}</div>
        <div className="symbol-container">
          <a
            className="symbol23"
            href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
            target="_blank"
          >
            <IoIosArrowForward />
          </a>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
  linkHeading2ECommerceGift: PropTypes.string,
  discoverAVersatileSelecti: PropTypes.string,
};

export default FrameComponent4;
