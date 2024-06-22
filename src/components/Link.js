import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link.css";

const Link = ({
  className = "",
  picturePagePluswebp,
  pagePlus,
  uSD9008000,
  propMinWidth,
  propDisplay,
  propMinWidth1,
}) => {
  const pagePlusStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const uSD900Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  return (
    <div className={`link12 ${className}`}>
      <div className="wrapper-picture-page-pluswe-parent">
        <div className="wrapper-picture-page-pluswe">
          <img
            className="picture-page-pluswebp"
            rows={6}
            cols={10}
            alt=""
            src={picturePagePluswebp}
          />
        </div>
        <b className="page-plus" style={pagePlusStyle}>
          {pagePlus}
        </b>
      </div>
      <div className="usd-900-" style={uSD900Style}>
        {uSD9008000}
      </div>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  picturePagePluswebp: PropTypes.string,
  pagePlus: PropTypes.string,
  uSD9008000: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Link;
