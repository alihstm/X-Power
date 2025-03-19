import styles from "../VideoClips/videoClips.module.css";
import camera from "../assets/icons/camera.svg";
import arrowRight from "../assets/icons/chevron-right.svg";
import arrowLeft from "../assets/icons/chevron-left.svg";
import banner from "../assets/materials/rippedMan3.svg"
import banner2 from "../assets/materials/rippedMan4.svg"

export default function videoClips() {
  return (
    <section className={styles.videoClips}>
      <div className={styles.banner}>
        <img src={banner2} className={styles.firstBanner}></img>
        <img src={banner}></img>
      </div>

      <div className={styles.textBox}>
        <div className={styles.texts}>
          <div className={styles.title}>
            <img src={camera} />
            <h1>ویدیو آموزشی</h1>
          </div>

          <div className={styles.text}>
            <h2>آموزش جلو بازو ایستاده</h2>
            <p>
              هیچ وقت دو تا از حرکات جلو بازو با هم یکی نیستند. شما باید مابین
              حرکات جلو بازو تک منظوره و ترکیبی تعادل داشته باشید. از آنجایی که
              عضلات جلو بازو نماد قدرت هر شخص شناخته می‌شود، حرکات جلو بازو باید
              کاملا به دقت و صحیح اجرا شوند.
            </p>
          </div>
        </div>

        <div className={styles.pages}>
          <button>
            <img src={arrowRight} />
          </button>

          <div className={styles.pagesDiv}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <button>
            <img src={arrowLeft} />
          </button>
        </div>
      </div>
    </section>
  );
}
