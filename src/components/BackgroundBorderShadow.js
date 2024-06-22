import PropTypes from "prop-types";
import "./BackgroundBorderShadow.css";

const BackgroundBorderShadow = ({ className = "", linkCXvZrFe7Normaljpg }) => {
  return (
    <div className={`backgroundbordershadow2 ${className}`}>
      <div className="frame-parent15">
        <div className="frame-parent16">
          <div className="link-cxvzrfe7-normaljpg-parent">
            <img
              className="link-cxvzrfe7-normaljpg"
              loading="lazy"
              alt=""
              src={linkCXvZrFe7Normaljpg}
            />
            <div className="link-emre-james-parent">
              <b className="link-emre">Michael T.</b>
              <div className="cexar-208">@cexar_208</div>
            </div>
          </div>
          <img className="link-x-logosvg2" alt="" src="/link--xlogosvg-2.svg" />
        </div>
        <div className="i-found-cardcrescent">
          I found CardCrescent very user-friendly, and the delivery was prompt.
          My only suggestion would be to add more niche brands to the selection.
          Otherwise, a great experience!
        </div>
      </div>
    </div>
  );
};

BackgroundBorderShadow.propTypes = {
  className: PropTypes.string,
  linkCXvZrFe7Normaljpg: PropTypes.string,
};

export default BackgroundBorderShadow;
