import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.fotter}>
        <div className={styles.companyWrapper}>
          <div className={styles.company}>
            <div className={styles.logo}>
              <img className={styles.plant1Icon} alt="" src="/plant-1.svg" />
              <h1 className={styles.ecobazar}>Ecobazar</h1>
            </div>
            <div className={styles.morbiCursusPorttitor}>
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </div>
            <div className={styles.cta}>
              <div className={styles.button}>
                <div className={styles.div}>(219) 555-0114</div>
              </div>
              <div className={styles.or}>or</div>
              <div className={styles.button1}>
                <div className={styles.proxygmailcom}>Proxy@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.myAccountWrapper}>
            <div className={styles.myAccount}>
              <div className={styles.myAccount1}>My Account</div>
              <div className={styles.links}>
                <div className={styles.myAccount2}>My Account</div>
                <div className={styles.orderHistory}>Order History</div>
                <div className={styles.shopingCart}>Shoping Cart</div>
                <div className={styles.wishlist}>Wishlist</div>
              </div>
            </div>
          </div>
          <div className={styles.help}>
            <div className={styles.helps}>Helps</div>
            <div className={styles.links1}>
              <div className={styles.contact}>Contact</div>
              <div className={styles.faqs}>Faqs</div>
              <div className={styles.termsCondition}>{`Terms & Condition`}</div>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
            </div>
          </div>
          <div className={styles.proxy}>
            <div className={styles.proxy1}>Proxy</div>
            <div className={styles.links2}>
              <div className={styles.about}>About</div>
              <div className={styles.shop}>Shop</div>
              <div className={styles.product}>Product</div>
              <div className={styles.trackOrder}>Track Order</div>
            </div>
          </div>
        </div>
        <div className={styles.categories}>
          <div className={styles.categories1}>Categories</div>
          <div className={styles.links3}>
            <div className={styles.fruitVegetables}>{`Fruit & Vegetables`}</div>
            <div className={styles.meatFish}>{`Meat & Fish`}</div>
            <div className={styles.breadBakery}>{`Bread & Bakery`}</div>
            <div className={styles.beautyHealth}>{`Beauty & Health`}</div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.ecobazarEcommerce2021AllWrapper}>
          <div className={styles.ecobazarEcommerce}>
            Ecobazar eCommerce © 2021. All Rights Reserved
          </div>
        </div>
        <div className={styles.methodapplepayParent}>
          <img
            className={styles.methodapplepayIcon}
            loading="lazy"
            alt=""
            src="/methodapplepay@2x.png"
          />
          <img
            className={styles.methodvisaIcon}
            loading="lazy"
            alt=""
            src="/methodvisa@2x.png"
          />
          <img
            className={styles.methoddiscoverIcon}
            loading="lazy"
            alt=""
            src="/methoddiscover@2x.png"
          />
          <img
            className={styles.methodmastercardIcon}
            loading="lazy"
            alt=""
            src="/methodmastercard@2x.png"
          />
          <div className={styles.cart}>
            <div className={styles.base} />
            <div className={styles.cartInner}>
              <div className={styles.lock1Parent}>
                <img
                  className={styles.lock1Icon}
                  loading="lazy"
                  alt=""
                  src="/lock-1.svg"
                />
                <div className={styles.secure}>Secure</div>
              </div>
            </div>
            <div className={styles.payment}>Payment</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
