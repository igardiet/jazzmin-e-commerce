import { useParams } from "react-router-dom";
import data from "../../db.json";

{console.log('hola')}
console.log(data);

export const ProductDetailView = () => {
  const { id: productId } = useParams();
  const { id, name, description } = data.dataBase.find(
    (product) => product.id === parseInt(productId)
  );
  return (
    <div>
      {/* <h2>{name}</h2>
      <p>{description}</p>
      <span>{id}</span>
      {console.log(description)}
      {console.log(name)}
      {console.log(id)} */}
    </div>
  );
};
