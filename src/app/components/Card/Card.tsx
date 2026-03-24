import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

export type Post = {
  id: string;
  title: string;
};

export default function Card({ key, item }: { key: string; item: Post }) {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>02.20.2026 - </span>
          <span className={styles.category}>Meditation</span>
        </div>
        <Link href="/">
          <h1>{item.title}</h1>
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
