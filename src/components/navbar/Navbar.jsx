import { Link } from "react-router-dom";
import logo from "../../assets/images/jazzmin-logo.png";
import synths from "../../assets/images/keyboard-logo.png";
import cart from "../../assets/images/add-to-cart.png";
import wishList from "../../assets/images/wishlist-logo.png";
import "./Navbar.css";
import { useContext } from "react";
import { allContext } from "../../context/Context";

const Navbar = () => {
  const {products} = useContext(allContext)

  return (
    <nav className="navbar bg-body-tertiar navbarStyle">
      <div className="container-fluid navbar">
        <Link to="/">
          <img src={logo} alt="Jazzmin logo" className="logo" />
        </Link>
        <Link to="/products">
            <img src={synths} alt="Synths" className="synths" />
        </Link>
        <Link to="/cart">
            <img src={cart} alt="Cart" className="cart" />
          <span>{products.length}</span>
        </Link>
        <Link to="/wishlist">
            <img src={wishList} alt="Wish list" className="wishList" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
