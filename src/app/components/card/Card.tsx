import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

export type Post = {
  id: string;
  title: string;
  createdAt: string;
  catSlug: string;
  img?: string;
  desc: string;
  slug: string;
};

export default function Card({ item }: { item: Post }) {
  return (
    <div className={styles.container}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )}

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc.substring(0, 60)}>{item.desc}</p>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}
