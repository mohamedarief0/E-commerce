import { useEffect, useState } from "react";
import { addItems } from "../reducer/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar/NavBar";
import axios from "axios";
import "./Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleClick = (product) => {
    dispatch(addItems(product));
  };

  return (
    <>
      <NavBar />
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <div className="grid-container">
        <div className={`menu-container ${menuOpen ? "open" : ""}`}>
          <h5  className="menu-title">Category</h5>
          <ul className="unorder-list">
            <li className="item-list">
              <input type="checkbox" name="mens" /> mens
            </li>
            <li className="item-list">
              <input type="checkbox" name="womens" /> womens
            </li>
            <li className="item-list">
              <input type="checkbox" name="jewelry" /> jewelry
            </li>
            <li className="item-list">
              <input type="checkbox" name="electronics" /> electronics
            </li>
          </ul>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <div className="card-body" key={product.id}>
              <img src={product.image} alt={product.title} />
              <p className="product-title">{product.title}</p>
              <div className="rating">
                <i className="ri-star-fill"></i>
                <span>
                  {product.rating.rate} ({product.rating.count})
                </span>
              </div>
              <p className="product-price">${product.price}</p>
              <div className="button-group">
                <button
                  type="button"
                  className="btn btn-yellow"
                  onClick={() => handleClick(product)}
                >
                  Add to Cart
                </button>
                <button type="button" className="btn btn-white">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
