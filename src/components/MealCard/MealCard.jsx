import { useContext } from "react";
import { CartContext } from "../../context/shopping-cart-context.jsx";
export default function MealCard({ meal }) {
  const formattedPrice = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(meal.price);

  const { addItemToCart } = useContext(CartContext);
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{formattedPrice}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <button className="button" onClick={() => addItemToCart(meal)}>
            Add to Cart
          </button>
        </p>
      </article>
    </li>
  );
}
