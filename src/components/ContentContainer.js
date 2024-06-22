import { Button } from "@mui/material";
import ParagraphBackgroundShadow from "./ParagraphBackgroundShadow";
import StepDetailsTwo from "./StepDetailsTwo";
import PropTypes from "prop-types";
import "./ContentContainer.css";

const ContentContainer = ({ className = "" }) => {
  return (
    <div className={`content-container ${className}`}>
      <div className="heading-container">
        <h1 className="heading-24">How to Buy Gift Cards on GiftEase</h1>
      </div>
      <div className="background8" />
      <div className="steps-container1">
        <div className="steps">
          <div className="step-items">
            <ParagraphBackgroundShadow
              browseOurSelection="Browse Our Selection"
              headToOurWebsiteAndExplor={` Head to our website and explore the diverse categories of gift cards we offer, including E-commerce, Gaming, Fashion & Beauty, Food & Dining, Entertainment, and more.`}
              useTheSearchBarToFindSpec=" Use the search bar to find specific brands or filter options to narrow down your choices by category, popularity, or price."
              propPadding="23.2px 31px 23.7px"
              propWidth="339px"
              propHeight="74px"
            />
            <ParagraphBackgroundShadow
              browseOurSelection="Complete Your Purchase"
              headToOurWebsiteAndExplor=" Review your order summary and confirm the purchase."
              useTheSearchBarToFindSpec="You'll receive an email confirmation of your purchase, and the recipient will get their gift card according to your selected delivery option."
              propPadding="59.1px 24px 58.9px"
              propWidth="293px"
              propHeight="28px"
            />
          </div>
          <div className="copyright-container">
            <div className="copyright-icons">
              <img
                className="polygon-rightsvg-icon2"
                loading="lazy"
                alt=""
                src="/polygonrightsvg.svg"
              />
              <img
                className="polygon-rightsvg-icon3"
                loading="lazy"
                alt=""
                src="/polygonrightsvg.svg"
              />
            </div>
          </div>
          <div className="border-container">
            <div className="background-borders">
              <div className="backgroundborder16" />
              <div className="backgroundborder17" />
              <div className="backgroundborder18" />
            </div>
          </div>
          <div className="polygon-leftsvg-wrapper">
            <img
              className="polygon-leftsvg-icon1"
              loading="lazy"
              alt=""
              src="/polygonleftsvg.svg"
            />
          </div>
          <StepDetailsTwo />
        </div>
        <div className="see-how-button-container">
          <Button
            className="button22"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#1c1c1c",
              fontSize: "20.8",
              background: "#fe7fb6",
              borderRadius: "160px",
              "&:hover": { background: "#fe7fb6" },
              width: 215.9,
              height: 49.2,
            }}
          >
            See how it works…
          </Button>
        </div>
      </div>
    </div>
  );
};

ContentContainer.propTypes = {
  className: PropTypes.string,
};

export default ContentContainer;
