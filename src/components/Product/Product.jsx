import React from "react";
import './Product.css'

const Product = ({ id, name, description, price, image }) => {
  return (
    // style="width: 18rem;"
    <div className="card" key={id}>
      <img src={image} className="card-img-top" alt="Synth image" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h5>{price}</h5>
        <p className="card-text">
          {description}
        </p>
        <button className="btn btn-primary">add to cart</button>
      </div>
    </div>
  );
};

export default Product;
