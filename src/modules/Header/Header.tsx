import { FC } from "react";
import { SearchBar } from "./Components/searchBar/SearchBar";
import { AccountIcons } from "./Components/AccountIcons/AccountIcons";
import styles from "./Header.module.scss";
import { Navbar } from "./Components/NavBar/Navbar";

interface IUser {
  isAuth: boolean;
}

const Header: FC<IUser> = ({ isAuth }) => {
  return (
    <section className={styles.header}>
      <div className={styles.container}>
        <h2>Exclusive</h2>
        <Navbar />
        <div className={styles.right}>
          <SearchBar />
          {isAuth ?<AccountIcons />:null}
        </div>
      </div>
    </section>
  );
};
export { Header };
