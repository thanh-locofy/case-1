import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.breadcrumbsWrapper}>
      <div className={styles.breadcrumbs}>
        <div className={styles.location}>
          <img
            className={styles.home11Icon}
            loading="lazy"
            alt=""
            src="/home1-1.svg"
          />
          <img className={styles.groupIcon} alt="" src="/group@2x.png" />
          <div className={styles.home}>Home</div>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.home1}>Home</div>
          <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
          <div className={styles.home2}>Home</div>
          <div className={styles.outputAggregator}>
            <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
          </div>
          <div className={styles.home3}>Account</div>
          <div className={styles.outputAggregator1}>
            <img className={styles.vectorIcon3} alt="" src="/vector-1.svg" />
          </div>
          <div className={styles.vegetables}>Create Account</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
