import "./Cart.css";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";


const Cart = () => {
  const { products, setProducts } = useContext(ProductContext);
  const { cart, setCart } = useContext(CartContext);

  const deleteProduct = (id) => {
    let newCart = [...cart];
        newCart.forEach((data, key) => {
          if (data.id === id) {
            newCart.splice(key, 1)
          }
        })
        setCart(newCart)
      localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const total = products.reduce((prev, curr) => {
      return prev + curr.price;
    }, 0);

    setTotal(total);
  };
  useEffect(() => {
    if (!products.length) return;
    calculateTotal();
  }, [products]);

  return (
      <div className="cartStyles">
        {cart.map((cartItem, index) => {
          return (
            <div key={`${cartItem.id}-${index}`}>
              <p>{cartItem.name}</p>
              <p>{cartItem.price}</p>
              <button onClick={() => deleteProduct(cartItem.id)}>Delete</button>
            </div>
          );
        })}
        <div>
          <p>Total:{total}€</p>
        </div>
      </div>
  );
};
export default Cart;