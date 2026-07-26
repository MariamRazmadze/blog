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

const getPlainExcerpt = (html: string, maxLength: number) => {
  const plainText = html
    .replace(/<[^>]*>/g, " ") // strip tags, keep a space so words don't merge
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ") // collapse repeated whitespace
    .trim();

  return plainText.length > maxLength
    ? plainText.slice(0, maxLength) + "..."
    : plainText;
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
        <p className={styles.desc}>{getPlainExcerpt(item.desc, 60)}</p>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}
