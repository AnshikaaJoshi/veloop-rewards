import { FaUserCircle, FaEnvelope, FaBookOpen, FaTicketAlt, FaCopy ,FaGift} from "react-icons/fa";
import styles from "./DailyBonus.module.css";
import dailybonusImage from "../../assets/daily-bonus.png";
import { useState } from "react";

const bonusData = {
  amount: "+25 GEMS",
  status: "Available Now",
};
const streakDays = [true, true, true, true, true, true, false];
function DailyBonus() {
  const [claimed, setClaimed] = useState(false);
  const handleClaimBonus = () => {
  setClaimed(true);
};
  return (
    <section className={styles.banner}>

        {/* 05 Badge */}
        <span className={styles.rankNumber}>5</span>

      <div className={styles.content}>

        {/* Stage Information */}
        <div className={styles.stageInfo}>   
          <span className={styles.stageText}>DAILY BONUS</span>
        </div>

        {/* Heading */}
        <h2 className={styles.title}>
        <span>Your Daily Bonus</span>
        <span className={styles.highlight}>Is Waiting</span>
        </h2>

        {/* Description */}
        <p className={styles.description}>
          Check in regularly and claim your available 
          <br />
          daily bonus before the opportunity resets.
        </p>

        {/* CTA */}
        <button className={styles.button} onClick={() => setClaimed(true)}>
          <span className={styles.buttonText}>Claim Bonus</span>
          <FaGift className={styles.buttonIcon} />
        </button>
        {claimed && (
        <p className={styles.claimMessage}>
             Bonus claimed successfully!
        </p>
        )}

      </div>

      {/* Mystery Box Image */}
      <div className={styles.visual}>
        <img
          src={dailybonusImage}
          alt="VELOOP Rewards daily bonus"
        />
      </div>

      <div className={styles.bonusInfo}>
        <h6>TODAY'S BONUS</h6> 
        <div className={styles.bonusUpdates}>
        <h1>{bonusData.amount}</h1>
        <p>{bonusData.status}</p>
        </div>
      </div>

<div className={styles.streakInfo}>
  <h3>7-DAY STREAK</h3>

  <div className={styles.streakDays}>
    {streakDays.map((completed, index) => (
      <div key={index} className={styles.streakDay}>
        <span className={styles.dayNumber}>{index + 1}</span>

        <span
          className={`${styles.dayCircle} ${
            completed ? styles.completed : ""
          }`}
        >
          {completed ? "✓" : ""}
        </span>
      </div>
    ))}
  </div>

  <h4>6 Days Completed</h4>
  <p>Come back tomorrow!</p>
</div>

    </section>
  );
}

export default DailyBonus;