import { useContext } from 'react';
import addToCart from '../../assets/images/add-to-cart.png'
import addToWishList from '../../assets/images/wishlist-logo.png'
import { allContext } from '../../context/Context';
import './Product.css'


const Product = ({ id, name, description, price, image}) => {
  const { products, setProducts } = useContext(allContext)
  const addProduct = () => {
    setProducts([...products, {id, name, description, price, image}])
  }
  
  return (
    <div className="card" key={id}>
      <img src={image} className="card-img-top synthImage" alt="Synth" />
      <div className="cardBody">
        <h5 className="card-title">{name}</h5>
        <h5>{price}</h5>
        <p className="card-text">{description}</p>
        <img src={addToCart} alt="Add to cart" className="addToCart" onClick={addProduct} />
        <img src={addToWishList} alt="Wishlist" className="addToWishList" />
      </div>
    </div>
  );
};

export default Product;
