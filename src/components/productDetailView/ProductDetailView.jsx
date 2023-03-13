import { Navigate, useParams } from "react-router-dom";
import data from "../../db.json";
import "./ProductDetailView.css";

export const ProductDetailView = () => {
  const { id: productId } = useParams();
  const product = data.dataBase.find((product) => {
    return product.id === parseInt(productId);
  });
  if (!product) {
    return <Navigate to={"/products"} />;
  }
  const { name, price, description } = product;
  return (
    <div className="productDetailViewStyles">
      <h2 className="name">{name}</h2>
      <span className="price">€{price}</span>
      <span className="desc">{description}</span>
    </div>
  );
};