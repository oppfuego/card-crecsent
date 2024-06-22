import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";
import "./FrameComponent3.css";
import { IoIosArrowForward } from "react-icons/io";


const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`ecommerce-container-wrapper ${className}`}>
      <div className="ecommerce-container">
        <FrameComponent4
          linkHeading2ECommerceGift={`Your Destination for Fashion & Beauty Gift Cards!`}
          discoverAVersatileSelecti="Discover the perfect gift for the fashionista or beauty enthusiast in your life. Whether it's for a birthday, anniversary, or just because, our selection of fashion and beauty gift cards offers something for everyone."
        />
        <div className="ecommerce-card-list">
          <div className="button-wrapper2">
            <div className="button15">
              <div className="symbol24"><IoIosArrowForward/></div>
            </div>
          </div>
          <div className="link7">
            <div className="wrapper-picture-amexwebp-parent">
              <div className="wrapper-picture-amexwebp">
                <img
                  className="picture-amexwebp"
                  loading="lazy"
                  alt=""
                  src="/picture--amexwebp@2x.png"
                />
              </div>
              <b className="amex">Amex</b>
            </div>
            <div className="usd-100-2">USD 1.00 - 2000.00</div>
          </div>
          <div className="link8">
            <div className="wrapper-picture-paypal-by-re-parent">
              <div className="wrapper-picture-paypal-by-re">
                <img
                  className="picture-paypal-by-rewarblew"
                  loading="lazy"
                  alt=""
                  src="/picture--paypalbyrewarblewebp@2x.png"
                />
              </div>
              <b className="paypal-by-rewarble">PayPal by Rewarble</b>
            </div>
            <div className="usd-500-3">USD 5.00 - 100.00</div>
          </div>
          <div className="link9">
            <div className="wrapper-picture-my-prepaid-c">
              <img
                className="picture-my-prepaid-center-ma"
                loading="lazy"
                alt=""
                src="/picture--myprepaidcentermastercardwebp@2x.png"
              />
            </div>
            <div className="my-prepaid-center-mastercard-parent">
              <b className="my-prepaid-center-container">
                <p className="my-prepaid-center">My Prepaid Center</p>
                <p className="mastercard">Mastercard</p>
              </b>
              <div className="usd-100-3">USD 1.00 - 50.00</div>
            </div>
          </div>
          <div className="link10">
            <div className="wrapper-picture-max-prepaid-">
              <img
                className="picture-max-prepaid-masterca"
                rows={6}
                cols={10}
                alt=""
                src="/picture--maxprepaidmastercardwebp@2x.png"
              />
            </div>
            <div className="max-prepaid-mastercard-parent">
              <b className="max-prepaid-mastercard-container">
                <p className="max-prepaid">MAX Prepaid</p>
                <p className="mastercard1">Mastercard</p>
              </b>
              <div className="usd-2500-">USD 25.00 - 1000.00</div>
            </div>
          </div>
          <div className="link11">
            <div className="wrapper-picture-vanilla-gift-parent">
              <div className="wrapper-picture-vanilla-gift">
                <img
                  className="picture-vanilla-giftwebp"
                  alt=""
                  src="/picture--vanillagiftwebp@2x.png"
                />
              </div>
              <b className="vanilla-gift">Vanilla Gift</b>
            </div>
            <div className="usd-500-4">USD 5.00 - 50.00</div>
          </div>
          <div className="button-wrapper3">
            <div className="button16">
              <div className="symbol25"><IoIosArrowForward/></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
