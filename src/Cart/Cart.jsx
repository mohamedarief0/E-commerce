import { useSelector, useDispatch } from "react-redux";
import NavBar from "../components/NavBar/NavBar";
import "./Cart.css"; // Ensure you add styles for horizontal layout

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.cartItems) || [];

  console.log("Cart Items:", cartItems);

  return (
    <>
      <NavBar />
      <div className="cart-container">
        {cartItems.map((item, index) => (
          <div className="cart-item" key={`${item.id}-${index}`}>
            <img src={item.image} alt={item.title} className="cart-image" />
            <div className="cart-details">
              <p className="product-title">{item.title}</p>
              <p className="product-price">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <div className="quantity-control">
                <button>-</button>
                <span>{item.quantity}</span>
                <button>+</button>
              </div>
              <button
                className="btn-remove"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
