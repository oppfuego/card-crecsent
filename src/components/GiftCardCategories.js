import Link1 from "./Link1";
import PropTypes from "prop-types";
import "./GiftCardCategories.css";

const GiftCardCategories = ({ className = "" }) => {
  return (
    <section className={`gift-card-categories ${className}`}>
      <div className="category-container">
        <div className="category-heading">
          <h1 className="link-heading1">Recommended Products</h1>
          <div className="link-button1">
            <div className="show-all1">{`show all `}</div>
            <div className="show-all-icon-container">
              <a
                className="symbol33"
                href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                target="_blank"
              >
                
              </a>
            </div>
          </div>
        </div>
        <div className="gift-card-items">
          <div className="card-components">
            <div className="button23">
              <div className="symbol34"></div>
            </div>
          </div>
          <div className="link16">
            <div className="wrapper-picture-amazonwebp-group">
              <div className="wrapper-picture-amazonwebp1">
                <img
                  className="picture-amazonwebp1"
                  rows={6}
                  cols={10}
                  alt=""
                  src="/picture--amazonwebp@2x.png"
                />
              </div>
              <a
                className="amazon1"
                href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-20292"
                target="_blank"
              >
                Amazon
              </a>
            </div>
            <div className="usd-100-5">USD 1.00 - 2000.00</div>
          </div>
          <div className="link17">
            <div className="wrapper-picture-walmartwebp-group">
              <div className="wrapper-picture-walmartwebp1">
                <img
                  className="picture-walmartwebp1"
                  loading="lazy"
                  alt=""
                  src="/picture--walmartwebp1@2x.png"
                />
              </div>
              <b className="walmart1">Walmart</b>
            </div>
            <div className="usd-500-6">USD 5.00 - 500.00</div>
          </div>
          <Link1
            pictureEBaywebp="/picture--ebaywebp1@2x.png"
            eBay="eBay"
            uSD50050000="USD 5.00 - 500.00"
            propBackgroundColor="#1c1c1c"
            propMinWidth="44.8px"
            propDisplay="unset"
            propMinWidth1="unset"
          />
          <Link1
            pictureEBaywebp="/picture--targetwebp1@2x.png"
            eBay="Target"
            uSD50050000="USD 1.00 - 2000.00"
            propBackgroundColor="#1c1c1c"
            propMinWidth="57.3px"
            propDisplay="unset"
            propMinWidth1="unset"
          />
          <Link1
            pictureEBaywebp="/picture--guitarcenterwebp1@2x.png"
            eBay="Guitar Center"
            uSD50050000="USD 5.00 - 5.00"
            propBackgroundColor="#1c1c1c"
            propMinWidth="124px"
            propDisplay="inline-block"
            propMinWidth1="114.1px"
          />
          <div className="card-components1">
            <div className="button24">
              <div className="symbol35"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

GiftCardCategories.propTypes = {
  className: PropTypes.string,
};

export default GiftCardCategories;
