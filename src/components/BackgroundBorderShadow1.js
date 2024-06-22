import PropTypes from "prop-types";
import "./BackgroundBorderShadow1.css";

const BackgroundBorderShadow1 = ({ className = "", linkJupSfOIBNormaljpg }) => {
  return (
    <div className={`backgroundbordershadow1 ${className}`}>
      <div className="container2" />
      <div className="frame-parent13">
        <div className="frame-parent14">
          <div className="link-jupsfoib-normaljpg-parent">
            <img
              className="link-jupsfoib-normaljpg"
              loading="lazy"
              alt=""
              src={linkJupSfOIBNormaljpg}
            />
            <div className="link-bizsol-parent">
              <b className="link-bizsol">John D.</b>
              <div className="coinconfess">@coinconfess</div>
            </div>
          </div>
          <img className="link-x-logosvg1" alt="" src="/link--xlogosvg-1.svg" />
        </div>
        <div className="buying-a-gift">
          Buying a gift card through CardCrescent was incredibly convenient. I
          especially appreciated the instant delivery option. It made sending a
          thank-you gift to my colleague so easy and hassle-free.
        </div>
      </div>
    </div>
  );
};

BackgroundBorderShadow1.propTypes = {
  className: PropTypes.string,
  linkJupSfOIBNormaljpg: PropTypes.string,
};

export default BackgroundBorderShadow1;
