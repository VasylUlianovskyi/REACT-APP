import { useState } from "react";
import styles from "./LoginForm.module.css";
import classNames from "classnames";

// const LOGIN_FOR_REG_EXP = {
//   email: /^.+@.+$/,
//   password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[\d]).{8,32}$/,
// };

const LOGIN_FOR_REG_EXP = {
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[\d]).{8,32}$/,
};

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChande = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({ email: email, password: password });
    setEmail("");
    setPassword("");
  };

  const inputEmailClassName = classNames(styles.formInput, {
    [styles.validInput]: LOGIN_FOR_REG_EXP.email.test(email),
    [styles.invalidInput]: !LOGIN_FOR_REG_EXP.email.test(email),
  });

  const inputPasswordClassName = classNames(styles.formInput, {
    [styles.validInput]: LOGIN_FOR_REG_EXP.password.test(password),
    [styles.invalidInput]: !LOGIN_FOR_REG_EXP.password.test(password),
  });

  const isSubmitBtnDisadled = () => {
    return !(
      LOGIN_FOR_REG_EXP.email.test(email) &&
      LOGIN_FOR_REG_EXP.password.test(password)
    );
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Login Form</h2>
      <form className={styles.loginForm} onSubmit={handleFormSubmit}>
        <label className={styles.formLabel}>
          <span className={styles.inputCaption}>Email</span>
          <input
            className={inputEmailClassName}
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChande}
            placeholder="yourmail@mail.com"
            autoFocus
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.inputCaption}>Password</span>
          <input
            className={inputPasswordClassName}
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button
          className={styles.submitBtn}
          disabled={isSubmitBtnDisadled()}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
