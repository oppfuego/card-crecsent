import { useMemo } from "react";
import PropTypes from "prop-types";
import "./PartnerLogoRows.css";

const PartnerLogoRows = ({
  className = "",
  pictureTargetwebp,
  target,
  pictureGuitarCenterwebp,
  guitarCenter,
  picture1800FlowersComwebp,
  flowerscom,
  propWidth,
  propWidth1,
  propWidth2,
}) => {
  const targetStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const guitarCenterStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const flowerscomStyle = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div className={`partner-logo-rows ${className}`}>
      <div className="link22">
        <div className="wrapper-picture-targetwebp1">
          <img
            className="picture-targetwebp1"
            loading="lazy"
            alt=""
            src={pictureTargetwebp}
          />
        </div>
        <div className="target1" style={targetStyle}>
          {target}
        </div>
      </div>
      <div className="link23">
        <div className="wrapper-picture-guitar-cente1">
          <img
            className="picture-guitar-centerwebp1"
            loading="lazy"
            alt=""
            src={pictureGuitarCenterwebp}
          />
        </div>
        <div className="guitar-center1" style={guitarCenterStyle}>
          {guitarCenter}
        </div>
      </div>
      <div className="link24">
        <div className="wrapper-picture-1-800-flower">
          <img
            className="picture-1-800-flowers-comwe"
            loading="lazy"
            alt=""
            src={picture1800FlowersComwebp}
          />
        </div>
        <div className="flowerscom" style={flowerscomStyle}>
          {flowerscom}
        </div>
      </div>
    </div>
  );
};

PartnerLogoRows.propTypes = {
  className: PropTypes.string,
  pictureTargetwebp: PropTypes.string,
  target: PropTypes.string,
  pictureGuitarCenterwebp: PropTypes.string,
  guitarCenter: PropTypes.string,
  picture1800FlowersComwebp: PropTypes.string,
  flowerscom: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propWidth2: PropTypes.any,
};

export default PartnerLogoRows;
