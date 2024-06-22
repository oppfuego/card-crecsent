import { Button } from "@mui/material";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import Link1 from "../components/Link1";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import TestimonialContent from "../components/TestimonialContent";
import BackgroundBorderShadow2 from "../components/BackgroundBorderShadow2";
import BackgroundBorderShadow1 from "../components/BackgroundBorderShadow1";
import BackgroundBorderShadow from "../components/BackgroundBorderShadow";
import FrameComponent from "../components/FrameComponent";
import "./HomePage.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaEarthEurope } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import symbol from '../components/img/Symbol.svg';
import {Link} from "react-router-dom";


const HomePage = () => {
  return (
    <div className="home-page">
      <div className="header">
        <div className="section">
          <header className="background">
            <div className="logo-search">
              <div className="logo">
                <div className="logo-container">
                  <img className="vector-icon" alt="" src="/vector.svg" />
                  <div className="cardcrescent">
                    <span>Card</span>
                    <span className="crescent">Crescent</span>
                  </div>
                </div>
              </div>
              <div className="search-bar">
                <div className="background1">
                  <div className="search-input">
                    <div className="input">
                      <div className="what-are-you">
                        What are you looking for?
                      </div>
                    </div>
                  </div>
                  <div className="rectangle" />
                  <div className="button">
                    <FaMagnifyingGlass className="symbol" />
                  </div>
                </div>
              </div>
              <div className="user-actions">
                <div className="user-buttons">
                  <div className="button1">
                    <FaEarthEurope className="symbol1" />
                    <div className="language-dropdown">
                      <div className="en">EN</div>
                      <div className="dropdown-icon-wrapper">
                        <IoIosArrowDown className="symbol2" />
                      </div>
                    </div>
                  </div>
                  <div className="button-show-login-dialog">
                    <a
                        className="symbol3"
                        href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-2349"
                        target="_blank"
                    >
                      <FaUser />
                    </a>
                  </div>
                  <div className="button-show-products-in-cart">
                    <a
                        className="symbol4"
                        href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-2858"
                      target="_blank"
                    >
                      
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="nav">
            <div className="list">
              <Link className="item-link" to="/product-listings">All products</Link>
              <Link to="/product-description" className="item-link1">Mobile phone credit</Link>
              <Link to="how-it-works" className="item-link2">E-Commerce</Link>

              <div className="item-link3">Games</div>
              <div className="item-link4">Entertainment</div>
              <div className="item-link5">{`Fashion & Lifestyle`}</div>
              <div className="item-link6">{`Foods & Restaurants`}</div>
              <div className="item-link7">Electronics</div>
              <div className="item-link8">{`Home & Garden`}</div>
              <div className="item-link9">{`Health, Spa & Beauty`}</div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent6 />
      <FrameComponent5 />
      <section className="home-page-inner">
        <div className="frame-parent">
          <FrameComponent4
            linkHeading2ECommerceGift="The Ultimate Destination for E-commerce Gift Cards"
            discoverAVersatileSelecti="Discover a versatile selection of e-commerce gift cards that cater to every taste and occasion. From birthdays to anniversaries, holidays, or just because, find the ideal gift card for your loved ones."
          />
          <div className="button-wrapper-parent">
            <div className="button-wrapper">
              <div className="button2">
                <div className="symbol5"><IoIosArrowForward/></div>
              </div>
            </div>
            <div className="link">
              <div className="wrapper-picture-amazonwebp-parent">
                <div className="wrapper-picture-amazonwebp">
                  <img
                    className="picture-amazonwebp"
                    loading="lazy"
                    alt=""
                    src="/picture--amazonwebp@2x.png"
                  />
                </div>
                <a
                  className="amazon"
                  href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-20292"
                  target="_blank"
                >
                  Amazon
                </a>
              </div>
              <div className="usd-100-">USD 1.00 - 2000.00</div>
            </div>
            <div className="link1">
              <div className="wrapper-picture-walmartwebp-parent">
                <div className="wrapper-picture-walmartwebp">
                  <img
                    className="picture-walmartwebp"
                    loading="lazy"
                    alt=""
                    src="/picture--walmartwebp@2x.png"
                  />
                </div>
                <b className="walmart">Walmart</b>
              </div>
              <div className="usd-500-">USD 5.00 - 500.00</div>
            </div>
            <Link1
              pictureEBaywebp="/picture--ebaywebp@2x.png"
              eBay="eBay"
              uSD50050000="USD 5.00 - 500.00"
            />
            <div className="link2">
              <div className="wrapper-picture-targetwebp">
                <img
                  className="picture-targetwebp"
                  loading="lazy"
                  alt=""
                  src="/picture--targetwebp@2x.png"
                />
              </div>
              <div className="target-parent">
                <b className="target">Target</b>
                <div className="usd-100-1">USD 1.00 - 2000.00</div>
              </div>
            </div>
            <Link1
              pictureEBaywebp="/picture--guitarcenterwebp@2x.png"
              eBay="Guitar Center"
              uSD50050000="USD 5.00 - 5.00"
              propBackgroundColor="#1c1c1c"
              propMinWidth="124px"
              propDisplay="inline-block"
              propMinWidth1="114.1px"
            />
            <div className="bottom-button-wrapper">
              <div className="button3">
                <div className="symbol6"><IoIosArrowForward/></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-page-child">
        <div className="frame-group">
          <FrameComponent4
            linkHeading2ECommerceGift="Your Go-To Source for Gaming Gift Cards!"
            discoverAVersatileSelecti="Discover a wide array of gaming gift cards perfect for any gamer in your life. Whether it's for a birthday, holiday, or just because, we have the ideal gift card for every gaming enthusiast."
          />
          <div className="frame-container">
            <div className="button-container">
              <div className="button4">
                <div className="symbol7"><IoIosArrowForward/></div>
              </div>
            </div>
            <div className="link3">
              <div className="wrapper-picture-ituneswebp-parent">
                <div className="wrapper-picture-ituneswebp">
                  <img
                    className="picture-ituneswebp"
                    loading="lazy"
                    alt=""
                    src="/picture--ituneswebp@2x.png"
                  />
                </div>
                <b className="itunes">iTunes</b>
              </div>
              <div className="usd-200-">USD 2.00 - 500.00</div>
            </div>
            <div className="link4">
              <div className="wrapper-picture-google-play-parent">
                <div className="wrapper-picture-google-play">
                  <img
                    className="picture-google-playwebp"
                    loading="lazy"
                    alt=""
                    src="/picture--googleplaywebp@2x.png"
                  />
                </div>
                <b className="google-play">Google Play</b>
              </div>
              <div className="usd-500-1">USD 5.00 - 200.00</div>
            </div>
            <Link1
              pictureEBaywebp="/picture--playstationwebp@2x.png"
              eBay="PlayStation"
              uSD50050000="USD 1.00 - 110.00"
              propBackgroundColor="#000"
              propMinWidth="103.9px"
              propDisplay="unset"
              propMinWidth1="unset"
            />
            <Link1
              pictureEBaywebp="/picture--razerwebp@2x.png"
              eBay="Razer"
              uSD50050000="USD 1.00 - 500.00"
              propBackgroundColor="#000"
              propMinWidth="52.2px"
              propDisplay="unset"
              propMinWidth1="unset"
            />
            <Link1
              pictureEBaywebp="/picture--steamwebp@2x.png"
              eBay="Steam"
              uSD50050000="USD 5.00 - 100.00"
              propBackgroundColor="#000"
              propMinWidth="56.9px"
              propDisplay="unset"
              propMinWidth1="unset"
            />
            <div className="button-frame">
              <div className="button5">
                <div className="symbol8"><IoIosArrowForward/></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <section className="testimonial-container-wrapper">
        <div className="testimonial-container">
          <TestimonialContent />
          <div className="testimonial-cards">
            <div className="frame-div">
              <div className="button6">
                <div className="symbol9"><IoIosArrowForward/></div>
              </div>
            </div>
            <BackgroundBorderShadow2 linkDMvvTa7TNormaljpg="/link--dmvvta7t-normaljpg@2x.png" />
            <BackgroundBorderShadow1 linkJupSfOIBNormaljpg="/link--jupsfoib-normaljpg@2x.png" />
            <BackgroundBorderShadow linkCXvZrFe7Normaljpg="/link--cxvzrfe7-normaljpg@2x.png" />
            <div className="button-wrapper1">
              <div className="button7">
                <div className="symbol10"><IoIosArrowForward/></div>
              </div>
            </div>
          </div>
          <div className="testimonial-button-container">
            <Button
              className="button8"
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
      <FrameComponent />
      <footer className="footer">
        <div className="footer-container">
          <div className="background2">
            <div className="footer-content">
              <div className="footer-columns">
                <div className="category-column">
                  <b className="categories">Categories</b>
                  <div className="category-links">
                    <Link to="/product-description" className="item-link10">Mobile phone credit</Link>
                    <div className="item-link11">E-Commerce</div>
                    <div className="item-link12">Games</div>
                    <div className="item-link13">Entertainment</div>
                    <div className="item-link14">{`Fashion & Lifestyle`}</div>
                    <div className="item-link15">{`Foods & Restaurants`}</div>
                    <div className="item-link16">Electronics</div>
                    <div className="item-link17">{`Home & Garden`}</div>
                    <div className="item-link18">{`Health, Spa & Beauty`}</div>
                    <div className="item-link19">{`Travel & Experiences`}</div>
                    <div className="item-link20">Charity</div>
                    <div className="item-link21">Payment cards</div>
                    <div className="item-link22">Crypto</div>
                  </div>
                </div>
                <div className="footer-column-titles">
                  <b className="help">Help</b>
                  <div className="footer-links">
                    <div className="item-link23">Support</div>
                    <a
                      className="item-link24"
                      href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-3382"
                      target="_blank"
                    >
                      Supported Crypto
                    </a>
                    <a
                      className="item-link25"
                      href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-21383"
                      target="_blank"
                    >
                      How it Works
                    </a>
                    <a
                      className="item-link26"
                      href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-21688"
                      target="_blank"
                    >
                      Newsletter
                    </a>
                  </div>
                </div>
                <div className="about-column">
                  <b className="about-us">About Us</b>
                  <div className="about-links">
                    <a
                      className="item-link27"
                      href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-22013"
                      target="_blank"
                    >
                      Our history
                    </a>
                    <a
                      className="item-link28"
                      href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-22649"
                      target="_blank"
                    >
                      Known from
                    </a>
                    <a
                      className="item-link29"
                      href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-23506"
                      target="_blank"
                    >
                      Press Resources
                    </a>
                    <div className="item-link30">Trustpilot Reviews</div>
                    <div className="item-link31">Blog</div>
                  </div>
                </div>
                <div className="footer-column-titles1">
                  <div className="legal">Legal</div>
                  <div className="item-link-terms-and-condit-parent">
                    <Link to="/terms-conditions" className="item-link32">Terms and Conditions</Link>
                    <Link to="refund-policy" className="item-link33">Privacy Policy</Link>
                    <Link to="cancellation-policy" className="item-link34">Imprint</Link>
                    <Link to="cookie-policy" className="item-link35">KYC & AML</Link>
                  </div>
                </div>
              </div>
              <div className="logo1">
                <div className="footer-logo-container">
                  <img className="vector-icon1" alt="" src="/vector.svg" />
                  <div className="cardcrescent1">
                    <span>Card</span>
                    <span className="crescent1">Crescent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="background3">
            <div className="container">
              <div className="community-content">
                <div className="join-our-community-wrapper">
                  <div className="join-our-community">Join our community</div>
                </div>
                <div className="social-links-container">
                  <div className="social-links">
                    <img
                      className="link-twitter-iconsvg"
                      alt=""
                      src="/link--twittericonsvg.svg"
                    />
                    <img
                      className="link-youtube-iconsvg"
                      alt=""
                      src="/link--youtubeiconsvg.svg"
                    />
                    <img
                      className="link-reddit-iconsvg"
                      alt=""
                      src="/link--redditiconsvg.svg"
                    />
                    <img
                      className="link-fb-iconsvg"
                      alt=""
                      src="/link--fbiconsvg.svg"
                    />
                    <img
                      className="link-telegram-iconsvg"
                      alt=""
                      src="/link--telegramiconsvg.svg"
                    />
                    <img
                      className="link-instagramiconsvg"
                      alt=""
                      src="/link--instagramiconsvg.svg"
                    />
                    <img
                      className="link-tiktoksvg"
                      loading="lazy"
                      alt=""
                      src="/link--tiktoksvg.svg"
                    />
                  </div>
                </div>
                <div className="the-product-names-container">
                  <span className="the-product-names-container1">
                    <p className="the-product-names">
                      EtherFusion LLC

                    </p>
                    <p className="registered-trademarks-are">
                      License number: 2325896
                    </p>
                    <p className="companies">Sharjah Media City (Shams), Al Messaned, Al Bataeh, Sharjah, United Arab Emirates
</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="background4">
            <div className="container1">
              <div className="language-selector">
                <div className="button9">
                  <div className="symbol11"><img src={symbol} alt=""/></div>
                  <div className="language-options">
                    <div className="en1">EN</div>
                  </div>
                  <div className="currency-options">
                    <div className="symbol12"><IoIosArrowDown/></div>
                  </div>
                </div>
                <div className="button10">
                  <div className="symbol13"><FaEarthEurope/></div>
                  <div className="us-wrapper">
                    <div className="us">US</div>
                  </div>
                  <div className="symbol-wrapper">
                    <div className="symbol14"><IoIosArrowDown/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
