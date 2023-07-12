import categories from "./fake-data/all-categories";
import { useState } from "react";
const CategoriesList = (props) => {
  const [active, setActive] = useState(false);

  function onSelect(categorie) {
    const value = categorie.replace("FAKE: ", "");
    props.setSelectedCategory(value);
    setActive(!active);
  }
  return (
    <div className="categories">
      {categories.map((categorie, index) => (
        <div
          key={index}
          onClick={() => onSelect(categorie)}
          className={
            active
              ? "categories-item categories-item-selected"
              : "categories-item"
          }
        >
          {categorie}
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;
