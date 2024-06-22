import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent6.css";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";



const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={`hero-banner-wrapper ${className}`}>
      <div className="hero-banner">
        <div className="banner-content">
          <div className="banner-heading-wrapper">
            <div className="banner-heading">
              <div className="heading-button">
                <h1 className="heading-1">The Perfect Gift for Any Occasion</h1>
                <div className="discover-a-world">
                  Discover a world of possibilities with our extensive range of
                  gift cards. Whether you're celebrating a birthday,
                  anniversary, holiday, or just want to show someone you care,
                  we have the perfect gift card for every occasion.
                </div>
              </div>
              <Button
                className="button14"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fbfbfb",
                  fontSize: "16",
                  background: "#fe7fb6",
                  borderRadius: "160px",
                  "&:hover": { background: "#fe7fb6" },
                  width: 146.1,
                  height: 49.2,
                }}
              >
                Browse All
              </Button>
            </div>
          </div>
          <img
            className="shopping-sales-gift-voucher-on-icon"
            loading="lazy"
            alt=""
            src="/shoppingsalesgiftvoucheronline-1@2x.png"
          />
        </div>
        <div className="logos-container-wrapper">
          <div className="logos-container">
            <div className="logo-grid">
              <img
                className="giftcardscom-logopng-icon"
                alt=""
                src="/giftcardscom-logopng@2x.png"
              />
            </div>
            <div className="los-angeles-logo">
              <img
                className="tds-gift-cards-los-angeles-ca-icon"
                alt=""
                src="/tds-gift-cards--los-angeles-ca-iconjpeg@2x.png"
              />
            </div>
            <div className="giftcard-logopng-wrapper">
              <img
                className="giftcard-logopng-icon"
                alt=""
                src="/giftcard-logopng@2x.png"
              />
            </div>
            <div className="granny-logo">
              <img
                className="gift-card-mall-logopng-icon"
                alt=""
                src="/gift-card-mall-logopng@2x.png"
              />
            </div>
            <img
              className="gift-card-granny-logopng-icon"
              alt=""
              src="/gift-card-granny-logopng@2x.png"
            />
          </div>
        </div>
        <div className="trust-link-wrapper">
          <div className="trust-link">
            <div className="stars">
              <div className="empty-space">4.5/5</div>
              <div className="list1">
                <div className="symbol18"><FaStar/></div>
                <div className="symbol19"><FaStar/></div>
                <div className="symbol20"><FaStar/></div>
                <div className="symbol21"><FaStar/></div>
                <div className="symbol22"><FaRegStarHalfStroke/></div>
              </div>
            </div>
            <div className="link-trusted">Trusted by 500,000+ users</div>
            <div className="from-185-countries">from 185+ countries</div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
