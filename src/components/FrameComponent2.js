import FrameComponent4 from "./FrameComponent4";
import Link from "./Link";
import PropTypes from "prop-types";
import "./FrameComponent2.css";
import { IoIosArrowForward } from "react-icons/io";


const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`food-container-wrapper ${className}`}>
      <div className="food-container">
        <FrameComponent4
          linkHeading2ECommerceGift={`Your Hub for Food & Dining Gift Cards!`}
          discoverAVersatileSelecti="Treat your friends and family to a culinary delight with our wide selection of food and dining gift cards. Perfect for any occasion, our gift cards offer access to a variety of restaurants, cafes, and food delivery services."
        />
        <div className="food-card-list">
          <div className="button-wrapper4">
            <div className="button17">
              <div className="symbol26"><IoIosArrowForward/></div>
            </div>
          </div>
          <div className="link13">
            <div className="wrapper-picture-lycawebp-parent">
              <div className="wrapper-picture-lycawebp">
                <img
                  className="picture-lycawebp"
                  loading="lazy"
                  alt=""
                  src="/picture--lycawebp@2x.png"
                />
              </div>
              <b className="lyca">Lyca</b>
            </div>
            <div className="usd-500-5">USD 5.00 - 125.00</div>
          </div>
          <div className="link14">
            <div className="wrapper-picture-t-mobileweb-parent">
              <div className="wrapper-picture-t-mobileweb">
                <img
                  className="picture-t-mobilewebp"
                  loading="lazy"
                  alt=""
                  src="/picture--tmobilewebp@2x.png"
                />
              </div>
              <b className="t-mobile">T-Mobile</b>
            </div>
            <div className="usd-1000-">USD 10.00 - 100.00</div>
          </div>
          <div className="link15">
            <div className="wrapper-picture-metro-by-t-m-parent">
              <div className="wrapper-picture-metro-by-t-m">
                <img
                  className="picture-metro-by-t-mobilewe"
                  loading="lazy"
                  alt=""
                  src="/picture--metrobytmobilewebp@2x.png"
                />
              </div>
              <b className="metro-by-t-mobile">Metro by T-Mobile</b>
            </div>
            <div className="usd-100-4">USD 1.00 - 163.00</div>
          </div>
          <Link
            picturePagePluswebp="/picture--pagepluswebp@2x.png"
            pagePlus="Page Plus"
            uSD9008000="USD 9.00 - 80.00"
          />
          <Link
            picturePagePluswebp="/picture--boostmobilewebp@2x.png"
            pagePlus="Boost Mobile"
            uSD9008000="USD 3.00 - 150.00"
            propMinWidth="119.4px"
            propDisplay="unset"
            propMinWidth1="unset"
          />
          <div className="button-wrapper5">
            <div className="button18">
              <div className="symbol27"><IoIosArrowForward/></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
