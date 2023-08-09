import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import Navbar from "../components/Navbar";
const ProdcutDetails = () => {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  const { data, loading, error } = useFetch(url);
  return (
    <div>
      <Navbar />
      {error ? (
        <div>Could not load the prodcut</div>
      ) : loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1> {data.title} </h1>
          <div className="prodcut-details">
            <img
              className="prodcut-details-image"
              src={data.image}
              alt="product"
            />
            <p className="prodcut-details-description">{data.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProdcutDetails;
