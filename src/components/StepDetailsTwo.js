import PropTypes from "prop-types";
import "./StepDetailsTwo.css";

const StepDetailsTwo = ({ className = "" }) => {
  return (
    <div className={`step-details-two ${className}`}>
      <div className="paragraphbackgroundshadow1">
        <h3 className="select-a-gift">Select a Gift Card</h3>
        <div className="select-instructions">
          <div className="click-on-the">
            Click on the gift card of your choice to view details.
          </div>
          <div className="select-or-enter">
            Select or enter the desired amount for the gift card.
          </div>
          <div className="add-a-customized">
            Add a customized message and choose a design to make your gift card
            special.
          </div>
        </div>
      </div>
    </div>
  );
};

StepDetailsTwo.propTypes = {
  className: PropTypes.string,
};

export default StepDetailsTwo;
