import styles from "../Header/header.module.css";

export default function header() {
  return (
    <header className={styles.header} id="Home">
      <div className={styles.brandSections}>
        <h1 className={styles.brand}>X.POWER</h1>

        <ul className={styles.sections}>
          <li>
            <a href="#Home">صفحه ی اصلی</a>
          </li>
          <li>
            <a href="#Store">فروشگاه</a>
          </li>
          <li>
            <a href="#Services">خدمات</a>
          </li>
          <li>
            <a href="#Blogs">بلاگ</a>
          </li>
          <li>
            <a href="#About Us">درباره ی ما</a>
          </li>
        </ul>
      </div>

      <button className={styles.enter}>
        <span>ورود و ثبت نام</span>
      </button>
    </header>
  );
}
