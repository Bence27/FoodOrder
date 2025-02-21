import { useContext } from "react";
import { CartContext } from "../../context/shopping-cart-context.jsx";

export default function Cart() {
  const { items, updateItemQuantity } = useContext(CartContext);
  const cartTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const formattedCartTotal = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(cartTotal);
  return (
    <div className="cart">
      <ul>
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <div>
              <h3>{item.name}</h3>
              <p>
                Price:{" "}
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "EUR",
                }).format(item.price)}
              </p>
            </div>
            <div className="cart-item-actions">
              <button onClick={() => updateItemQuantity(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateItemQuantity(item.id, 1)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <strong>{formattedCartTotal}</strong>
      </div>
    </div>
  );
}
