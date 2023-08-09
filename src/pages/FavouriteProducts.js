import { useContext } from "react";
import Navbar from "../components/Navbar";
import { FavouriteContext } from "../utils/FavouriteContext";
import useFetchs from "../utils/useFetchs";
import ProductFavouriteCard from "../components/ProductFavouriteCard";
const FavouriteProducts = () => {
  const { ids } = useContext(FavouriteContext);
  const { data, loading, error } = useFetchs(ids);
  return (
    <div>
      <h1>Favorite page</h1>
      <Navbar />
      <div>
        {error ? (
          <div className="centering error">
            Sorry, something went wrong: {error}
          </div>
        ) : loading ? (
          <div className="centering">Loading...</div>
        ) : (
          <ul className="products">
            {data.map((product) => (
              <li key={product.id} className="products-item">
                <ProductFavouriteCard
                  prodcutId={product.id}
                  image={product.image}
                  title={product.title}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FavouriteProducts;
