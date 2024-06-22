import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`f-a-q-container-wrapper ${className}`}>
      <div className="f-a-q-container">
        <div className="f-a-q-heading-container">
          <h1 className="heading-23">FAQ</h1>
        </div>
        <div className="f-a-q-list">
          <div className="backgroundborder-container">
            <div className="backgroundborder7">
              <div className="heading-2-button2">
                <div className="how-do-i">
                  How do I purchase a gift card on CardCrescent?
                </div>
                <img className="image-icon2" alt="" src="/image.svg" />
              </div>
            </div>
            <div className="backgroundborder8">
              <div className="heading-2-button3">
                <div className="what-types-of">
                  What types of gift cards are available?
                </div>
                <img className="image-icon3" alt="" src="/image.svg" />
              </div>
            </div>
            <div className="backgroundborder9">
              <div className="heading-2-button4">
                <div className="how-is-the">
                  How is the gift card delivered?
                </div>
                <img className="image-icon4" alt="" src="/image.svg" />
              </div>
            </div>
            <div className="backgroundborder10">
              <div className="heading-2-button5">
                <div className="can-i-customize">
                  Can I customize the gift card?
                </div>
                <img className="image-icon5" alt="" src="/image.svg" />
              </div>
            </div>
            <div className="backgroundborder11">
              <div className="heading-2-button6">
                <div className="what-games-can">
                  What games can I buy with crypto?
                </div>
                <img className="image-icon6" alt="" src="/image.svg" />
              </div>
            </div>
          </div>
          <div className="backgroundborder-parent1">
            <div className="backgroundborder12">
              <div className="heading-2-button7">
                <div className="can-i-send">
                  Can I send a gift card to someone in another country?
                </div>
                <img className="image-icon7" alt="" src="/image.svg" />
              </div>
            </div>
            <div className="backgroundborder13">
              <div className="heading-2-button8">
                <div className="what-payment-methods">
                  What payment methods are accepted?
                </div>
                <img className="image-icon8" alt="" src="/image.svg" />
              </div>
            </div>
            <div className="backgroundborder14">
              <div className="heading-2-button9">
                <div className="what-should-i">
                  What should I do if the recipient didn’t receive the gift
                  card?
                </div>
                <img className="image-icon9" alt="" src="/image.svg" />
              </div>
            </div>
            <div className="backgroundborder15">
              <div className="heading-2-button10">
                <div className="can-i-return">
                  {" "}
                  Can I return or exchange a gift card?
                </div>
                <img className="image-icon10" alt="" src="/image.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
