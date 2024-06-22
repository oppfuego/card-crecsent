import { Button } from "@mui/material";
import ParagraphBackgroundShadow from "./ParagraphBackgroundShadow";
import StepDetailsTwo from "./StepDetailsTwo";
import PropTypes from "prop-types";
import "./FrameComponent1.css";
import { Link } from "react-router-dom";


const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`how-to-container-parent ${className}`}>
      <div className="how-to-container">
        <h1 className="heading-21">How to Buy Gift Cards on CardCrescent</h1>
      </div>
      <div className="how-to-steps">
        <div className="steps-container">
          <div className="steps-list">
            <ParagraphBackgroundShadow
              browseOurSelection="Browse Our Selection"
              headToOurWebsiteAndExplor={` Head to our website and explore the diverse categories of gift cards we offer, including E-commerce, Gaming, Fashion & Beauty, Food & Dining, Entertainment, and more.`}
              useTheSearchBarToFindSpec=" Use the search bar to find specific brands or filter options to narrow down your choices by category, popularity, or price."
            />
            <ParagraphBackgroundShadow
              browseOurSelection="Complete Your Purchase"
              headToOurWebsiteAndExplor=" Review your order summary and confirm the purchase."
              useTheSearchBarToFindSpec="You'll receive an email confirmation of your purchase, and the recipient will get their gift card according to your selected delivery option."
              propPadding="59.2px 24px 58.8px"
              propWidth="293px"
              propHeight="28px"
            />
          </div>
          <div className="step-icons-one">
            <div className="polygon-rightsvg-parent">
              <img
                className="polygon-rightsvg-icon"
                loading="lazy"
                alt=""
                src="/polygonrightsvg.svg"
              />
              <img
                className="polygon-rightsvg-icon1"
                alt=""
                src="/polygonrightsvg.svg"
              />
            </div>
          </div>
          <div className="step-icons-two">
            <div className="icon-list-two-parent">
              <div className="icon-list-two">
                <div className="backgroundborder4" />
                <div className="empty-icon">1</div>
                <div className="background5" />
              </div>
              <div className="icon-list-two1">
                <div className="backgroundborder5" />
                <div className="div">2</div>
              </div>
              <div className="icon-list-two2">
                <div className="backgroundborder6" />
                <div className="div1">3</div>
              </div>
            </div>
          </div>
          <div className="step-icon-three">
            <img
              className="polygon-leftsvg-icon"
              loading="lazy"
              alt=""
              src="/polygonleftsvg.svg"
            />
          </div>
          <StepDetailsTwo />
        </div>
        <div className="how-to-button">
          <Link to="/how-it-works">
            <Button
                className="button19"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#fe7fb6",
                  borderRadius: "160px",
                  "&:hover": { background: "#fe7fb6" },
                  width: 215.9,
                  height: 49.2,
                }}
            >
              See how it works…
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
