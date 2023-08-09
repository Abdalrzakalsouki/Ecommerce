import { useNavigate } from "react-router-dom";
const ProductFavouriteCard = ({ image, title, prodcutId }) => {
  const navigate = useNavigate();
  const onProdcutClick = () => {
    navigate(`/product/${prodcutId}`);
  };

  return (
    <div className="product" onClick={() => onProdcutClick()}>
      <img className="product-image" src={image} alt="prodcut cover" />
      <p className="product-title">{title}</p>
    </div>
  );
};

export default ProductFavouriteCard;
