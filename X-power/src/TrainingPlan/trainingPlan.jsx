import styles from "../TrainingPlan/trainingPlan.module.css";
import watch from "../assets/materials/stopWatch.svg";
import medal from "../assets/materials/starMedal.svg";
import arrowLeft from "../assets/icons/Arrow---Left-3.svg";

export default function trainingPlan() {
  return (
    <section className={styles.trainingPlan}>
      <div className={styles.plan}>
        <h1 className={styles.title}>
          برنامه تمرینی کاملا اختصاصی برای شما...
        </h1>

        <p className={styles.text}>
          هر کسی با یه هدف ورزش میکنه. کاهش وزن، افزایش وزن، بدنسازی، حفظ تناسب
          اندامش، آسیب جسمانی خیلی هم نمیذاره بعضی از حرکات رو انجام بدن. با
          ایکس پاور یه برنامه ورزشی کاملا مختص به شرایط خودتون دریافت خواهید
          کرد.
        </p>

        <div className={styles.buttons}>
          <button className={styles.getPlan}>
            <span>دریافت برنامه تمرینی</span>
          </button>
          <button className={styles.seeComment}>
            مشاهده ی نظر کاربران
            <img src={arrowLeft} />
          </button>
        </div>
      </div>

      <div className={styles.banner}>
        <div className={styles.exclusive}>
          <img src={watch} />

          <h1>برنامه تمرینی کاملا اختصاصی</h1>
        </div>

        <div className={styles.bestCouch}>
          <img src={medal} />

          <h1>زیر نظر بهترین مربی ها</h1>
        </div>
      </div>
    </section>
  );
}
