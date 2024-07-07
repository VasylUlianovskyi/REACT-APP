import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const isLogin = true;
  const user = {
    specOffers: "You have -20% for all laptops",
  };

  return (
    <>
      <Header isLogin={isLogin} />
      <Main isLogin={isLogin} user={user} />
    </>
  );
}

export default App;
