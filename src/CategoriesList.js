import { useState } from "react";
import useFetch from "./useFetch";
const CategoriesList = ({ setSelectedCategory }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  function onSelect(category, index) {
    if (activeIndex !== index) {
      const value = category.replace("FAKE: ", "");
      setSelectedCategory(value);
      setActiveIndex(index);
    } else {
      setSelectedCategory("");
      setActiveIndex(-1);
    }
  }
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  return (
    <div className="categories">
      {error ? (
        <div>Sorry, something went wrong</div>
      ) : loading ? (
        <div>Loading...</div>
      ) : (
        data.map((category, index) => (
          <div
            key={index}
            onClick={() => onSelect(category, index)}
            className={
              activeIndex === index
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
