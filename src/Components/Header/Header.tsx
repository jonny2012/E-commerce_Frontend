import { SearchBar } from "../ui/searchBar/SearchBar";
import styles from "./Header.module.scss";
import wishlistIcon from "./../../assets/header_icons/Wishlist.svg";
import cartIcon from "./../../assets/header_icons/Cart=Off.svg";
import userIcon from "./../../assets/header_icons/user.svg";
import { Line } from "../ui/Line";

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.container}>
        <h2>Exclusive</h2>
        <nav className={styles.navbar}>
          <a href="#">Home</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
          <a href="#">Sign Up</a>
        </nav>
        <div className={styles.right}>
          <SearchBar />
          <img src={wishlistIcon} alt="wishlist" />
          <img src={cartIcon} alt="wishlist" />
          <img src={userIcon} alt="wishlist" />
        </div>
      </div>
    </section>
  );
};
export { Header };
