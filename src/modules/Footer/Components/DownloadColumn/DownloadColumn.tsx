import styles from "./../../Footer.module.scss";
import { Link } from "react-router-dom";
import { appStores } from "modules/Footer/constants/iconsData";
import qrcode from "./../../../../assets/footer_icons/Qr Code.svg";
import { socialLinks } from "modules/Footer/constants/iconsData";

export const DownloadColumn = () => {
  return (
    <div className={styles.content}>
      <h3>Download App</h3>
      <Link className={styles.whiteLink}to="/register">
        Save $3 with App New User Only
      </Link>
      <div className={styles.storeBox}>
        <Link to="/" className={styles.whiteLink}>
          <img src={qrcode} alt="qrcode" />
        </Link>
        <div className={styles.stores}>
          {appStores.map((store: any) => (
            <Link key={store.src} to={store.to}>
              <img src={store.src} alt={store.alt} />
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.socialLinks}>
        {socialLinks.map((link) => (
          <Link key={link.src} to={link.to}>
            <img src={link.src} alt={link.alt} />
          </Link>
        ))}
      </div>
    </div>
  );
};
