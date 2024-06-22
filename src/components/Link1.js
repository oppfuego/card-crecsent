import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link1.css";

const Link1 = ({
  className = "",
  pictureEBaywebp,
  eBay,
  uSD50050000,
  propBackgroundColor,
  propMinWidth,
  propDisplay,
  propMinWidth1,
}) => {
  const linkStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const eBayStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const uSD500Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  return (
    <div className={`link6 ${className}`} style={linkStyle}>
      <div className="wrapper-picture-ebaywebp">
        <img
          className="picture-ebaywebp"
          loading="lazy"
          alt=""
          src={pictureEBaywebp}
        />
      </div>
      <div className="ebay-wrapper">
        <b className="ebay" style={eBayStyle}>
          {eBay}
        </b>
      </div>
      <div className="usd-500-2" style={uSD500Style}>
        {uSD50050000}
      </div>
    </div>
  );
};

Link1.propTypes = {
  className: PropTypes.string,
  pictureEBaywebp: PropTypes.string,
  eBay: PropTypes.string,
  uSD50050000: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Link1;
