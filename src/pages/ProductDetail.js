import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <h1>Product Detail</h1>
      <p>{id}</p>
    </>
  );
};

export default ProductDetail;
