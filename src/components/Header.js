import PropTypes from "prop-types";
import "./Header.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaEarthEurope } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import {Link} from "react-router-dom";

const Header = ({ className = "" }) => {
  return (
    <header className={`header1 ${className}`}>
      <div className="section1">
        <div className="background6">
          <nav className="logo-container1">
            <div className="logo2">
              <div className="crescent-icon-parent">
                <Link to="/">
                  <img
                      className="crescent-icon"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                  />
                </Link>
                <div className="cardcrescent2">
                  <span>Card</span>
                  <span className="crescent2">Crescent</span>
                </div>
              </div>
            </div>
            <div className="search-bar-container">
              <div className="background7">
                <div className="search-input-container">
                  <div className="input1">
                    <div className="what-are-you1">
                      What are you looking for?
                    </div>
                  </div>
                </div>
                <div className="rectangle1" />
                <div className="button20">
                  <div className="symbol28"><FaMagnifyingGlass/></div>
                </div>
              </div>
            </div>
            <div className="user-actions-container">
              <div className="user-actions1">
                <div className="button21">
                  <div className="symbol29"><FaEarthEurope/></div>
                  <div className="language-code-container">
                    <div className="en2">EN</div>
                    <div className="language-dropdown-icon-contain">
                      <div className="symbol30"><IoIosArrowDown/></div>
                    </div>
                  </div>
                </div>
                <div className="button-show-login-dialog1">
                  <Link to="/sign-in">
                    <a
                        className="symbol31"
                        href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-2349"
                        target="_blank"
                    >
                      <FaUser/>
                    </a>
                  </Link>

                </div>
                <div className="button-show-products-in-cart1">
                  <a
                      className="symbol32"
                      href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-2858"
                    target="_blank"
                  >
                    <MdOutlineLogin/>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="nav1">
          <div className="list2">
            <a
              className="item-link36"
              href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-2858"
              target="_blank"
            >
              All products
            </a>
            <a
              className="item-link37"
              href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-2038"
              target="_blank"
            >
              Mobile phone credit
            </a>
            <a
              className="item-link38"
              href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
              target="_blank"
            >
              E-Commerce
            </a>
            <div className="item-link39">Games</div>
            <div className="item-link40">Entertainment</div>
            <div className="item-link41">{`Fashion & Lifestyle`}</div>
            <div className="item-link42">{`Foods & Restaurants`}</div>
            <div className="item-link43">Electronics</div>
            <div className="item-link44">{`Home & Garden`}</div>
            <div className="item-link45">{`Health, Spa & Beauty`}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
