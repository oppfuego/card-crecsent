import PropTypes from "prop-types";
import "./SectionWrapper.css";

const SectionWrapper = ({ className = "" }) => {
  return (
    <section className={`section-wrapper ${className}`}>
      <div className="section2">
        <div className="heading-2-history-wrapper">
          <h1 className="heading-25">History</h1>
        </div>
        <div className="tablist">
          <div className="backgroundborder19">
            <div className="tab">
              <div className="september-2023">
                <p className="september">September</p>
                <p className="p">2023</p>
              </div>
            </div>
          </div>
          <div className="backgroundborder20">
            <div className="june-2023">
              <p className="june">June</p>
              <p className="p1">2023</p>
            </div>
          </div>
          <div className="backgroundborder21">
            <div className="july-2022">
              <p className="july">July</p>
              <p className="p2">2022</p>
            </div>
          </div>
          <div className="backgroundborder22">
            <div className="januaray-2022">
              <p className="januaray">Januaray</p>
              <p className="p3">2022</p>
            </div>
          </div>
          <div className="backgroundborder23">
            <div className="september-2021">
              <p className="september1">September</p>
              <p className="p4">2021</p>
            </div>
          </div>
          <div className="backgroundborder24">
            <div className="june-2021">
              <p className="june1">June</p>
              <p className="p5">2021</p>
            </div>
          </div>
          <div className="backgroundborder25">
            <div className="march-2021">
              <p className="march">March</p>
              <p className="p6">2021</p>
            </div>
          </div>
          <div className="backgroundborder26">
            <div className="august-2020">
              <p className="august">August</p>
              <p className="p7">2020</p>
            </div>
          </div>
          <div className="backgroundborder27">
            <div className="july-2020">
              <p className="july1">July</p>
              <p className="p8">2020</p>
            </div>
          </div>
          <div className="backgroundborder28">
            <div className="june-2020">
              <p className="june2">June</p>
              <p className="p9">2020</p>
            </div>
          </div>
          <div className="backgroundborder29">
            <div className="may-2020">
              <p className="may">May</p>
              <p className="p10">2020</p>
            </div>
          </div>
          <div className="backgroundborder30">
            <div className="february-2020">
              <p className="february">February</p>
              <p className="p11">2020</p>
            </div>
          </div>
          <div className="backgroundborder31">
            <div className="september-2019">
              <p className="september2">September</p>
              <p className="p12">2019</p>
            </div>
          </div>
          <div className="backgroundborder32">
            <div className="january-2019">
              <p className="january">January</p>
              <p className="p13">2019</p>
            </div>
          </div>
        </div>
        <div className="tabpanel-wrapper">
          <div className="tabpanel">
            <h1 className="heading-4">Over 3000 Brands Available</h1>
            <div className="coinsbeecom-product-offering-container">
              <span className="coinsbeecom-product-offering-container1">
                <p className="coinsbeecom-product-offering">
                  Coinsbee.com product offering expands to over 3000 Brands from
                  all over the
                </p>
                <p className="globe">globe.</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SectionWrapper.propTypes = {
  className: PropTypes.string,
};

export default SectionWrapper;
