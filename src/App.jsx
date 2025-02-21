import { Fragment } from "react";
import Header from "./components/Header/Header.jsx";
import Meals from "./components/Meals/Meals.jsx";

function App() {
  return (
    <Fragment>
      <Header cartItemsCount={0}></Header>
      <Meals></Meals>
    </Fragment>
  );
}

export default App;
