import styles from "./../../Ui.module.scss";
import Search from "../../../assets/header_icons/Search.svg"


export const SearchBar = ()=>{

    return (
        <div className={styles.searchBox}>
        <input type="search" placeholder="What are you looking for?" className={styles.search} />
        <button className={styles.button}><img  src={Search} alt="search" /></button>
        </div>
    )
}