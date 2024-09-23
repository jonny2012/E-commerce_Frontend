import { FC } from "react";
import { SearchBar } from "./Components/searchBar/SearchBar";
import { AccountIcons } from "./Components/AccountIcons/AccountIcons";
import  "./Header.module.scss";
import { Navbar } from "./Components/NavBar/Navbar";
import styles from "./Header.module.scss"



const Header = () => {
  return (
    <section >
      <div className="container">
        <h2>Exclusive</h2>
        <Navbar />
        <div className="right">
          <SearchBar />
          {<AccountIcons />}
        </div>
      </div>
    </section>
  );
};
export { Header };
