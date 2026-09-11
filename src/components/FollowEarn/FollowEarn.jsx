import { FaGift,FaArrowCircleRight} from "react-icons/fa";
import styles from "./FollowEarn.module.css";
import followearnImage from "../../assets/follow&earn.png";


const campaignData = {
  reward: "+500 SVEs",
  campaignName: "Demo Campaign",
};
function FollowEarn() {
  return (
    <section className={styles.banner}>

        {/* 04 Badge */}
        <span className={styles.rankNumber}>4</span>

      <div className={styles.content}>

        {/* Stage Information */}
        <div className={styles.stageInfo}>
          
          <span className={styles.stageText}>FOLLOW & EARN</span>
        </div>

        {/* Heading */}
        <h2 className={styles.title}>
          <span>Follow & Earn</span>
        </h2>

        {/* Description */}
        <p className={styles.description}>
          Follow VELOOP REWARDS on our official{" "}
          <span>channels and participate in eligible social</span>{" "}
          <span>campaigns to unlock rewards.</span>
        </p>

        {/* CTA */}
        <button className={styles.button}>
          <span className={styles.buttonText}>Explore Our Channels</span>
          <FaArrowCircleRight className={styles.buttonIcon} />
        </button>

      </div>

      {/* Support Agent Image */}
      <div className={styles.visual}>
        <img
          src={followearnImage}
          alt="VELOOP Rewards support agent"
        />
      </div>

      {/* Earn Information */}
      <div className={styles.earnInfo}>

        <div className={styles.earnHeader}>
         <div className={styles.earnDesign}>
          <FaGift className={styles.earnIcon} />
          <p className={styles.description}>
            Participate in eligible
            <br/>
            social campaigns advertisements
            <br />
            unlock rewards.
          </p>
          </div>
          <div className={styles.earnBackend}>
            <h1>{campaignData.reward}</h1>
            <p>{campaignData.campaignName}</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default FollowEarn;
