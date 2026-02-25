import styles from "./menuCategories.module.css";
import Link from "next/link";

export default function MenuCategories() {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=coding"
        className={`${styles.categoryItem} ${styles.coding}`}
      >
        Coding
      </Link>
      <Link
        href="/blog?cat=habits"
        className={`${styles.categoryItem} ${styles.habits}`}
      >
        Habits
      </Link>
      <Link
        href="/blog?cat=meditation"
        className={`${styles.categoryItem} ${styles.meditation}`}
      >
        Meditation
      </Link>
      <Link
        href="/blog?cat=health"
        className={`${styles.categoryItem} ${styles.health}`}
      >
        Health
      </Link>
      <Link
        href="/blog?cat=manifestation"
        className={`${styles.categoryItem} ${styles.manifestation}`}
      >
        Manifestation
      </Link>
      <Link
        href="/blog?cat=yoga"
        className={`${styles.categoryItem} ${styles.yoga}`}
      >
        Yoga
      </Link>
    </div>
  );
}
