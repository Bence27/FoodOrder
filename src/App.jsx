import { Fragment } from "react";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <Fragment>
      <Header cartItemsCount={0}></Header>
    </Fragment>
  );
}

export default App;
