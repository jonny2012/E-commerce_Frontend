import { Link } from "react-router-dom";
import styles from "./../../Header.module.scss";

export const Navbar = () => {
  const style ={textDecoration:"none", color:"#000", fontSize:"16px"}
  return (
    <nav className={styles.navbar} >
      <Link style={style} to={"/"}>Home</Link>
      <Link  style={style} to={"/contact"}>Contact</Link>
      <Link  style={style} to={"/about"}>About</Link>
      <Link  style={style} to={"/register"}>Sign Up</Link>
    </nav>
  );
};
