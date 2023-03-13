import { useContext } from "react";
import addToCartImage from "../../assets/images/logos/add-to-cart.png";
import addToCheckout from "../../assets/images/logos/checkout-logo.png";
import { CartContext } from "../../context/CartContext";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ id, name, description, price, image }) => {
  const { cart, setCart } = useContext(CartContext);
  const uID = uuidv4();
  const navigate = useNavigate();
  const addToCart = () => {
    setCart([...cart, { id: uID, name, description, image, price }]);
    const newCart = [...cart, { id: uID, name, description, image, price }];
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div className="card" key={id}>
      <img
        src={image}
        className="card-img-top synthImage"
        alt="Synth"
        onClick={() => navigate(`${id.toString()}`)}
      />
      <div className="cardBody">
        <div className="nameAndPrice">
          <h5 className="card-title">{name}</h5>
          <h5>€ {price}</h5>
        </div>
        <p className="card-text">{description}</p>
        <div className="cardRedButtons">
          <img
            src={addToCartImage}
            alt="Add to cart"
            className="addToCart"
            onClick={() => addToCart()}
          />
          <img src={addToCheckout} alt="Checkout" className="addToCheckout" />
        </div>
      </div>
    </div>
  );
};

export default Product;
