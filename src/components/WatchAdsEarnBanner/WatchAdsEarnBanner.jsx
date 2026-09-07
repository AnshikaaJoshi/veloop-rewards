import { FaPlayCircle, FaShieldAlt, FaBolt } from "react-icons/fa";
import styles from "./WatchAdsEarnBanner.module.css";
import watchAdsImage from "../../assets/watch-ads.png";
import { useState } from "react";

function WatchAdsEarnBanner() {
  const [watched, setWatched] = useState(false);
  return (
    <section className={styles.banner} >

      <div className={styles.content}>

        {/* Stage Information */}
        <div className={styles.stageInfo}>
  <span className={styles.rankNumber}>02</span>

          <div className={styles.rewardType}>
              <div className={styles.playCircle}>
                <FaPlayCircle />
              </div>
              <span className={styles.stageText}>
                  ON-DEMAND REWARDS
              </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className={styles.title}>
          <span>Watch Ads.</span>
          <span className={styles.highlight}>Earn VEs.</span>
        </h2>

        {/* Description */}
        <p className={styles.description}>
          Watch eligible advertisements and
          <br />
          earn VEs for completing ad activities.
        </p>

    <div className={styles.actionRow}>
        {/* Reward Features */}
    <div className={styles.features}>
        <div className={styles.feature}>
         <FaShieldAlt className={styles.featureIcon} />
         <span>No Daily Cap</span>
        </div>

        <div className={styles.feature}>
          <FaBolt className={styles.featureIcon} />
          <span>Instant Credits</span>
        </div>
    </div>

        {/* CTA */}
        <button className={styles.button}
        onClick={() => setWatched(true)}>
              Watch & Earn →
        </button>
        {watched && (
  <p className={styles.claimMessage}>
    Ad completed successfully!
  </p>
)}

    </div> 

      </div>

      {/* Visual */}
      <div className={styles.visual}>
        <img
          src={watchAdsImage}
          alt="Watch ads and earn rewards"
        />
      </div>

    </section>
  );
}

export default WatchAdsEarnBanner;