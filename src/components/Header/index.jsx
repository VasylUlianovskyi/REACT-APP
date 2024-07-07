import logoImg from "./logo.png";
import userImg from "./user1.jpg";
import styles from "./Header.module.css";

function Header(props) {
  const { isLogin } = props;
  return (
    <header className={styles.headerContainer}>
      <img className={styles.logoImg} src={logoImg} alt="logo" />
      <h1>Page Title</h1>
      {isLogin ? (
        <img className={styles.userImg} src={userImg} alt="user-image" />
      ) : (
        <div>
          <button>LogIn</button>
          <button>SingIn</button>
        </div>
      )}
    </header>
  );
}

export default Header;
