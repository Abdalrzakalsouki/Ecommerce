import prodcuts from "./fake-data/all-products";
const ProdcutList = (props) => {
  const selectedItems = prodcuts.filter(
    (prodcut) => prodcut.category === props.category
  );
  const items = selectedItems.length !== 0 ? selectedItems : prodcuts;
  return (
    <div className="prodcut-container">
      {items.map((prodcut) => (
        <ul className="products">
          <li key={prodcut.id} className="products-item">
            <div className="product">
              <img
                className="product-image"
                src={prodcut.image}
                alt="prodcut cover"
              />
              <p className="product-title">{prodcut.title}</p>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ProdcutList;
