import sendIcon from "./../../../../assets/footer_icons/icon-send-black.svg";
import styles from "./EmailForm.module.scss";

export const Emailform = () => {
  return (
    <div className="email_form">
      <input
        type="email"
        className="input"
        placeholder="Enter your email"
      />
      <button className="button_send">
        <img src={sendIcon} alt="send-icon" />
      </button>
    </div>
  );
};
