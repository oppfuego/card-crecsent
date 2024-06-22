import { Button } from "@mui/material";
import PartnerLogoRows from "./PartnerLogoRows";
import PropTypes from "prop-types";
import "./BreadCrumbs.css";
import {Link} from "react-router-dom";

const BreadCrumbs = ({ className = "" }) => {
  return (
    <div className={`bread-crumbs ${className}`}>
      <a
        className="nav-breadcrumb"
        href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
        target="_blank"
      >
        E-Commerce
      </a>
      <div className="partner-logos">
        <div className="partner-logo-rows1">
          <div className="link25">
            <div className="wrapper-picture-amazonwebp4">
              <img
                className="picture-amazonwebp4"
                rows={8}
                cols={12}
                alt=""
                src="/picture--amazonwebp@2x.png"
              />
            </div>

            <Link className="amazon4" to="/product-description">Amazon</Link>


          </div>
          <div className="link26">
            <div className="wrapper-picture-walmartwebp3">
              <img
                className="picture-walmartwebp3"
                loading="lazy"
                alt=""
                src="/picture--walmartwebp3@2x.png"
              />
            </div>
            <div className="walmart3">Walmart</div>
          </div>
          <div className="link27">
            <div className="wrapper-picture-ebaywebp2">
              <img
                className="picture-ebaywebp2"
                loading="lazy"
                alt=""
                src="/picture--ebaywebp3@2x.png"
              />
            </div>
            <div className="ebay2">eBay</div>
          </div>
        </div>
        <PartnerLogoRows
          pictureTargetwebp="/picture--targetwebp3@2x.png"
          target="Target"
          pictureGuitarCenterwebp="/picture--guitarcenterwebp3@2x.png"
          guitarCenter="Guitar Center"
          picture1800FlowersComwebp="/picture--1800flowerscomwebp@2x.png"
          flowerscom="1-800-Flowers.com"
        />
        <div className="partner-logo-rows2">
          <div className="link28">
            <div className="wrapper-picture-quickgifts-c">
              <img
                className="picture-quickgifts-card-mall"
                rows={8}
                cols={12}
                alt=""
                src="/picture--quickgiftscardmallwebp@2x.png"
              />
            </div>
            <div className="quickgifts-card-mall">QuickGifts Card Mall</div>
          </div>
          <div className="link29">
            <div className="wrapper-picture-chewywebp">
              <img
                className="picture-chewywebp"
                loading="lazy"
                alt=""
                src="/picture--chewywebp@2x.png"
              />
            </div>
            <div className="chewy">Chewy</div>
          </div>
          <div className="link30">
            <div className="wrapper-picture-belkwebp">
              <img
                className="picture-belkwebp"
                loading="lazy"
                alt=""
                src="/picture--belkwebp@2x.png"
              />
            </div>
            <div className="belk">Belk</div>
          </div>
        </div>
        <PartnerLogoRows
          pictureTargetwebp="/picture--sierratradingpostwebp@2x.png"
          target="Sierra Trading Post"
          pictureGuitarCenterwebp="/picture--bassproshopswebp@2x.png"
          guitarCenter="Bass Pro Shops"
          picture1800FlowersComwebp="/picture--petcowebp@2x.png"
          flowerscom="Petco"
          propWidth="168.7px"
          propWidth1="135.2px"
          propWidth2="51.9px"
        />
        <div className="partner-logo-row">
          <div className="link31">
            <div className="wrapper-picture-joannwebp">
              <img
                className="picture-joannwebp"
                loading="lazy"
                alt=""
                src="/picture--joannwebp@2x.png"
              />
            </div>
            <div className="joann">JOANN</div>
          </div>
          <div className="link32">
            <div className="wrapper-picture-grouponwebp">
              <img
                className="picture-grouponwebp"
                loading="lazy"
                alt=""
                src="/picture--grouponwebp@2x.png"
              />
            </div>
            <div className="groupon">Groupon</div>
          </div>
          <div className="link33">
            <div className="wrapper-picture-shutterflyw">
              <img
                className="picture-shutterflywebp"
                loading="lazy"
                alt=""
                src="/picture--shutterflywebp@2x.png"
              />
            </div>
            <div className="shutterfly">Shutterfly</div>
          </div>
          <div className="link34">
            <div className="wrapper-picture-burlingtonw">
              <img
                className="picture-burlingtonwebp"
                loading="lazy"
                alt=""
                src="/picture--burlingtonwebp@2x.png"
              />
            </div>
            <div className="burlington">Burlington</div>
          </div>
          <div className="link35">
            <div className="wrapper-picture-advance-auto">
              <img
                className="picture-advance-auto-partsw"
                loading="lazy"
                alt=""
                src="/picture--advanceautopartswebp@2x.png"
              />
            </div>
            <div className="advance-auto-parts">Advance Auto Parts</div>
          </div>
          <div className="link36">
            <div className="wrapper-picture-1-800-basket">
              <img
                className="picture-1-800-baskets-comwe"
                loading="lazy"
                alt=""
                src="/picture--1800basketscomwebp@2x.png"
              />
            </div>
            <div className="basketscom">1-800-Baskets.com</div>
          </div>
        </div>
      </div>
      <div className="results-footer">
        <div className="results-footer-content">
          <div className="showing-18-of">Showing 18 of 54 results</div>
        </div>
        <Button
          className="button33"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "16",
            background: "#fe7fb6",
            borderRadius: "160px",
            "&:hover": { background: "#fe7fb6" },
            height: 56,
          }}
        >
          Load more
        </Button>
      </div>
    </div>
  );
};

BreadCrumbs.propTypes = {
  className: PropTypes.string,
};

export default BreadCrumbs;
