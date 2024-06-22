import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Footer.css";
import { FaEarthEurope } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import symbol from '../components/img/Symbol.svg';


const Footer = ({
  className = "",
  itemLinkImprinHref,
  itemLinkImprinTarget,
  propDebugCommit,
  propDebugCommit1,
  propPadding,
  propPadding1,
  propDebugCommit2,
  propWidth,
  propDisplay,
  propAlignSelf,
}) => {
  const backgroundStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const background1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const communityTitleStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const socialLinksContainerStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const background2Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit2,
    };
  }, [propDebugCommit2]);

  const eNStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propDisplay, propAlignSelf]);

  return (
    <footer className={`footer1 ${className}`}>
      <div className="footer-container1">
        <div className="background9" style={backgroundStyle}>
          <div className="footer-content1">
            <div className="footer-links1">
              <div className="categories-title">
                <div className="categories2">Categories</div>
                <div className="category-links1">
                  <div className="item-link46">Mobile phone credit</div>
                  <div className="item-link47">E-Commerce</div>
                  <div className="item-link48">Games</div>
                  <div className="item-link49">Entertainment</div>
                  <div className="item-link50">{`Fashion & Lifestyle`}</div>
                  <div className="item-link51">{`Foods & Restaurants`}</div>
                  <div className="item-link52">Electronics</div>
                  <div className="item-link53">{`Home & Garden`}</div>
                  <div className="item-link54">{`Health, Spa & Beauty`}</div>
                  <div className="item-link55">{`Travel & Experiences`}</div>
                  <div className="item-link56">Charity</div>
                  <div className="item-link57">Payment cards</div>
                  <div className="item-link58">Crypto</div>
                </div>
              </div>
              <div className="help-parent">
                <div className="help1">Help</div>
                <div className="legal1">
                  <div className="item-link59">Support</div>
                  <a
                    className="item-link60"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-3382"
                    target="_blank"
                  >
                    Supported Crypto
                  </a>
                  <a
                    className="item-link61"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-21383"
                    target="_blank"
                  >
                    How it Works
                  </a>
                  <a
                    className="item-link62"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-21688"
                    target="_blank"
                  >
                    Newsletter
                  </a>
                </div>
              </div>
              <div className="about-title">
                <div className="about-us2">About Us</div>
                <div className="about-links1">
                  <a
                    className="item-link63"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-22013"
                    target="_blank"
                  >
                    Our history
                  </a>
                  <a
                    className="item-link64"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-22649"
                    target="_blank"
                  >
                    Known from
                  </a>
                  <a
                    className="item-link65"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-23506"
                    target="_blank"
                  >
                    Press Resources
                  </a>
                  <div className="item-link66">Trustpilot Reviews</div>
                  <div className="item-link67">Blog</div>
                </div>
              </div>
              <div className="legal-parent">
                <div className="legal2">Legal</div>
                <div className="item-link-terms-and-condit-group">
                  <div className="item-link68">Terms and Conditions</div>
                  <div className="item-link69">Privacy Policy</div>
                  <a
                    className="item-link70"
                    href={itemLinkImprinHref}
                    target={itemLinkImprinTarget}
                  >
                    Imprint
                  </a>
                  <div className="item-link71">{`KYC & AML`}</div>
                </div>
              </div>
            </div>
            <div className="logo3">
              <div className="logo-container2">
                <img
                  className="vector-icon6"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
                <div className="cardcrescent3">
                  <span>Card</span>
                  <span className="crescent3">Crescent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background10" style={background1Style}>
          <div className="container3">
            <div className="social-content">
              <div className="community-title" style={communityTitleStyle}>
                <div className="join-our-community1">Join our community</div>
              </div>
              <div
                className="social-links-container1"
                style={socialLinksContainerStyle}
              >
                <div className="social-links1">
                  <img
                    className="link-twitter-iconsvg1"
                    loading="lazy"
                    alt=""
                    src="/link--twittericonsvg.svg"
                  />
                  <img
                    className="link-youtube-iconsvg1"
                    loading="lazy"
                    alt=""
                    src="/link--youtubeiconsvg.svg"
                  />
                  <img
                    className="link-reddit-iconsvg1"
                    loading="lazy"
                    alt=""
                    src="/link--redditiconsvg.svg"
                  />
                  <img
                    className="link-fb-iconsvg1"
                    loading="lazy"
                    alt=""
                    src="/link--fbiconsvg.svg"
                  />
                  <img
                    className="link-telegram-iconsvg1"
                    loading="lazy"
                    alt=""
                    src="/link--telegramiconsvg.svg"
                  />
                  <img
                    className="link-instagramiconsvg1"
                    loading="lazy"
                    alt=""
                    src="/link--instagramiconsvg.svg"
                  />
                  <img
                    className="link-tiktoksvg1"
                    loading="lazy"
                    alt=""
                    src="/link--tiktoksvg.svg"
                  />
                </div>
              </div>
              <div className="the-product-names-container2">
                <span className="the-product-names-container3">
                  <p className="the-product-names1">
                    EtherFusion LLC
                  </p><p className="the-product-names1">
                    License number: 2325896
                  </p>
                  <p className="registered-trademarks-are1">
                    Sharjah Media City (Shams), Al Messaned, Al Bataeh, Sharjah, United Arab Emirates
                  </p>
                  <p className="companies1">companies.</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="background11" style={background2Style}>
          <div className="container4">
            <div className="language-selector1">
              <div className="button25">
                <div className="symbol36"><img src={symbol} alt=""/></div>
                <div className="language-codes">
                  <div className="en3" style={eNStyle}>
                    EN
                  </div>
                </div>
                <div className="language-dropdown-icons">
                  <div className="symbol37"><IoIosArrowDown/></div>
                </div>
              </div>
              <div className="button26">
                <div className="symbol38"><FaEarthEurope/></div>
                <div className="us-container">
                  <div className="us1">US</div>
                </div>
                <div className="symbol-frame">
                  <div className="symbol39"><IoIosArrowDown/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  itemLinkImprinHref: PropTypes.string.isRequired,
  itemLinkImprinTarget: PropTypes.string,

  /** Style props */
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
  propPadding: PropTypes.any,
  propPadding1: PropTypes.any,
  propDebugCommit2: PropTypes.any,
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default Footer;
