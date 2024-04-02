import { FunctionComponent } from "react";
import styles from "./NavLinks.module.css";

const NavLinks: FunctionComponent = () => {
  return (
    <div className={styles.navLinks}>
      <div className={styles.navLinks1}>
        <div className={styles.navLinks2}>
          <div className={styles.home}>Home</div>
          <img
            className={styles.chevronDownIcon}
            alt=""
            src="/chevron-down.svg"
          />
        </div>
        <div className={styles.navLinks3}>
          <div className={styles.home1}>Shop</div>
          <img
            className={styles.chevronDownIcon1}
            alt=""
            src="/chevron-down-1.svg"
          />
        </div>
        <div className={styles.navLinks4}>
          <div className={styles.home2}>Pages</div>
          <img
            className={styles.chevronDownIcon2}
            alt=""
            src="/chevron-down-1.svg"
          />
        </div>
        <div className={styles.navLinks5}>
          <div className={styles.home3}>Blog</div>
          <img
            className={styles.chevronDownIcon3}
            alt=""
            src="/chevron-down-1.svg"
          />
        </div>
        <div className={styles.navLinks6}>
          <div className={styles.home4}>About Us</div>
          <img
            className={styles.chevronDownIcon4}
            alt=""
            src="/chevron-down.svg"
          />
        </div>
        <div className={styles.navLinks7}>
          <div className={styles.home5}>Contact Us</div>
          <img
            className={styles.chevronDownIcon5}
            alt=""
            src="/chevron-down.svg"
          />
        </div>
      </div>
      <div className={styles.callNow}>
        <img
          className={styles.phonecall1Icon}
          loading="lazy"
          alt=""
          src="/phonecall-1.svg"
        />
        <div className={styles.div}>(219) 555-0114</div>
      </div>
    </div>
  );
};

export default NavLinks;
