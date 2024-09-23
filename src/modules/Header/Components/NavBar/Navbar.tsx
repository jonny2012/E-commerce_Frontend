import { Link } from "react-router-dom";
import styles from "./../../Header.module.scss";

export const Navbar = () => {
  return (
    <nav >
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/register"}>Sign Up</Link>
    </nav>
  );
};
