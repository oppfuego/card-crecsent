import Header1 from "../components/Header1";
import BreadCrumbs from "../components/BreadCrumbs";
import Footer from "../components/Footer";
import "./ProductListings.css";
import Header from "../components/Header";
import { IoIosArrowDown } from "react-icons/io";


const ProductListings = () => {
  return (
      <>

        <div className="product-listings">
          <Header
              backgroundFlex="unset"
              backgroundAlignSelf="stretch"
              cardDebugCommit="unset"
              crescentDebugCommit="unset"
          />
          <div className="all-productssvg"/>
          <div className="link5"/>
          <section className="content">
            <div className="main-content-parent">
              <div className="main-content">
                <div className="region-categories">
                  <b className="region">Region</b>
                  <div className="backgroundborder3">
                    <div className="uspng-wrapper">
                      <img
                          className="uspng-icon"
                          loading="lazy"
                          alt=""
                          src="/uspng@2x.png"
                      />
                    </div>
                    <div className="search-term">
                      <div className="searchbox">
                        <a
                            className="united-states-us"
                            href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                            target="_blank"
                        >
                          United States (US)
                        </a>
                      </div>
                    </div>
                    <div className="verticalborder">
                      <a
                          className="symbol17"
                          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                          target="_blank"
                      >
                        <IoIosArrowDown/>
                      </a>
                    </div>
                  </div>
                  <h3 className="categories1">Categories</h3>
                </div>
                <div className="categories-icons">
                  <div className="categories-icons-list">
                    <div className="categories-icon-content-parent">
                      <div className="categories-icon-content">
                        <img className="vector-icon2" alt="" src="/vector-1.svg"/>
                        <div className="all-products">All Products</div>
                      </div>
                      <a
                          className="empty"
                          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                          target="_blank"
                      >
                        604
                      </a>
                    </div>
                    <div className="frame-parent1">
                      <div className="vector-parent">
                        <img className="vector-icon3" alt="" src="/vector-2.svg"/>
                        <div className="mobile-phone-credit">
                          Mobile phone credit
                        </div>
                      </div>
                      <a
                          className="a"
                          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                          target="_blank"
                      >
                        38
                      </a>
                    </div>
                    <div className="frame-parent2">
                      <div className="vector-group">
                        <img className="vector-icon4" alt="" src="/vector-3.svg"/>
                        <a
                            className="e-commerce"
                            href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                            target="_blank"
                        >
                          E-Commerce
                        </a>
                      </div>
                      <a
                          className="a1"
                          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                          target="_blank"
                      >
                        54
                      </a>
                    </div>
                    <div className="frame-parent3">
                      <div className="vector-container">
                        <img className="vector-icon5" alt="" src="/vector-4.svg"/>
                        <div className="fashion-lifestyle">{`Fashion & Lifestyle`}</div>
                      </div>
                      <a
                          className="a2"
                          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                          target="_blank"
                      >
                        86
                      </a>
                    </div>
                    <div className="frame-parent4">
                      <div className="foods-and-restaurantssvg-parent">
                        <img
                            className="foods-and-restaurantssvg-icon"
                            loading="lazy"
                            alt=""
                            src="/foodsandrestaurantssvg.svg"
                        />
                        <a
                            className="foods-restaurants"
                            href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                            target="_blank"
                        >{`Foods & Restaurants`}</a>
                      </div>
                      <a
                          className="a3"
                          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                          target="_blank"
                      >
                        172
                      </a>
                    </div>
                    <div className="frame-parent5">
                      <div className="electronicssvg-parent">
                        <img
                            className="electronicssvg-icon"
                            alt=""
                            src="/electronicssvg.svg"
                        />
                        <div className="electronics">Electronics</div>
                      </div>
                      <a
                          className="a4"
                          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                          target="_blank"
                      >
                        11
                      </a>
                    </div>
                    <div className="frame-parent6">
                      <div className="home-and-gardensvg-parent">
                        <img
                            className="home-and-gardensvg-icon"
                            loading="lazy"
                            alt=""
                            src="/homeandgardensvg.svg"
                        />
                        <div className="home-garden">{`Home & Garden`}</div>
                      </div>
                      <a
                          className="a5"
                          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                          target="_blank"
                      >
                        45
                      </a>
                    </div>
                    <div className="frame-parent7">
                      <div className="health-spa-beautysvg-parent">
                        <img
                            className="health-spa-beautysvg-icon"
                            alt=""
                            src="/healthspabeautysvg.svg"
                        />
                        <a
                            className="health-spa"
                            href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                            target="_blank"
                        >{`Health, Spa & Beauty`}</a>
                      </div>
                      <a
                          className="a6"
                          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                          target="_blank"
                      >
                        17
                      </a>
                    </div>
                    <div className="frame-parent8">
                      <div className="travelsvg-parent">
                        <img
                            className="travelsvg-icon"
                            loading="lazy"
                            alt=""
                            src="/travelsvg.svg"
                        />
                        <a
                            className="travel-experiences"
                            href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                            target="_blank"
                        >{`Travel & Experiences`}</a>
                      </div>
                      <a
                          className="a7"
                          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                          target="_blank"
                      >
                        66
                      </a>
                    </div>
                    <div className="frame-parent9">
                      <div className="charitysvg-parent">
                        <img
                            className="charitysvg-icon"
                            alt=""
                            src="/charitysvg.svg"
                        />
                        <a
                            className="charity"
                            href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                            target="_blank"
                        >
                          Charity
                        </a>
                      </div>
                      <a
                          className="a8"
                          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                          target="_blank"
                      >
                        20
                      </a>
                    </div>
                    <div className="frame-parent10">
                      <div className="cryptosvg-parent">
                        <img
                            className="cryptosvg-icon"
                            loading="lazy"
                            alt=""
                            src="/cryptosvg.svg"
                        />
                        <a
                            className="crypto"
                            href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                            target="_blank"
                        >
                          Crypto
                        </a>
                      </div>
                      <a
                          className="a9"
                          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
                          target="_blank"
                      >
                        8
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <BreadCrumbs/>
            </div>
          </section>
          <Footer
              itemLinkImprinHref="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-24479"
              itemLinkImprinTarget="_blank"
              propDebugCommit="unset"
              propDebugCommit1="unset"
              propPadding="0px 0px 26.4px"
              propPadding1="0px 0px 25.9px"
              propDebugCommit2="unset"
              propWidth="unset"
              propDisplay="unset"
              propAlignSelf="stretch"
          />
        </div>

      </>
  );
};

export default ProductListings;
