import { SignUpForm } from "modules/UserLoginSignUp/RegistrationModule/SignUpForm";
import LoginImg from "./../../assets/SignUpLogin_Image.jpg";
import styles from "./SignUp.module.scss";

export const SignUp = () => {
  return (
    <section className="signupContainer">
      <div className="SignUp">
        <img src={LoginImg} alt="" />
        <SignUpForm />
      </div>
    </section>
  );
};
