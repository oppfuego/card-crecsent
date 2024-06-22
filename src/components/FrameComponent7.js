import PropTypes from "prop-types";
import "./FrameComponent7.css";

const FrameComponent7 = ({
  className = "",
  ourStory,
  cardCrescentWasFoundedWit,
  rectangle4554,
}) => {
  return (
    <section className={`about-us-child ${className}`}>
      <div className="frame-parent17">
        <div className="frame-wrapper1">
          <div className="our-story-parent">
            <h1 className="our-story">{ourStory}</h1>
            <div className="cardcrescent-was-founded">
              {cardCrescentWasFoundedWit}
            </div>
          </div>
        </div>
        <img className="frame-item" loading="lazy" alt="" src={rectangle4554} />
      </div>
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
  ourStory: PropTypes.string,
  cardCrescentWasFoundedWit: PropTypes.string,
  rectangle4554: PropTypes.string,
};

export default FrameComponent7;
