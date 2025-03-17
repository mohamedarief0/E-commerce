import "./NavBar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <nav className="nav-bar">
        <img src={null} alt="logo" />

        <ul>
          <li>
            <input type="text" placeholder="search" className="input-search" />
          </li>
          <li>
            <Link to="/" className="no-style">
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" className="no-style">
              Product
            </Link>
          </li>
          <li>
            <Link to="/Contact-us" className="no-style">
              Contact us
            </Link>
          </li>
        </ul>

        <ul>
          
          <li>
            <Link to="/cart">
            <i className="ri-shopping-cart-line"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
