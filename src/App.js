import CategoriesList from "./CategoriesList";
import ProductList from "./ProductList";
import { useState } from "react";
import "./app.css";
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div>
      <h1>Prodcuts</h1>
      <CategoriesList setSelectedCategory={setSelectedCategory} />
      <ProductList category={selectedCategory} />
    </div>
  );
};

export default App;
