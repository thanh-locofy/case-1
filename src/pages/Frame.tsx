import { FunctionComponent } from "react";
import Midle from "../components/Midle";
import NavLinks from "../components/NavLinks";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import SubscribeOurNewsletter from "../components/SubscribeOurNewsletter";
import Footer from "../components/Footer";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.dataHub}>
      <header className={styles.navigation}>
        <div className={styles.smallOne}>
          <div className={styles.contact}>
            <img
              className={styles.mapPinIcon}
              loading="lazy"
              alt=""
              src="/map-pin.svg"
            />
            <div className={styles.storeLocationLincoln344Wrapper}>
              <div className={styles.storeLocationLincoln}>
                Store Location: Lincoln- 344, Illinois, Chicago, USA
              </div>
            </div>
          </div>
          <div className={styles.linksWrapper}>
            <div className={styles.links}>
              <div className={styles.eng}>
                <div className={styles.eng1}>Eng</div>
                <div className={styles.groupWrapper}>
                  <img className={styles.groupIcon} alt="" src="/group.svg" />
                </div>
              </div>
              <div className={styles.usd}>
                <div className={styles.usd1}>USD</div>
                <div className={styles.groupContainer}>
                  <img className={styles.groupIcon1} alt="" src="/group.svg" />
                </div>
              </div>
              <div className={styles.devider} />
              <nav className={styles.account}>
                <div className={styles.signIn}>Sign In</div>
                <div className={styles.div}>/</div>
                <div className={styles.signUp}>Sign Up</div>
              </nav>
            </div>
          </div>
        </div>
        <Midle />
        <NavLinks />
      </header>
      <FrameComponent1 />
      <FrameComponent />
      <section className={styles.footer}>
        <SubscribeOurNewsletter />
        <Footer />
      </section>
    </div>
  );
};

export default Frame;
