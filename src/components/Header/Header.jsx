import { useContext, useRef } from "react";
import { CartContext } from "../../context/shopping-cart-context.jsx";
import headerImg from "../../assets/logo.jpg";
import CartModal from "../CartModal/CartModal.jsx";
import CheckoutModal from "../CheckoutModal/CheckoutModal.jsx";
export default function Header() {
  const { items } = useContext(CartContext);
  const cartModalRef = useRef();
  const checkoutModalRef = useRef();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const openCartHandler = () => {
    cartModalRef.current.open();
  };

  const openCheckoutHandler = () => {
    checkoutModalRef.current.open(); // CheckoutModal megnyitása
  };

  const closeCheckoutHandler = () => {
    checkoutModalRef.current.close(); // CheckoutModal bezárása
  };

  return (
    <div id="main-header">
      <div id="title">
        <img src={headerImg} alt="header" />
        <h1>React Food</h1>
      </div>
      <button className="button" onClick={openCartHandler}>
        Cart ({items.length})
      </button>
      <CartModal
        ref={cartModalRef}
        title="Your Cart"
        actions={
          <div className="modal-actions">
            <button className="text-button">Close</button>
            <button className="button" onClick={openCheckoutHandler}>
              Go to checkout
            </button>
          </div>
        }
      />
      <CheckoutModal
        ref={checkoutModalRef}
        onClose={closeCheckoutHandler}
        totalPrice={totalPrice}
      />
    </div>
  );
}
