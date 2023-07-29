const ProductCard = ({ image, title }) => {
  return (
    <div className="product">
      <img className="product-image" src={image} alt="prodcut cover" />
      <p className="product-title">{title}</p>
    </div>
  );
};

export default ProductCard;
