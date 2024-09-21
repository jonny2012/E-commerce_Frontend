import { RedButton } from "Components/ui/RedButton";
import styles from "../LoginSignUpForm.module.scss"
import { Link } from "react-router-dom";

export const LoginForm = () => {
  return (
    <div className={styles.sign_up}>
      <h1>Login to Exclusive</h1>
      <span>Enter your details below</span>
      <form className={styles.form}>
        <input
          className={styles.user_data_input}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className={styles.user_data_input}
          type="password"
          name="password"
          placeholder="Password"
        />
      </form>
      <div style={{flexDirection:"row", justifyContent:"space-between"}} className={styles.submit_box}>
        <RedButton  words={"Login in"} width={"40%"} />
        <Link style={{color: "#DB4444"}} to={"/"}> Forgot Password?</Link>
      </div>
    </div>
  );
};