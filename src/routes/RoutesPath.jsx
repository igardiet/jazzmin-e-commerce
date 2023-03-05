import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/home/Home";
import Products from "../components/products/Products";
import Cart from "../components/cart/Cart";
import Wishlist from "../components/wishlist/Wishlist";

const RoutesPath = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default RoutesPath