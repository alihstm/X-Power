import styles from "../Blogs/blogs.module.css";
import arrowLeft from "../assets/icons/Arrow---Left-3.svg";
import bg1 from "../assets/materials/topRichestBodyBuilders.svg";
import bg2 from "../assets/materials/fatBurningPlan.svg";
import bg3 from "../assets/materials/howMuchWeight.svg";

export default function blogs() {
  const blogs = [
    {
      bg: bg1,
      date: "۱۲ ",
      title: "پولدارترین بدنسازهای تاریخ",
      text: "صنعت بدنسازی گاهی مرموز به نظر می‌رسد. اگر می‌خواهید بدانید چه افرادی در این صنعت، پول‌های حسابی بدست می‌آورند با ما همراه باشید.",
    },
    {
      bg: bg2,
      date: "۱۵ ",
      title: "برنامه تمرینی اینتروال چربی سوزی",
      text: "تمرینات اینتروال (HIIT) موثرترین روش تمرین برای چربی سوزی و حفظ عضلات است. در ادامه سعی می‌کنم درمورد تمرینات اینتروال بیشتر...",
    },
    {
      bg: bg3,
      date: "۲۰ ",
      title: "چقدر مقدار وزنه انتخاب کنم؟",
      text: "صنعت بدنسازی گاهی مرموز به نظر می‌رسد. اگر می‌خواهید بدانید چه افرادی در این صنعت، پول‌های حسابی بدست می‌آورند با ما همراه باشید.",
    },
  ];
  return (
    <section className={styles.blogs} id="Blogs">
      <div className={styles.title}>
        <h2>مقالات</h2>
        <h1>جدیدترین مقالات</h1>
      </div>

      <div className={styles.newBlogs}>
        {blogs.map((blog, index) => (
          <div key={index} className={styles.blog}>
            <div
              className={styles.bg}
              style={{ backgroundImage: `url(${blog.bg})` }}
            >
              <span>
                {blog.date}
                ساعت پیش
              </span>
            </div>

            <div className={styles.texts}>
              <h1>{blog.title}</h1>
              <p>{blog.text}</p>
            </div>

            <button className={styles.read}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#8080c0"
                class="icon icon-tabler icons-tabler-filled icon-tabler-square-arrow-left"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-6.293 5.293a1 1 0 0 0 -1.414 0l-4 4l-.083 .094l-.064 .092l-.052 .098l-.044 .11l-.03 .112l-.017 .126l-.003 .075l.004 .09l.007 .058l.025 .118l.035 .105l.054 .113l.071 .111c.03 .04 .061 .077 .097 .112l4 4l.094 .083a1 1 0 0 0 1.32 -.083l.083 -.094a1 1 0 0 0 -.083 -1.32l-2.292 -2.293h5.585l.117 -.007a1 1 0 0 0 -.117 -1.993h-5.585l2.292 -2.293l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
