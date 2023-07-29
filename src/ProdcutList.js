import ProductCard from "./ProductCard";
import useFetch from "./useFetch";
const ProductList = ({ category }) => {
  let url = "";
  if (category !== "") {
    url = `https://fakestoreapi.com/products/category/${category}`;
  } else {
    url = "https://fakestoreapi.com/products";
  }
  const { data, loading, error } = useFetch(url);
  const selectedItems = data.filter((prodcut) => prodcut.category === category);
  const items = selectedItems.length !== 0 ? selectedItems : data;

  return (
    <div>
      {error ? (
        <div>Sorry, something went wrong: {error}</div>
      ) : loading ? (
        <div>Loading...</div>
      ) : (
        <ul className="products">
          {items.map((product) => (
            <li key={product.id} className="products-item">
              <ProductCard image={product.image} title={product.title} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
