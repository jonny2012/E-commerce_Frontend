import sendIcon from "./../../../../assets/footer_icons/icon-send-black.svg";
import styles from "./EmailForm.module.scss";

export const Emailform = () => {
  return (
    <div className={styles.emailForm}>
      <input
        type="email"
        className={styles.input}
        placeholder="Enter your email"
      />
      <button className={styles.buttonSend}>
        <img src={sendIcon} alt="send-icon" />
      </button>
    </div>
  );
};
