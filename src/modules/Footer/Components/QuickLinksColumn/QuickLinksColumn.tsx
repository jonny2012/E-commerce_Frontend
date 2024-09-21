import styles from "./../../Footer.module.scss";

export const QuickLinksColumn = () => {
  return (
    <div className={styles.content}>
      <h3>Quick Link</h3>
      <a href="#" className={styles.white_link}>
        <span>Privacy Policy</span>
      </a>
      <a href="#" className={styles.white_link}>
        <span>Terms Of Use</span>
      </a>
      <a href="#" className={styles.white_link}>
        <span>FAQ</span>
      </a>
      <a href="#" className={styles.white_link}>
        <span>Contact</span>
      </a>
    </div>
  );
};
