import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <h1>Product Detail</h1>
      <p>{id}</p>
      <p>
        <Link to=".." relative="path">
          뒤로가기
        </Link>
      </p>
    </>
  );
};

export default ProductDetail;
