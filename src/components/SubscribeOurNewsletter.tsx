import { FunctionComponent } from "react";
import styles from "./SubscribeOurNewsletter.module.css";

const SubscribeOurNewsletter: FunctionComponent = () => {
  return (
    <div className={styles.subscribeOurNewsletter}>
      <div className={styles.subscribeOurNewsletterChild} />
      <div className={styles.subcribeOurNewsletterParent}>
        <h2 className={styles.subcribeOurNewsletter}>
          Subcribe our Newsletter
        </h2>
        <div className={styles.pellentesqueEuNibh}>
          Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
          Phasellus imperdiet elit eu magna.
        </div>
      </div>
      <div className={styles.subscribeOurNewsletterInner}>
        <div className={styles.subscribeParent}>
          <div className={styles.subscribe}>
            <div className={styles.inputField}>
              <div className={styles.yourEmailAddress}>Your email address</div>
            </div>
            <button className={styles.button}>
              <div className={styles.subscribe1}>Subscribe</div>
            </button>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.socialMediaParent}>
              <img
                className={styles.socialMediaIcon}
                loading="lazy"
                alt=""
                src="/social-media.svg"
              />
              <img
                className={styles.socialMediaIcon1}
                alt=""
                src="/social-media-1.svg"
              />
              <img
                className={styles.socialMediaIcon2}
                alt=""
                src="/social-media-2.svg"
              />
              <img
                className={styles.socialMediaIcon3}
                alt=""
                src="/social-media-3.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeOurNewsletter;
