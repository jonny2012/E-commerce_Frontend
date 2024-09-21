import styles from "./../../Footer.module.scss";

export const ContactsColumn = () => {
  return (
    <div className={styles.content}>
      <h3>Support</h3>
      <span style={{ whiteSpace: "normal" }}>
        Markische Allee 142, Berlin Germany
      </span>
      <a href="#" className={styles.white_link}>
        {" "}
        <span>exclusive@gmail.com</span>
      </a>
      <span>+491234587328</span>
    </div>
  );
};
