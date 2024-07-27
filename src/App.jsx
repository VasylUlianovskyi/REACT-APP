import { useState } from "react";
import { ThemeContext, UserContext } from "./contexts";
import classNames from "classnames";
import UserPage from "./pages/UserPage/UserPage";
import styles from "./App.module.sass";
import CONSTANTS from "./constant";

const { LIGHT, DARK, BLUE } = CONSTANTS.THEMES;

function App() {
  const [user, setUser] = useState({
    userSrc:
      "https://shotkit.com/wp-content/uploads/2021/06/Cool-profile-picture-LinkedIn.jpg",
    firstName: "Test",
    lastName: "Testovich",
  });

  const [theme, setTheme] = useState("LIGHT");

  const containerClassName = classNames(styles.container, {
    [styles.light]: theme === LIGHT,
    [styles.dark]: theme === DARK,
    [styles.blue]: theme === BLUE,
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserContext.Provider value={user}>
        <div className={containerClassName}>
          <UserPage />
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
