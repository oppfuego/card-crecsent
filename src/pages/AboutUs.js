import Header from "../components/Header";
import FrameComponent7 from "../components/FrameComponent7";
import SectionWrapper from "../components/SectionWrapper";
import Footer from "../components/Footer";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us1">
      <Header />
      <FrameComponent7
        ourStory="Our Story"
        cardCrescentWasFoundedWit="CardCrescent was founded with a simple yet powerful idea: to make gifting easier, more convenient, and more meaningful. Our journey began with a shared passion for connecting people through the universal language of giving."
        rectangle4554="/rectangle-4554@2x.png"
      />
      <section className="about-us-inner">
        <div className="rectangle-parent">
          <img
            className="frame-child"
            loading="lazy"
            alt=""
            src="/rectangle-4554-1@2x.png"
          />
          <div className="frame-wrapper">
            <div className="our-mission-parent">
              <h1 className="our-mission">Our Mission</h1>
              <div className="driven-by-a">
                Driven by a desire to simplify and enhance the gifting
                experience, we set out to create a platform that would
                revolutionize the way people give and receive gifts.
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent7
        ourStory="What We Offer"
        cardCrescentWasFoundedWit="At CardCrescent, we offer a curated selection of digital gift cards spanning a wide range of categories and brands. From popular retailers and gaming platforms to fashion boutiques and dining establishments, our diverse collection ensures that there’s something for everyone, no matter their interests or preferences."
        rectangle4554="/rectangle-4554-2@2x.png"
      />
      <SectionWrapper />
      <Footer
        itemLinkImprinHref="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-24479"
        itemLinkImprinTarget="_blank"
        propDebugCommit="unset"
        propDebugCommit1="unset"
        propPadding="26.4px 0px 0px"
        propPadding1="25.9px 0px 0px"
        propDebugCommit2="unset"
        propWidth="21px"
        propDisplay="flex"
        propAlignSelf="unset"
      />
    </div>
  );
};

export default AboutUs;
