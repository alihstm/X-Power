import { useState } from "react";
import styles from "../Products/products.module.css";
import product1 from "../assets/materials/product3.svg";
import product2 from "../assets/materials/product2.svg";
import product3 from "../assets/materials/product3.svg";
import product4 from "../assets/materials/product4.svg";
import add from "../assets/icons/add.svg";

export default function Products() {
  const products = [
    {
      img: product1,
      name: "پروتئین وی ژن استار ۲۲۷۰ گرم",
      price: "۲/۱۹۰/۰۰۰ تومان",
    },
    {
      img: product2,
      name: "پروتئین وی پرووتال ۱۰۰۰ گرم",
      price: "۱/۸۰۰/۰۰۰ تومان",
    },
    {
      img: product3,
      name: "گینر ژن استار ۳۰۰۰ گرم",
      price: "۹/۶۰۰/۰۰۰ تومان",
    },
    {
      img: product4,
      name: "دلیشس وی پروتئین کیو ان تی",
      price: "۳/۱۸۵/۰۰۰ تومان",
    },
  ];
  
  return (
    <section className={styles.newProduct} id="Store">
      <div className={styles.title}>
        <h2>محصولات</h2>
        <h1>جدیدترین محصولات</h1>
      </div>

      <div className={styles.products}>
        {products.map((product, index) => (
          <div key={index} className={styles.product}>
            <div className={styles.pic}>
              <img src={product.img} alt={product.name} />
            </div>

            <div className={styles.namePrice}>
              <h3>{product.name}</h3>
              <span>
                <p>قیمت:</p>
                {product.price}
              </span>
            </div>

            <button className={styles.addCart}>
              <img src={add} className={styles.addCartImg} />
              <p className={styles.addCartText}>افزودن به سبد خرید</p>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
