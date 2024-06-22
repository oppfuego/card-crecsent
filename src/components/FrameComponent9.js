import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent9.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";




const FrameComponent9 = ({ className = "" }) => {
  return (
    <section className={`product-description-child ${className}`}>
      <div className="frame-parent18">
        <div className="button-wrapper6">
          <div className="button29">
            <div className="symbol45"><FaShareAlt/></div>
          </div>
        </div>
        <div className="frame-parent19">
          <div className="wrapper-picture-amazonwebp-wrapper">
            <div className="wrapper-picture-amazonwebp2">
              <img
                className="picture-amazonwebp2"
                loading="lazy"
                alt=""
                src="/picture--amazonwebp1@2x.png"
              />
            </div>
          </div>
          <div className="heading-2-payment-methods-parent">
            <h1 className="heading-26">Payment Methods</h1>
            <div className="backgroundborder33">
              <div className="tablist1">
                <div className="tab1">
                  <div className="crypto-currencies">Crypto Currencies</div>
                </div>
                <div className="tab-wallet-services-wrapper">
                  <div className="tab-wallet">Wallet Services</div>
                </div>
                <div className="tab-fiat-payments-wrapper">
                  <div className="tab-fiat">Fiat Payments</div>
                </div>
              </div>
              <div className="backgroundborder-inner">
                <div className="payment-links-parent">
                  <div className="payment-links">
                    <img
                      className="link-icon"
                      loading="lazy"
                      alt=""
                      src="/link.svg"
                    />
                    <img className="link-icon1" alt="" src="/link-1.svg" />
                    <img className="link-icon2" alt="" src="/link-2.svg" />
                    <img className="link-icon3" alt="" src="/link-3.svg" />
                    <img className="link-icon4" alt="" src="/link-4.svg" />
                    <img className="link-icon5" alt="" src="/link-5.svg" />
                    <img className="link-icon6" alt="" src="/link-6.svg" />
                    <img className="link-icon7" alt="" src="/link-7.svg" />
                    <img className="link-icon8" alt="" src="/link-8.svg" />
                    <img className="link-icon9" alt="" src="/link-9.svg" />
                  </div>
                  <div className="social-links2">
                    <img className="link-icon10" alt="" src="/link-10.svg" />
                    <div className="crypto-links-parent">
                      <div className="crypto-links">
                        <img
                          className="link-icon11"
                          alt=""
                          src="/link-11.svg"
                        />
                        <img
                          className="link-icon12"
                          alt=""
                          src="/link-12.svg"
                        />
                        <img
                          className="link-icon13"
                          alt=""
                          src="/link-13.svg"
                        />
                      </div>
                      <div className="link-check-our-list-of-suppo-wrapper">
                        <a
                          className="link-check"
                          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-3382"
                          target="_blank"
                        >
                          Check our list of supported cryptocurrencies
                        </a>
                      </div>
                    </div>
                    <img className="link-icon14" alt="" src="/link-14.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent20">
          <form className="frame-form">
            <div className="gift-card-link-parent">
              <div className="gift-card-link">
                <a
                  className="item-link82"
                  href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-2858"
                  target="_blank"
                >
                  All products
                </a>
                <b className="gift-card-items1">{`>`}</b>
                <a
                  className="link-e-commerce"
                  href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                  target="_blank"
                >
                  E-Commerce
                </a>
                <b className="gift-card-items2">{`>`}</b>
                <div className="amazon2">Amazon</div>
              </div>
              <h1 className="heading-11">Uber Eats Gift Card</h1>
              <div className="the-uber-eats2">
                The Uber Eats Gift Card is the perfect way to treat your loved
                ones to a culinary adventure from the comfort of their own home.
                Whether they’re craving their favorite local restaurant or
                looking to explore new flavors.
              </div>
            </div>
            <div className="frame-parent21">
              <div className="container-parent">
                <div className="container5">
                  <b className="select-region">Select region</b>
                </div>
                <div className="backgroundborder34">
                  <div className="backgroundborder-child">
                    <div className="uspng-parent">
                      <img className="uspng-icon1" alt="" src="/uspng@2x.png" />
                      <div className="united-states-us-wrapper">
                        <a
                          className="united-states-us1"
                          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-20292"
                          target="_blank"
                        >
                          United States (US)
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="verticalborder1">
                    <a
                      className="symbol46"
                      href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-20292"
                      target="_blank"
                    >
                      <IoIosArrowDown/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="label-parent">
                <div className="label">
                  <b className="select-an-amount">Select an amount</b>
                </div>
                <TextField
                  className="backgroundborder35"
                  placeholder="Amazon 1.00 - 2000.00 USD"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#767a81" },
                    "& .MuiInputBase-root": {
                      height: "59.3px",
                      backgroundColor: "#fff",
                      borderRadius: "30px",
                    },
                    "& .MuiInputBase-input": { color: "#767a81" },
                  }}
                />
              </div>
            </div>
            <div className="frame-parent22">
              <div className="label-group">
                <div className="label1">
                  <b className="select-value">Select value</b>
                </div>
                <TextField
                  className="border1"
                  placeholder="1.00 - 2000.00 USD"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#767a81" },
                    "& .MuiInputBase-root": {
                      height: "64px",
                      borderRadius: "50px",
                    },
                    "& .MuiInputBase-input": { color: "#767a81" },
                  }}
                />
              </div>
              <div className="label-container">
                <div className="label2">
                  <b className="estimated-price">Estimated price</b>
                </div>
                <div className="backgroundborder36">
                  <div className="searchbox-wrapper">
                    <div className="searchbox1">
                      <img className="btcsvg-icon" alt="" src="/btcsvg.svg" />
                      <b className="btc-0000016101216">BTC 0.000016101216</b>
                    </div>
                  </div>
                  <div className="verticalborder2">
                    <a
                      className="symbol47"
                      href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-20292"
                      target="_blank"
                    >
                      <IoIosArrowDown/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="button30"
              startIcon={<img width="16px" height="16px" src="/cartsvg.svg" />}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#1c1c1c",
                fontSize: "16",
                background: "#fe7fb6",
                borderRadius: "160px",
                "&:hover": { background: "#fe7fb6" },
                height: 50.5,
              }}
            >
              Add to Cart
            </Button>
          </form>
          <div className="features-border">
            <div className="border2">
              <div className="feature-list">
                <div className="feature-item">
                  <img className="checksvg-icon" alt="" src="/checksvg.svg" />
                  <b className="instant-private-safe">Instant, private, safe</b>
                </div>
                <div className="feature-item1">
                  <img className="checksvg-icon1" alt="" src="/checksvg.svg" />
                  <b className="email-delivery">Email Delivery</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
