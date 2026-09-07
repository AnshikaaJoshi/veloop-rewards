import { FaUserCircle, FaEnvelope, FaBookOpen, FaTicketAlt, FaCopy ,FaRegComment} from "react-icons/fa";
import styles from "./ContactUsBanner.module.css";
import contactImage from "../../assets/contact-us.png";

function ContactBanner() {
  return (
    <section className={styles.banner}>

        {/* 03 Badge */}
        <span className={styles.rankNumber}>3</span>

      <div className={styles.content}>

        {/* Stage Information */}
        <div className={styles.stageInfo}>
          
          <span className={styles.stageText}>CONTACT US</span>
        </div>

        {/* Heading */}
        <h2 className={styles.title}>
          <span>Need Help?</span>
          <span className={styles.highlight}>We're Here.</span>
        </h2>

        {/* Description */}
        <p className={styles.description}>
          Have a question, concern, or need assistance?
          <br />
          Get in touch with the VELOOP Rewards team.
        </p>

        {/* CTA */}
        <button className={styles.button}>
          <span className={styles.buttonText}>Contact Support</span>
          <FaRegComment className={styles.buttonIcon} />
        </button>

      </div>

      {/* Support Agent Image */}
      <div className={styles.visual}>
        <img
          src={contactImage}
          alt="VELOOP Rewards support agent"
        />
      </div>

      {/* Support Information */}
      <div className={styles.supportInfo}>

        <div className={styles.supportHeader}>
          <FaUserCircle className={styles.supportIcon} />
          <span className={styles.supportTitle}>We're here to help</span>
        </div>

      <div className={styles.emailBorder}>
        <div className={styles.emailSection}>
          <FaEnvelope className={styles.envelopeIcon} />
          <div className={styles.contactSection}>
            <span>Email Us</span>
            <small >velooprewardsofficial@gmail.com</small>
          </div>
        </div>

        <button className={styles.copyButton}>
          Copy Email
          <FaCopy className={styles.copyIcon}  />
        </button>

      </div>

        <div className={styles.supportLink}>
          <FaBookOpen className={styles.supportIcon} />

          <div className={styles.helpText}>
          <span>Help Center</span>
          <span>&gt;</span>
          </div>
        </div>

        <div className={styles.supportLink}>
          <FaTicketAlt className={styles.supportIcon}/>
          
          <div className={styles.supportText}>
            <span>Submit a Ticket</span>
            <span>&gt;</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default ContactBanner;