import { Link } from "@/i18n/navigation";
import styles from "./card.module.css";
import Image from "next/image";
import { getPlainExcerpt } from "@/utils/text";
import type { Post } from "@prisma/client";
import { useFormatter } from "next-intl";

export default function Card({ item }: { item: Post }) {
  const format = useFormatter();
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
            {format.dateTime(item.createdAt, { dateStyle: "medium" })} -{" "}
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
