import PropTypes from "prop-types";
import "./BackgroundBorderShadow2.css";

const BackgroundBorderShadow2 = ({ className = "", linkDMvvTa7TNormaljpg }) => {
  return (
    <div className={`backgroundbordershadow ${className}`}>
      <div className="frame-parent12">
        <div className="card-images-parent">
          <div className="card-images">
            <img
              className="link-dmvvta7t-normaljpg"
              loading="lazy"
              alt=""
              src={linkDMvvTa7TNormaljpg}
            />
            <div className="card-names-container">
              <b className="link-eclipsy">Sarah M.</b>
              <div className="eclipsygaming1">@EclipsyGaming1</div>
            </div>
          </div>
          <img className="link-x-logosvg" alt="" src="/link--xlogosvg.svg" />
        </div>
        <div className="i-love-how">{`I love how CardCrescent has such a wide variety of gift cards to choose from. I found the perfect gift card for my sister’s birthday, and the whole process was so quick and easy. `}</div>
      </div>
    </div>
  );
};

BackgroundBorderShadow2.propTypes = {
  className: PropTypes.string,
  linkDMvvTa7TNormaljpg: PropTypes.string,
};

export default BackgroundBorderShadow2;
