import { Button } from "@mui/material";
import Header from "../components/Header";
import ContentContainer from "../components/ContentContainer";
import TestimonialContent from "../components/TestimonialContent";
import BackgroundBorderShadow2 from "../components/BackgroundBorderShadow2";
import BackgroundBorderShadow1 from "../components/BackgroundBorderShadow1";
import BackgroundBorderShadow from "../components/BackgroundBorderShadow";
import GiftCardCategories from "../components/GiftCardCategories";
import Footer from "../components/Footer";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <Header />
      <section className="content-container-wrapper">
        <ContentContainer />
      </section>
      <section className="testimonial-container-container">
        <div className="testimonial-container1">
          <TestimonialContent />
          <div className="customer-quotes">
            <div className="quote-items">
              <div className="button11">
                <div className="symbol15"></div>
              </div>
            </div>
            <BackgroundBorderShadow2 linkDMvvTa7TNormaljpg="/link--dmvvta7t-normaljpg1@2x.png" />
            <BackgroundBorderShadow1 linkJupSfOIBNormaljpg="/link--jupsfoib-normaljpg1@2x.png" />
            <BackgroundBorderShadow linkCXvZrFe7Normaljpg="/link--cxvzrfe7-normaljpg1@2x.png" />
            <div className="quote-items1">
              <div className="button12">
                <div className="symbol16"></div>
              </div>
            </div>
          </div>
          <div className="check-reviews-button-container">
            <Button
              className="button13"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#fe7fb6",
                borderRadius: "160px",
                "&:hover": { background: "#fe7fb6" },
                width: 225.7,
                height: 49.2,
              }}
            >
              Check Our Reviews
            </Button>
          </div>
        </div>
      </section>
      <GiftCardCategories />
      <Footer
        itemLinkImprinHref="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-24479"
        itemLinkImprinTarget="_blank"
      />
    </div>
  );
};

export default HowItWorks;
