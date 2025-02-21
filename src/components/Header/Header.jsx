import { useContext, useRef } from "react";
import { CartContext } from "../../context/shopping-cart-context.jsx";
import headerImg from "../../assets/logo.jpg";
import CartModal from "../CartModal/CartModal.jsx";
export default function Header() {
  const { items } = useContext(CartContext);
  const cartModalRef = useRef(); // A CartModal referenciája

  const openCartHandler = () => {
    cartModalRef.current.open(); // Modal megnyitása
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
            <button className="button">Go to checkout</button>
          </div>
        }
      />
    </div>
  );
}
