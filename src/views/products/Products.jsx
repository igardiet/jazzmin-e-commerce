import { useContext, useEffect } from "react";
import Product from "../../components/product/Product";
import { ProductContext } from "../../context/ProductContext";
import { useSearchParams } from "react-router-dom";
import "./Products.css";

{
  /* DATABASE FETCH */
}
export const Products = () => {
  const { products, setProducts } = useContext(ProductContext);
  const url = "http://localhost:3000/dataBase";

  useEffect(() => {
    const productsData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      return setProducts(json);
    };
    productsData();
  }, [products]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const handleInput = ({ target }) => {
    const { value } = target;
    setSearchParams({ q: value });
  };


  return (
    <div className="productsStyles">
      {/* SEARCHBAR */}
      <input
        className="searchBar me-2"
        type="search"
        name="filter"
        value={query}
        placeholder="Search"
        aria-label="Search"
        onChange={handleInput}
      />

      {/* /// */}

      {/* PRODUCTS */}
      <div className="product">
        {products
          .filter(({ name }) => {
            if (!query) return true;
            else {
              const nameLowerCase = name.toLowerCase();
              return nameLowerCase.includes(query.toLowerCase());
            }
          })
          .map((product) => {
            return <Product {...product} key={product.name} />;
          })}
      </div>
      {/* /// */}
    </div>
  );
};
