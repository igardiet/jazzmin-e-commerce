import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LOGIN, LOGOUT, CART, CHECKOUT, PRODUCTS } from "../routes/paths";
import Login from "../views/Login";
import { Logout } from "../views/Logout";
import { Home } from "../views/home/Home";
import { Products } from "../views/products/Products";
import { Cart } from "../views/cart/Cart";
import { Checkout } from "../views/checkout/Checkout";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { ProductDetailView } from "../components/productDetailView/ProductDetailView";
import PrivateRoute from "./PrivateRoute";

export const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Navigate to="/" />} />
        <Route index element={<Home />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={PRODUCTS} element={<Products />} />
        <Route path="products/:id" element={<ProductDetailView />} />
        <Route path={CART} element={<Cart />} />
        <Route path={CHECKOUT} element={<PrivateRoute />}>
          <Route index element={<Checkout />} />
          <Route path={LOGOUT} element={<Logout />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};
