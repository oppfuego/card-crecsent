import SignIn1 from "../components/SignIn1";
import Footer from "../components/Footer";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up-1920">
      <div className="header4">
        <div className="section">
          <header className="background">
            <div className="logo-parent">
              <div className="logo">
                <div className="vector-parent">
                  <img
                    className="vector-icon"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="cardcrescent">
                    <span>Card</span>
                    <span className="crescent">Crescent</span>
                  </div>
                </div>
              </div>
              <div className="background-wrapper">
                <div className="background1">
                  <div className="input-wrapper">
                    <div className="input">
                      <div className="what-are-you">
                        What are you looking for?
                      </div>
                    </div>
                  </div>
                  <div className="rectangle" />
                  <div className="button4">
                    <div className="symbol"></div>
                  </div>
                </div>
              </div>
              <div className="actions-buttons-wrapper">
                <div className="actions-buttons">
                  <div className="button5">
                    <div className="symbol1"></div>
                    <div className="language-dropdown">
                      <div className="en">EN</div>
                      <div className="symbol-wrapper">
                        <div className="symbol2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="button-show-login-dialog">
                    <a
                      className="symbol3"
                      href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-2349"
                      target="_blank"
                    >
                      
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
              <a
                className="item-link"
                href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-2858"
                target="_blank"
              >
                All products
              </a>
              <a
                className="item-link1"
                href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-2038"
                target="_blank"
              >
                Mobile phone credit
              </a>
              <a
                className="item-link2"
                href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                target="_blank"
              >
                E-Commerce
              </a>
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
      <section className="sign-up-form-parent">
        <div className="sign-up-form">
          <SignIn1 />
        </div>
        <img
          className="background-shape-icon1"
          loading="lazy"
          alt=""
          src="/rectangle-491@2x.png"
        />
      </section>
      <Footer
        itemLinkImprinHref="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-24479"
        itemLinkImprinTarget="_blank"
        propHeight="574.6px"
        propPadding="0px 0px 72.8px"
      />
    </div>
  );
};

export default SignUp;
