import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../views/home/Home";
import Products from "../views/products/Products";
import Cart from "../views/cart/Cart";
import Wishlist from "../views/wishlist/Wishlist";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { ProductDetailView } from "../components/productDetailView/ProductDetailView";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/"> */}
            {/* <Route index element={<Home />} /> */}
            {/* <Route path="/*" element={<Navigate to="/" />} /> */}
            <Route path="/" element={<Navigate to='/home' />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="product/:id" element={<ProductDetailView />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
          {/* </Route> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
export default AppRouter;
