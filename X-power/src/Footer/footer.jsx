import React, { useEffect } from "react";
import styles from "../Footer/footer.module.css";
import telegram from "../assets/icons/telegram.svg";
import instagram from "../assets/icons/instagram.svg";
import whatsApp from "../assets/icons/whatsApp.svg";
import twitter from "../assets/icons/twitter.svg";
import zarin from "../assets/materials/zarinPal.png";

export default function footer() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <footer id="About Us">
      <div className={styles.social}>
        <p className={styles.phoneNumber}>شماره تماس :۲۲۴۵ ۲۴۵۶ ۰۲۱</p>

        <div className={styles.links}>
          <p>ما را در شبکه های اجتماعی دنبال کنید</p>

          <a>
            {" "}
            <img src={telegram} />
          </a>

          <a>
            {" "}
            <img src={instagram} />
          </a>

          <a>
            {" "}
            <img src={whatsApp} />
          </a>

          <a>
            {" "}
            <img src={twitter} />
          </a>
        </div>
      </div>

      <div className={styles.pap}>
        <div className={styles.customerGuid}>
          <div className={styles.guid}>
            <ul>
              <h1>راهنمای مشتریان</h1>
              <li>پاسخ به پرسش های متداول</li>
              <li>روش های ارسال کالا</li>
              <li>روش های پرداخت</li>
              <li>قوانین و مقررات</li>
            </ul>
          </div>

          <div className={styles.guid}>
            <ul>
              <h1>راهنمای مشتریان</h1>
              <li>پاسخ به پرسش های متداول</li>
              <li>روش های ارسال کالا</li>
              <li>روش های پرداخت</li>
              <li>قوانین و مقررات</li>
            </ul>
          </div>

          <img src={zarin} className={styles.zarinPal} />
        </div>

        <div className={styles.copyright}>
          کلیه حقوق متعلق به این وبسایت می باشد
        </div>
      </div>
    </footer>
  );
}
