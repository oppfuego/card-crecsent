import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import HowItWorks from "./pages/HowItWorks";
import AboutUs from "./pages/AboutUs";
import ProductDescription from "./pages/ProductDescription";
import ProductListings from "./pages/ProductListings";
import SignIn from "./pages/SignIn";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import CancellationPolicy from "./pages/CancellationPolicy";
import CookiePolicy from "./pages/CookiePolicy";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/how-it-works":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/product-description":
        title = "";
        metaDescription = "";
        break;
      case "/product-listings":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/product-description" element={<ProductDescription />} />
      <Route path="/product-listings" element={<ProductListings />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/refund-policy" element={<RefundPolicy/>} />
      <Route path="/cancellation-policy" element={<CancellationPolicy />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
    </Routes>
  );
}
export default App;
