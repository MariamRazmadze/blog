import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>02.20.2026 - </span>
          <span className={styles.category}>Meditation</span>
        </div>
        <Link href="/">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            maxime.
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ut ad id
          repellat impedit voluptates fugit aut, voluptatem, debitis esse itaque
          minus sunt nobis inventore. Sequi harum id doloribus. Eligendi.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}
