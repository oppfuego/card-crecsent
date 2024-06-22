import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import "./CartDetails.css";

const CartDetails = () => {
  return (
    <div className="cart-details-1920">
      <FrameComponent1
        yourCart="Your Cart"
        viewOrEditYourCartBeforeC="View or edit your cart before checkout"
      />
      <FrameComponent />
      <Footer
        itemLinkImprinHref="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-24479"
        itemLinkImprinTarget="_blank"
      />
    </div>
  );
};

export default CartDetails;
