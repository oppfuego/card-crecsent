import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`crypto-container-wrapper ${className}`}>
      <div className="crypto-container">
        <div className="crypto-options">
          <div className="crypto-title">
            <div className="crypto-payment">
              <h1 className="heading-2">
                Pay for gift cards the way you want…
              </h1>
            </div>
            <div className="choose-from-200">
              Choose from 200+ Cryptos, Binance Pay, Crypto.com Pay, Remito,
              Visa/Mastercard and more.
            </div>
          </div>
        </div>
        <div className="bitcoin">
          <div className="border">
            <img className="link-btcsvg" alt="" src="/link--btcsvg.svg" />
          </div>
          <div className="payment-methods">
            <div className="method-icons">
              <img
                className="border-icon"
                loading="lazy"
                alt=""
                src="/border.svg"
              />
              <img className="border-icon1" alt="" src="/border-1.svg" />
              <img className="border-icon2" alt="" src="/border-2.svg" />
              <img className="border-icon3" alt="" src="/border-3.svg" />
              <img className="border-icon4" alt="" src="/border-4.svg" />
              <img className="border-icon5" alt="" src="/border-5.svg" />
            </div>
            <div className="method-logos">
              <div className="method-logo-list">
                <img
                  className="method-3svg-icon"
                  alt=""
                  src="/method3svg.svg"
                />
                <img
                  className="method-4svg-icon"
                  alt=""
                  src="/method4svg.svg"
                />
                <img
                  className="method-5svg-icon"
                  alt=""
                  src="/method5svg.svg"
                />
                <img
                  className="method-1svg-icon"
                  alt=""
                  src="/method1svg@2x.png"
                />
                <img
                  className="method-2svg-icon"
                  alt=""
                  src="/method2svg.svg"
                />
              </div>
            </div>
          </div>
          <img className="border-icon6" alt="" src="/border-6.svg" />
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
