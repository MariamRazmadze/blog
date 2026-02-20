import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

export default function CategoryList() {
  return (
    <div className={styles.container}>
      <h1>Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Coding
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.habits}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Habits
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.meditation}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Meditation
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.health}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Health
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.manifestation}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Manifestation
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.yoga}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Yoga
        </Link>
      </div>
    </div>
  );
}
