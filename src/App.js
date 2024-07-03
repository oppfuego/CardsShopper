import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductListing from "./pages/ProductListing";
import Pdp from "./pages/Pdp";
import CheckoutCart from "./pages/CheckoutCart";
import CheckoutCart1 from "./pages/CheckoutCart1";
import SignUp from "./pages/SignUp";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import CancellationPolicy from "./pages/CancellationPolicy";

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
      case "/product-listing":
        title = "";
        metaDescription = "";
        break;
      case "/pdp":
        title = "";
        metaDescription = "";
        break;
      case "/checkout-cart":
        title = "";
        metaDescription = "";
        break;
      case "/checkout-cart1":
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
      <Route path="/" element={<Homepage />} />
      <Route path="/product-listing" element={<ProductListing />} />
      <Route path="/pdp" element={<Pdp />} />
      <Route path="/checkout-cart" element={<CheckoutCart />} />
      <Route path="/checkout-cart1" element={<CheckoutCart1 />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="/terms" element={<TermsConditions />} />
      <Route path="/policy" element={<RefundPolicy />} />
      <Route path="/cancellation" element={<CancellationPolicy />} />

    </Routes>
  );
}
export default App;
