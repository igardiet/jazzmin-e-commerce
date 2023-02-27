import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/jazzmin-logo.png";
import cart from "../../assets/images/add-to-cart.png";
import searchLogo from "../../assets/images/search-logo.png";
import wishList from "../../assets/images/wishlist-logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiar navbarStyle">
      <div className="container-fluid">
        <Link to="/">
          <img src={logo} alt="Jazzmin logo" className="logo" />
        </Link>
        <form className="d-flex" role="search">
          <Link to="/cart">
            <img src={cart} alt="Cart" className="cart" />
          </Link>
          <Link to="/wishlist">
            <img src={wishList} alt="Wish list" className="wishList" />
          </Link>
          <Link>
            <input
              className="searchBar me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </Link>
          <Link to="">
            <img src={searchLogo} alt="Search logo" className="searchLogo" />
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
