import PropTypes from "prop-types";
import "./TestimonialContent.css";

const TestimonialContent = ({ className = "" }) => {
  return (
    <div className={`testimonial-content ${className}`}>
      <div className="testimonial-header">
        <h1 className="heading-22">CardCrescent Reviews</h1>
        <div className="testimonial-rating">
          <div className="star-fullsvg-parent">
            <img
              className="star-fullsvg-icon"
              loading="lazy"
              alt=""
              src="/starfullsvg.svg"
            />
            <img className="star-fullsvg-icon1" alt="" src="/starfullsvg.svg" />
            <img className="star-fullsvg-icon2" alt="" src="/starfullsvg.svg" />
            <img className="star-fullsvg-icon3" alt="" src="/starfullsvg.svg" />
            <img
              className="star-halfsvg-icon"
              loading="lazy"
              alt=""
              src="/starhalfsvg.svg"
            />
          </div>
          <div className="link-455">4.5/5 on Trustpilot</div>
        </div>
      </div>
    </div>
  );
};

TestimonialContent.propTypes = {
  className: PropTypes.string,
};

export default TestimonialContent;
