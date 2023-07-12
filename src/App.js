import CategoriesList from "./CategoriesList";
import ProdcutList from "./ProdcutList";
import { useState } from "react";
import "./app.css";
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div>
      <h1>Prodcuts</h1>
      <CategoriesList setSelectedCategory={setSelectedCategory} />
      <ProdcutList category={selectedCategory} />
    </div>
  );
};

export default App;
