import useFetch from "../utils/useFetch";

const CategoriesList = ({ selectedCategory, onSelectCategory }) => {
  const url = "https://fakestoreapi.com/products/categories";
  const { data, loading, error } = useFetch(url);
  return (
    <div className="categories">
      {error ? (
        <div className="centering error">Sorry, something went wrong</div>
      ) : loading ? (
        <div className="centering">Loading...</div>
      ) : (
        data.map((category, index) => (
          <div
            key={index}
            onClick={() => onSelectCategory(category)}
            className={
              selectedCategory === category
                ? "categories-item categories-item-selected"
                : "categories-item"
            }
          >
            {category}
          </div>
        ))
      )}
    </div>
  );
};
export default CategoriesList;
