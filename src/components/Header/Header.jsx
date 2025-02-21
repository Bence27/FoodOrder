import headerImg from "../../assets/logo.jpg";
export default function Header({ cartItemsCount }) {
  return (
    <div id="main-header">
      <div id="title">
        <img src={headerImg} alt="header" />
        <h1>React Food</h1>
      </div>
      <button className="button">Cart{"(" + cartItemsCount + ")"}</button>
    </div>
  );
}
