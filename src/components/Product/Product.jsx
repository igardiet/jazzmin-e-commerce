import React from "react";
import { Link } from 'react-router-dom'
import addToCart from '../../assets/images/add-to-cart.png'
import addToWishList from '../../assets/images/wishlist-logo.png'
import './Product.css'

const Product = ({ id, name, description, price, image }) => {
  return (
    // style="width: 18rem;"
    <div className="card" key={id}>
      <img src={image} className="card-img-top synthImage" alt="Synth" />
      <div className="cardBody">
        <h5 className="card-title">{name}</h5>
        <h5>{price}</h5>
        <p className="card-text">{description}</p>
        <Link to={'/cart'}><img src={addToCart} alt="Add to cart" className="addToCart" /></Link>
        <Link to={'/wishlist'}><img src={addToWishList} alt="Wishlist" className="addToWishList" /></Link>
      </div>
    </div>
  );
};

export default Product;
