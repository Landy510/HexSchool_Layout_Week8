import { useParams } from "react-router-dom";
const Products = () => {
  const {name} = useParams();
  return (
    <div>Products</div>
  )
}

export default Products;