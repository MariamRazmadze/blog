import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/utils/connect";
import { getPlainExcerpt } from "@/utils/text";

export default async function Featured() {
  const post = await prisma.post.findFirst({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className={styles.container}>
      <h1>
        <b>Hey, I&apos;m Mariam! </b>I&apos;m writing about things I&apos;m
        learning.
      </h1>
      {post && (
        <div className={styles.post}>
          {post.img && (
            <div className={styles.imgContainer}>
              <Image src={post.img} alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.postDesc}>{getPlainExcerpt(post.desc, 150)}</p>
            <Link href={`/posts/${post.slug}`}>
              <button className={styles.button}>Read More</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
