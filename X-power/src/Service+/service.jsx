import styles from "../Service+/service.module.css";
import trainingPlan from "../assets/icons/trainingPlan.svg";
import diet from "../assets/icons/diet.svg";
import drugs from "../assets/icons/drugs.svg";
import weight from "../assets/icons/trainingTools.svg";
import arrowLeft from "../assets/icons/Arrow---Left.svg";

export default function service() {
  const cards = [
    {
      img: trainingPlan,
      headline: "برنامه تمرینی",
      des: "ارائه بهترین برنامه‌های تمرینی همراه با توضیحات کامل ویژه همه سطوح ورزشی",
    },
    {
      img: diet,
      headline: "رژیم غذایی",
      des: "ارائه آنلاین رژیمهای غذایی ویژه ورزشکاران و افرادی که دوستدار سلامتی هستند",
    },
    {
      img: drugs,
      headline: "مکمل های بدنسازی",
      des: "بررسی انواع مکملهای بدنسازی برای انتخاب بهترین مکمل بدنسازی",
    },
    {
      img: weight,
      headline: "برنامه تمرینی",
      des: "ارائه بهترین برنامه‌های تمرینی همراه با توضیحات کامل ویژه همه سطوح ورزشی",
    },
  ];

  return (
    <section className={styles.service} id="Services">
      <div className={styles.title}>
        <h2>خدمات ما</h2>
        <h1>ما در ایکس پاور چه خدماتی ارائه میکنیم؟</h1>
      </div>

      <div className={styles.services}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imgHeadline}>
              <img src={card.img} alt={card.headline} />
              <h1>{card.headline}</h1>
            </div>

            <p>{card.des}</p>

            <button className={styles.subject}>
              ادامه مطلب
              <img src={arrowLeft} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
