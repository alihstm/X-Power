import styles from "../HeroSection/heroSection.module.css";
import award from "../assets/icons/Award.svg";
import banner from "../assets/materials/rippedMan.svg";

export default function heroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.right}>
        <div className={styles.texts}>
          <span className={styles.spanText}>
            هر آنچه برای رسیدن به اندام ایده آل نیاز دارید
          </span>

          <span className={styles.spantext}>
            تخصصی ترین وبسایت بدنسازی در ایران با مجوز رسمی
          </span>
        </div>

        <div className={styles.expertise}>
          <img src={award} />

          <span className={styles.spanTeXt}>
            با بیش از ۲۵ سال تجربه در ورزش بدنسازی و تناسب اندام تصمیم گرفتیم
            دانش و تجربه خود را در اختیار همه علاقه‌مندان به این رشته ورزشی جذاب
            قرار دهیم.
          </span>
        </div>

        <div className={styles.numbers}>
          <div className={styles.number}>
            <h1>۲۰۰۰+</h1>
            <p>کاربر</p>
          </div>

          <div className={styles.number}>
            <h1>۲۵۰+</h1>
            <p>مکمل بدنسازی</p>
          </div>

          <div className={styles.number}>
            <h1>۱۰۰۰+</h1>
            <p>رژیم غذایی آنلاین</p>
          </div>
        </div>
      </div>

      <div className={styles.left}>
        <div className={styles.leftInside}>
          <img src={banner} />
        </div>
      </div>
    </section>
  );
}
