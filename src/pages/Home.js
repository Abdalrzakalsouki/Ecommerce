import CategoriesList from "../components/CategoriesList";
import ProductList from "../components/ProductList";
import Navbar from "../components/Navbar";
import { useState } from "react";
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const onSelectCategory = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  };
  return (
    <div>
      <h1>Prodcuts</h1>
      <Navbar />
      <CategoriesList
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      <ProductList category={selectedCategory} />
    </div>
  );
};

export default Home;
