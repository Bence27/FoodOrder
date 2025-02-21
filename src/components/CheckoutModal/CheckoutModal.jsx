import { forwardRef, useImperativeHandle, useRef, useContext } from "react";
import { createPortal } from "react-dom";
import { sendOrder } from "../../http.js";
import { CartContext } from "../../context/shopping-cart-context.jsx";

const CheckoutModal = forwardRef(function Modal({ onClose, totalPrice }, ref) {
  const dialog = useRef();
  const { items, clearCart } = useContext(CartContext);

  const formattedTotalPrice = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(totalPrice);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
      },
    };
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(event.target);
    const orderData = {
      customer: {
        email: formData.get("email"),
        name: formData.get("name"),
        street: formData.get("street"),
        "postal-code": formData.get("postal-code"),
        city: formData.get("city"),
      },
      price: totalPrice,
      items: items,
    };
    try {
      await sendOrder(orderData);
      form.reset();
      clearCart();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return createPortal(
    <dialog className="modal" ref={dialog}>
      <h2>Checkout</h2>
      <p>Total: {formattedTotalPrice}</p>
      <form onSubmit={handleSubmit}>
        <div className="control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="control">
          <label htmlFor="street">Street</label>
          <input type="text" id="street" name="street" required />
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="postal-code">Postal Code</label>
            <input type="text" id="postal-code" name="postal-code" required />
          </div>
          <div className="control">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" required />
          </div>
        </div>
        <div className="modal-actions">
          <button type="button" className="text-button" onClick={onClose}>
            Close
          </button>
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CheckoutModal;
