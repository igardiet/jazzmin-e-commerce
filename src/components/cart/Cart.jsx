import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./Cart.css";
import { useContext, useEffect, useState } from "react";
import { allContext } from "../../context/Context";

const Cart = () => {
  const { products, setProducts } = useContext(allContext);

  const deleteProduct = (id) => {
    const filterProduct = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(filterProduct);
  };

  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const total = products.reduce((prev, curr) => {
      return prev + curr.price;
    }, 0);

    setTotal(total);
  };
  console.log(products);
  useEffect(() => {
    if (!products.length) return;
    calculateTotal();
  }, [products]);

  return (
    <div>
      <Navbar />
      <div className="cartStyles">
        {products.map((product, index) => {
          return (
            <div key={`${product.id}-${index}`}>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
            </div>
          );
        })}
        <div>
          <p>Total:{total}€</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Cart;
