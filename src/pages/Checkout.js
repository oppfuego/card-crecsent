import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import FrameComponent2 from "../components/FrameComponent2";
import Footer from "../components/Footer";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout-1920">
      <FrameComponent2 />
      <section className="checkout-1920-inner">
        <div className="frame-parent">
          <form className="billing-header-parent">
            <div className="billing-header">
              <h1 className="checkout">Checkout</h1>
              <div className="header">
                <b className="billing-details">Billing Details</b>
              </div>
              <div className="form-field-block">
                <div className="row-1">
                  <div className="block-1">
                    <b className="first-name">First Name</b>
                  </div>
                  <div className="block-2">
                    <b className="last-name">Last Name</b>
                  </div>
                </div>
                <div className="row-2">
                  <div className="block-11">
                    <b className="company-name">Company Name</b>
                  </div>
                  <div className="block-21">
                    <b className="country">Country</b>
                    <img className="icon" alt="" src="/icon.svg" />
                  </div>
                </div>
                <div className="row-3">
                  <div className="block-12">
                    <b className="street-address">Street Address</b>
                  </div>
                </div>
                <div className="block-22">
                  <b className="apartment-suite">
                    Apartment / Suite / Unit / etc. (Optional)
                  </b>
                </div>
                <div className="row-4">
                  <div className="block-13">
                    <b className="town-city">Town / City</b>
                  </div>
                </div>
                <div className="block-23">
                  <b className="email-address">Email Address</b>
                </div>
                <div className="row-5">
                  <TextField
                    className="block-14"
                    placeholder="ZIP"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#fe7fb6" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#fff",
                        borderRadius: "5px",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": { color: "#000" },
                    }}
                  />
                  <div className="block-24">
                    <b className="phone">Phone</b>
                  </div>
                </div>
              </div>
              <div className="billing-separator" />
              <div className="billing-header-items">
                <Button
                  className="button"
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#1e1e1e",
                    fontSize: "16",
                    borderColor: "#fe7fb6",
                    borderRadius: "4px",
                    "&:hover": { borderColor: "#fe7fb6" },
                    width: 100,
                    height: 54,
                  }}
                >
                  Back
                </Button>
                <Button
                  className="button1"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#1e1e1e",
                    borderRadius: "4px",
                    "&:hover": { background: "#1e1e1e" },
                    width: 132,
                    height: 54,
                  }}
                >
                  Checkout
                </Button>
              </div>
            </div>
            <div className="checkout-details-parent">
              <div className="checkout-details">
                <Button
                  className="header1"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#000",
                    fontSize: "18",
                    background: "#99d1c4",
                    borderRadius: "5px",
                    "&:hover": { background: "#99d1c4" },
                    height: 54,
                  }}
                >
                  Checkout Details
                </Button>
                <div className="cart-subtotal-parent">
                  <b className="cart-subtotal">Cart Subtotal</b>
                  <b className="order-detail-values">$360.00</b>
                </div>
                <div className="shipping-handling-parent">
                  <b className="shipping-handling">{`Shipping & Handling`}</b>
                  <b className="b">$0.00</b>
                </div>
                <div className="other-taxes-parent">
                  <b className="other-taxes">Other Taxes</b>
                  <b className="b1">$0.00</b>
                </div>
                <div className="order-details-separator" />
                <div className="grand-total-parent">
                  <b className="grand-total">Grand Total</b>
                  <b className="b2">$360.00</b>
                </div>
              </div>
              <div className="transfer-options">
                <div className="header2">
                  <b className="transfer-options1">Transfer Options</b>
                </div>
                <div className="checkout-details1">
                  <div className="logos-block">
                    <div className="block-15">
                      <div className="logo-block">
                        <img
                          className="image-1-icon"
                          loading="lazy"
                          alt=""
                          src="/image-1@2x.png"
                        />
                      </div>
                      <b className="bank-transfer">
                        <p className="bank">Bank</p>
                        <p className="transfer">Transfer</p>
                      </b>
                    </div>
                    <div className="block-25">
                      <div className="logo-block1">
                        <img
                          className="image-2-icon"
                          loading="lazy"
                          alt=""
                          src="/image-2@2x.png"
                        />
                      </div>
                      <b className="google-pay">
                        <p className="google">Google</p>
                        <p className="pay">Pay</p>
                      </b>
                    </div>
                  </div>
                  <div className="block-3-parent">
                    <div className="block-3">
                      <div className="logo-block2">
                        <img
                          className="image-3-icon"
                          loading="lazy"
                          alt=""
                          src="/image-3@2x.png"
                        />
                      </div>
                      <b className="apple-pay">
                        <p className="apple">Apple</p>
                        <p className="pay1">Pay</p>
                      </b>
                    </div>
                    <div className="block-4">
                      <div className="logo-block3">
                        <img
                          className="image-4-icon"
                          loading="lazy"
                          alt=""
                          src="/image-4@2x.png"
                        />
                      </div>
                      <b className="paypal">PayPal</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="checkout1">
            <div className="header3">
              <b className="checkout2">Checkout</b>
            </div>
            <div className="checkout-details2">
              <div className="your-personal-data">
                Your Personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our product
              </div>
              <Button
                className="button2"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#1e1e1e",
                  borderRadius: "4px",
                  "&:hover": { background: "#1e1e1e" },
                  height: 54,
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer propHeight="unset" propPadding="unset" />
    </div>
  );
};

export default Checkout;
