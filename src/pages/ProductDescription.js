import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import Footer from "../components/Footer";
import "./ProductDescription.css";

const ProductDescription = () => {
  return (
    <div className="product-description">
      <FrameComponent10 />
      <FrameComponent9 />
      <div className="product-description-inner">
        <div className="backgroundborder-parent">
          <div className="backgroundborder">
            <FormControl
              className="heading-2-button"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "7px 7px 0px 0px",
                width: "93.05354558610708%",
                height: "63.70000000000073px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "63.70000000000073px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "63.70000000000073px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "63.70000000000073px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "63.70000000000073px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#1c1c1c",
                  fontSize: 18,
                  fontWeight: "Bold",
                  fontFamily: "Archivo",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "24px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="20px"
                    height="20px"
                    src="/image.svg"
                    style={{ marginRight: "24px" }}
                  />
                )}
              >
                <MenuItem>About Uber Eats</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <div className="uber-eats-description-list-wrapper">
              <div className="uber-eats-description-list">
                <div className="paragraphbackground">
                  <div className="paragraph-content">
                    <div className="the-uber-eats">
                      The Uber Eats Gift Card is the perfect way to treat your
                      loved ones to a culinary adventure from the comfort of
                      their own home. Whether they’re craving their favorite
                      local restaurant or looking to explore new flavors, this
                      gift card unlocks a world of delicious possibilities.
                    </div>
                    <div className="the-uber-eats1">
                      The Uber Eats Gift Card is the perfect way to satisfy
                      cravings, explore new flavors, and create unforgettable
                      dining experiences from the comfort of home. Surprise your
                      loved ones with the gift of deliciousness and convenience
                      – because great food is always just a delivery away.
                    </div>
                  </div>
                </div>
                <div className="key-features-access-container">
                  <p className="key-features">Key Features</p>
                  <p className="blank-line">&nbsp;</p>
                  <ul className="access-to-thousands-of-restaur">
                    <li className="access-to-thousands-of-restaur1">
                      <span className="access-to-thousands">
                        Access to Thousands of Restaurants: With the Uber Eats
                        Gift Card, recipients gain access to a vast selection of
                        restaurants, cuisines, and dishes available for
                        delivery.
                      </span>
                    </li>
                    <li className="convenient-delivery-say-goodb">
                      <span className="convenient-delivery-say">
                        Convenient Delivery: Say goodbye to cooking and cleaning
                        – with Uber Eats, recipients can enjoy their favorite
                        meals delivered straight to their doorstep with just a
                        few taps on their smartphone.
                      </span>
                    </li>
                    <li className="personalized-dining-experience">
                      <span className="personalized-dining-experience1">
                        Personalized Dining Experience: From comfort food
                        classics to gourmet delights, Uber Eats offers something
                        for every taste and craving, allowing recipients to
                        customize their dining experience to suit their
                        preferences.
                      </span>
                    </li>
                    <li className="flexible-usage-the-uber-eats">
                      <span className="flexible-usage-the">
                        Flexible Usage: The Uber Eats Gift Card can be used for
                        both food and beverage orders, providing recipients with
                        the flexibility to enjoy a complete dining experience
                        from appetizers to desserts.
                      </span>
                    </li>
                    <li>
                      <span className="instant-digital-delivery">
                        Instant Digital Delivery: Delivered instantly via email,
                        making it the perfect last-minute gift for any occasion.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="why-choose-the-container">
                  <p className="why-choose-the">
                    Why Choose the Uber Eats Gift Card?
                  </p>
                  <p className="blank-line1">&nbsp;</p>
                  <ul className="versatility-ideal-for-foodies">
                    <li className="versatility-ideal-for-foodies1">
                      <span className="versatility-ideal-for">
                        Versatility: Ideal for foodies, busy professionals,
                        students, and anyone who enjoys delicious meals
                        delivered straight to their door, the Uber Eats Gift
                        Card offers a convenient and flexible dining solution
                        for every lifestyle.
                      </span>
                    </li>
                    <li className="convenience-skip-the-hassle-o">
                      <span className="convenience-skip-the">
                        Convenience: Skip the hassle of cooking or dining out –
                        with Uber Eats, recipients can enjoy restaurant-quality
                        meals without leaving the comfort of home.
                      </span>
                    </li>
                    <li className="accessibility-with-the-uber-e">
                      <span className="accessibility-with-the">
                        Accessibility: With the Uber Eats app available on both
                        iOS and Android devices, ordering delicious meals has
                        never been easier.
                      </span>
                    </li>
                    <li>
                      <span className="personalization-whether-its">
                        Personalization: Whether it’s a cozy night in, a virtual
                        dinner party with friends, or a celebratory feast,
                        recipients can use their gift card to curate the perfect
                        dining experience tailored to their preferences.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="how-to-redeem-container">
                  <p className="how-to-redeem">How to Redeem</p>
                  <p className="blank-line2">&nbsp;</p>
                  <ol className="open-the-uber-eats-app-downlo">
                    <li className="open-the-uber-eats-app-downlo1">
                      <span className="open-the-uber">
                        Open the Uber Eats App: Download the Uber Eats app or
                        visit the website.
                      </span>
                    </li>
                    <li className="sign-in-or-create-an-account">
                      <span className="sign-in-or">
                        Sign in or Create an Account: Log in to your Uber
                        account or create a new one if you don’t have one
                        already.
                      </span>
                    </li>
                    <li className="navigate-to-the-payment-sectio">
                      <span className="navigate-to-the">
                        Navigate to the Payment Section: Select the “Payment”
                        tab from the app menu.
                      </span>
                    </li>
                    <li className="enter-the-gift-card-code-ente">
                      <span className="enter-the-gift">
                        Enter the Gift Card Code: Enter the unique code provided
                        on the gift card.
                      </span>
                    </li>
                    <li>
                      <span className="enjoy-your-meal">
                        Enjoy Your Meal: Browse restaurants, select your
                        favorite dishes, and place your order. Sit back, relax,
                        and enjoy your delicious meal delivered straight to your
                        door.
                      </span>
                    </li>
                  </ol>
                </div>
                <div className="start-dining-delightfully-container">
                  <span>
                    <p className="start-dining-delightfully">
                      Start Dining Delightfully Today!
                    </p>
                    <p className="surprise-your-friends">
                      Surprise your friends, family, or yourself with the Uber
                      Eats Gift Card. Whether it’s a special occasion or a
                      weekday treat, elevate your dining experience with the
                      convenience and deliciousness of Uber Eats.
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="backgroundborder-group">
            <div className="backgroundborder1">
              <b className="help-instructions">{`Help & Instructions`}</b>
              <div className="image-wrapper">
                <img className="image-icon" alt="" src="/image-1.svg" />
              </div>
            </div>
            <div className="backgroundborder2">
              <div className="heading-2-button1">
                <b className="terms-conditions">{`Terms & Conditions`}</b>
                <div className="image-container">
                  <img className="image-icon1" alt="" src="/image-1.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-payment-methods" />
      <FrameComponent8 />
      <Footer
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

export default ProductDescription;
