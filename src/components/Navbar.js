import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">
        Prodcuts
      </Link>
      <Link to="/favourites" className="navbar-link">
        Favourites
      </Link>
    </div>
  );
};
export default Navbar;
