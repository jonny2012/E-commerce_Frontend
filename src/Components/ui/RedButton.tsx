import { FC } from "react"
import styles from "./Ui.module.scss"

interface IButonText{
    words:string;
    width:string;
}


 export const RedButton:FC<IButonText> = ({words, width})=>{

    return (
        <button style={{width: width, color:"#fff"}} className={styles.red_button}>
        {words}
        </button>
    )
}
