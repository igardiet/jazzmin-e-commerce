import { Link } from "react-router-dom";
import logo from "../../assets/images/jazzmin-logo.png";
import homeLogo from "../../assets/images/home-logo.png";
import synths from "../../assets/images/keyboard-logo.png";
import cartImage from "../../assets/images/add-to-cart.png";
import checkout from "../../assets/images/checkout-logo.png";
import logInImage from "../../assets/images/login-logo.png";
import logOutImage from "../../assets/images/exit.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { LOGIN } from "../../routes/paths";
import { LOGOUT } from "../../routes/paths";
import "./Navbar.css";
import { Login } from "../../views/Login";

export const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar bg-body-tertiar navbarStyle">
      <div className="container-fluid navbar">
        <div className="navbarItems">
          <Link to="/">
            <img src={logo} alt="Jazzmin logo" className="logo" />
          </Link>
          <Link to="/">
            <img src={homeLogo} alt="Home logo" className="homeLogo" />
          </Link>
          <Link to={LOGOUT}>
            {!Login ? (
              <img src={logOutImage} alt="Log out" className="logOut" />
            ) : null}
          </Link>
          <Link to="/products">
            <img src={synths} alt="Synths" className="synths" />
          </Link>
          <Link to="/cart">
            <img src={cartImage} alt="Cart" className="cart" />
            {cart.length ? (
              <span className="redBalloon">{cart.length}</span>
            ) : null}
          </Link>
          <Link to="/checkout">
            <img src={checkout} alt="Wish list" className="checkout" />
          </Link>
          <Link to={LOGIN}>
            <img src={logInImage} alt="Log in" className="logIn" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
