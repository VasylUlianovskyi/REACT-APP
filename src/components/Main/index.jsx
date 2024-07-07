import style from "./Main.module.css";

function Main(props) {
  const { isLogin, user } = props;
  return (
    <main>
      {isLogin ? (
        <p className={style.specOffers}>{user.specOffers}</p>
      ) : (
        <>
          <p className={style.logIn}>Sing Up to get spec offer</p>
        </>
      )}
    </main>
  );
}

export default Main;
