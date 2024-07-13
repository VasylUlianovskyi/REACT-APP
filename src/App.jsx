import { useState } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [isLight, setIsLight] = useState(false);

  const isLogin = false;
  const user = {
    specOffers: "You have -20% for all laptops",
  };

  const buttonStyle = {
    color: isLight ? "yellow" : "grey",
  };

  const pageContainerStyle = {
    minHeight: "100vh",
    color: isLight ? "black" : "white",
    backgroundColor: isLight ? "white" : "black",
  };

  function changeTheme() {
    setIsLight((oldIsLight) => !oldIsLight);
  }

  return (
    <div style={pageContainerStyle}>
      <Header isLogin={isLogin} />
      <button onClick={changeTheme} style={buttonStyle}>
        <i className="fa-solid fa-sun"></i>
      </button>
      <Main isLogin={isLogin} user={user} />
      <Counter />
    </div>
  );
}

export default App;
