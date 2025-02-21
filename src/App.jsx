import Header from "./components/Header/Header.jsx";
import Meals from "./components/Meals/Meals.jsx";
import CartContextProvider from "./context/shopping-cart-context.jsx";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
