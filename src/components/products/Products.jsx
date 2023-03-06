import { useContext, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Product from "../product/Product";
import dataBase from "../../assets/db/db";
import './Products.css'
import { allContext } from "../../context/Context";

const Products = () => {
  const [query, setQuery] = useState("");
  const {products} = useContext(allContext)

  return (
    <div>
      <Navbar />

      <div className="productsStyles">
        {/* SEARCHBAR */}
      <input
        className="searchBar me-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      
      {/* /// */}

      {/* PRODUCTS */}
      <div className="product">
        {dataBase
          .filter((product) => product.name.toLowerCase().includes(query))
          .map((product) => {
            return <Product {...product} key={product.name} />;
          })}          
      </div>

      {/* /// */}
      </div>

      <Footer />
    </div>
  );
};

export default Products;
