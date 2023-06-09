import { Link } from "react-router-dom";

const PRODUCTS_DUMMY = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const ProductsPage = () => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {PRODUCTS_DUMMY.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id} relative="">
              {prod.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
