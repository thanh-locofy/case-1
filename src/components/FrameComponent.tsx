import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.createAccountWrapper}>
      <form className={styles.createAccount}>
        <h1 className={styles.createAccount1}>Create Account</h1>
        <div className={styles.field}>
          <div className={styles.field1}>
            <div className={styles.inputField}>
              <input className={styles.email} placeholder="Email" type="text" />
            </div>
            <div className={styles.inputField1}>
              <input
                className={styles.password}
                placeholder="Password"
                type="text"
              />
              <img
                className={styles.eyeOpen1Icon}
                alt=""
                src="/eyeopen-1.svg"
              />
            </div>
            <div className={styles.inputField2}>
              <input
                className={styles.confirmPassword}
                placeholder="Confirm Password"
                type="text"
              />
              <img
                className={styles.eyeOpen1Icon1}
                alt=""
                src="/eyeopen-1.svg"
              />
            </div>
          </div>
          <div className={styles.remember}>
            <input className={styles.checkbox} type="checkbox" />
            <div
              className={styles.acceptAllTerms}
            >{`Accept all terms & Conditions`}</div>
          </div>
        </div>
        <button className={styles.button}>
          <div className={styles.normal}>Create Account</div>
        </button>
        <div className={styles.dontHaveAccount}>
          <div className={styles.alreadyHaveAccount}>Already have account</div>
          <div className={styles.login}> Login</div>
        </div>
      </form>
    </section>
  );
};

export default FrameComponent;
