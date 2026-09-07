import styles from "./LeaderboardBanner.module.css";
import leaderboardImage from "../../assets/leaderboard-trophy.png";
import { FaTrophy } from "react-icons/fa";

const rankings = [
  { rank: 1, name: "User A", ves: "12,450" },
  { rank: 2, name: "User B", ves: "11,820" },
  { rank: 3, name: "User C", ves: "10,970" },
];

function LeaderboardBanner() {
  return (
    <section className={styles.banner}>

      {/* LEFT CONTENT */}
      <div className={styles.content}>

        <div className={styles.stageInfo}>
          <span className={styles.rankNumber}>01</span>

          <div className={styles.rewardType}>
            <div className={styles.trophyIcon}>
              <FaTrophy />
            </div>

            <span className={styles.stageText}>
              COMPETITION STAGE ACTIVE
            </span>
          </div>
        </div>

        <h2 className={styles.title}>
          <span>Rank Higher.</span>
          <span className={styles.highlight}>Earn More.</span>
        </h2>

        <p className={styles.description}>
          Complete activities, earn rewards, gain XP,
          <br />
          and compete with other users to climb
          <br />
          the leaderboard.
        </p>

        <div className={styles.prizePool}>
          <span className={styles.prizeIcon}>🏆</span>

          <span className={styles.pool}>
            Current pool:
          </span>

          <span className={styles.prizeAmount}>
            50,000 VEs
          </span>

          <span className={styles.pool}>
            in prizes
          </span>
        </div>

        <button className={styles.button}>
          Check Rankings →
        </button>

      </div>


      {/* RIGHT VISUAL */}
      <div className={styles.visual}>

        {/* Image + ranking cards are locked together */}
        <div className={styles.imageStage}>

          <img
            src={leaderboardImage}
            alt="Leaderboard trophy and podium"
          />

          <div className={styles.rankingOverlay}>

            {rankings.map((user) => (
              <div
                key={user.rank}
                className={`${styles.userCard} ${
                  styles[`rank${user.rank}`]
                }`}
              >
                <div className={styles.userName}>
                  {user.name}
                </div>

                <div className={styles.userVes}>
                  {user.ves} VEs
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default LeaderboardBanner;