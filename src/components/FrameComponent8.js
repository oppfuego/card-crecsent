import Link1 from "./Link1";
import PropTypes from "prop-types";
import "./FrameComponent8.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";



const FrameComponent8 = ({ className = "" }) => {
  return (
    <section className={`gift-cards-container-wrapper ${className}`}>
      <div className="gift-cards-container">
        <div className="gift-cards-header">
          <h1 className="link-heading2">Recommended Products</h1>
          <div className="link-button2">
            <div className="show-all2">{`show all `}</div>
            <div className="symbol-wrapper2">
              <a
                className="symbol48"
                href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                target="_blank"
              >
                <IoIosArrowForward/>
              </a>
            </div>
          </div>
        </div>
        <div className="gift-card-list-parent">
          <div className="gift-card-list">
            <div className="button31">
              <div className="symbol49"><IoIosArrowForward/></div>
            </div>
          </div>
          <div className="link18">
            <div className="wrapper-picture-amazonwebp-container">
              <div className="wrapper-picture-amazonwebp3">
                <img
                  className="picture-amazonwebp3"
                  alt=""
                  src="/picture--amazonwebp-1@2x.png"
                />
              </div>
              <a
                className="amazon3"
                href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-20292"
                target="_blank"
              >
                Amazon
              </a>
            </div>
            <div className="usd-100-6">USD 1.00 - 2000.00</div>
          </div>
          <div className="link19">
            <div className="wrapper-picture-walmartwebp-container">
              <div className="wrapper-picture-walmartwebp2">
                <img
                  className="picture-walmartwebp2"
                  loading="lazy"
                  alt=""
                  src="/picture--walmartwebp2@2x.png"
                />
              </div>
              <b className="walmart2">Walmart</b>
            </div>
            <div className="usd-500-7">USD 5.00 - 500.00</div>
          </div>
          <div className="link20">
            <div className="wrapper-picture-ebaywebp-parent">
              <div className="wrapper-picture-ebaywebp1">
                <img
                  className="picture-ebaywebp1"
                  loading="lazy"
                  alt=""
                  src="/picture--ebaywebp2@2x.png"
                />
              </div>
              <b className="ebay1">eBay</b>
            </div>
            <div className="usd-500-8">USD 5.00 - 500.00</div>
          </div>
          <Link1
            pictureEBaywebp="/picture--targetwebp2@2x.png"
            eBay="Target"
            uSD50050000="USD 1.00 - 2000.00"
            propBackgroundColor="#1c1c1c"
            propMinWidth="57.3px"
            propDisplay="unset"
            propMinWidth1="unset"
          />
          <div className="link21">
            <div className="wrapper-picture-guitar-cente-parent">
              <div className="wrapper-picture-guitar-cente">
                <img
                  className="picture-guitar-centerwebp"
                  loading="lazy"
                  alt=""
                  src="/picture--guitarcenterwebp2@2x.png"
                />
              </div>
              <b className="guitar-center">Guitar Center</b>
            </div>
            <div className="usd-500-9">USD 5.00 - 5.00</div>
          </div>
          <div className="gift-card-list1">
            <div className="button32">
              <div className="symbol50"><IoIosArrowForward/></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
