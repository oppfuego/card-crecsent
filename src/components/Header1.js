import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Header1.css";

const Header1 = ({
  className = "",
  backgroundFlex,
  backgroundAlignSelf,
  cardDebugCommit,
  crescentDebugCommit,
}) => {
  const headerStyle = useMemo(() => {
    return {
      flex: backgroundFlex,
      alignSelf: backgroundAlignSelf,
    };
  }, [backgroundFlex, backgroundAlignSelf]);

  const iconStyle = useMemo(() => {
    return {
      debugCommit: cardDebugCommit,
    };
  }, [cardDebugCommit]);

  const cardCrescentStyle = useMemo(() => {
    return {
      debugCommit: crescentDebugCommit,
    };
  }, [crescentDebugCommit]);

  return (
    <div className={`header2 ${className}`} style={headerStyle}>
      <div className="section3">
        <header className="background12">
          <div className="logo-parent">
            <div className="logo4">
              <div className="icon-parent">
                <img
                  className="icon"
                  alt=""
                  src="/vector.svg"
                  style={iconStyle}
                />
                <div className="cardcrescent4" style={cardCrescentStyle}>
                  <span>Card</span>
                  <span className="crescent4">Crescent</span>
                </div>
              </div>
            </div>
            <div className="background-wrapper">
              <div className="background13">
                <div className="input-wrapper">
                  <div className="input2">
                    <div className="what-are-you2">
                      What are you looking for?
                    </div>
                  </div>
                </div>
                <div className="rectangle2" />
                <div className="button27">
                  <div className="symbol40"></div>
                </div>
              </div>
            </div>
            <div className="auth-buttons-wrapper">
              <div className="auth-buttons">
                <div className="button28">
                  <div className="symbol41"></div>
                  <div className="en-parent">
                    <div className="en4">EN</div>
                    <div className="symbol-wrapper1">
                      <div className="symbol42"></div>
                    </div>
                  </div>
                </div>
                <div className="button-show-login-dialog2">
                  <a
                    className="symbol43"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-2349"
                    target="_blank"
                  >
                    
                  </a>
                </div>
                <div className="button-show-products-in-cart2">
                  <a
                    className="symbol44"
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
        <div className="nav2">
          <div className="list3">
            <a
              className="item-link72"
              href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-2858"
              target="_blank"
            >
              All products
            </a>
            <a
              className="item-link73"
              href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-2038"
              target="_blank"
            >
              Mobile phone credit
            </a>
            <a
              className="item-link74"
              href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
              target="_blank"
            >
              E-Commerce
            </a>
            <div className="item-link75">Games</div>
            <div className="item-link76">Entertainment</div>
            <div className="item-link77">{`Fashion & Lifestyle`}</div>
            <div className="item-link78">{`Foods & Restaurants`}</div>
            <div className="item-link79">Electronics</div>
            <div className="item-link80">{`Home & Garden`}</div>
            <div className="item-link81">{`Health, Spa & Beauty`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  backgroundFlex: PropTypes.any,
  backgroundAlignSelf: PropTypes.any,
  cardDebugCommit: PropTypes.any,
  crescentDebugCommit: PropTypes.any,
};

export default Header1;
