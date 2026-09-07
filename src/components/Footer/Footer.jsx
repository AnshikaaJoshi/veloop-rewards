import { FaInfoCircle } from "react-icons/fa";
import styles from "./Footer.module.css";
import veloopRewardsImage from "../../assets/veloop-rewardsfooter.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.notice}>
        <FaInfoCircle className={styles.infoIcon} />

        <p>
          <strong>Demo / Placeholder Notice:</strong>{" "}
          Ranking, reward, and streak values are development placeholders
          for presentation purposes only and may change in the final product.
        </p>
      </div>

      <div className={styles.visual}>
              <img
                src={veloopRewardsImage}
                alt="VELOOP Rewards support agent"
              />
            </div>
    </footer>
  );
}

export default Footer;