import { useEffect } from "react";
import { User, userApi } from "../../../services/UserServices";
import styles from "../LoginSignUpForm.module.scss";
import { Link } from "react-router-dom";
import { RedButton } from "./../../../Components/ui/RedButton";

export const SignUpForm = () => {
  const Userdata: Partial<User> = {
    username: "Ion",
    email: "ec@yuiffymaitfl.com",
    password: "2222",
  };

  const [createUser, { isError, isSuccess, data, isLoading }] =
    userApi.useRegisterUserMutation();

  useEffect(() => {
    createUser(Userdata);
  }, [isSuccess]);
  console.log(isError, isSuccess, isLoading, data);

  return (
    <div className="sign_up">
      <h1>Create an account</h1>
      <span>Enter your details below</span>
      <form className="form">
        <input
          className="user_data_input"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
        />
        <input
          className="user_data_input"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="user_data_input"
          type="password"
          name="password"
          placeholder="Password"
        />
      </form>
      <div className="submit_box">
        <RedButton words={"Create Account"} width={"100%"} />
        <div className="question_box">
          <p>Already have account?</p>
          <Link style={{ color: "#DB4444" }} to={"/login"}>
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};
