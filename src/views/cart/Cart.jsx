import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
// import { ProductContext } from "../../context/ProductContext";

export const Cart = () => {
  // const { products, setProducts } = useContext(ProductContext);
  const { cart, setCart } = useContext(CartContext);

  const deleteProduct = (id) => {
    let newCart = [...cart];
    newCart.forEach((data, key) => {
      if (data.id === id) {
        newCart.splice(key, 1);
      }
    });
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const total = cart.reduce((prev, curr) => {
      return prev + curr.price;
    }, 0);

    setTotal(total);
  };
  useEffect(() => {
    calculateTotal();
  }, [cart]);
  return (
    <div className="cartStyles">
      {cart.map((cartItem, index) => {
        return (
          
          <div className="card cardCart" key={`${cartItem.id}-${index}`}>
            <div className="card-header">
              <p>{cartItem.name}</p>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <p>€ {cartItem.price}</p>
              </h5>

              <button
                onClick={() => deleteProduct(cartItem.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
      <div>{total !== 0 && <p>Total: € {total}</p>}</div>
      <div>{total !== 0 && <button className="btn btn-success" style={{marginBottom: '3rem'}}>Buy</button>}</div>
    </div>
  );
};
