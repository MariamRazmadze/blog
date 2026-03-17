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
        href="/blog?cat=games"
        className={`${styles.categoryItem} ${styles.games}`}
      >
        Games
      </Link>
      <Link
        href="/blog?cat=meditation"
        className={`${styles.categoryItem} ${styles.meditation}`}
      >
        Meditation
      </Link>
      <Link
        href="/blog?cat=stories"
        className={`${styles.categoryItem} ${styles.stories}`}
      >
        Stories
      </Link>
      <Link
        href="/blog?cat=gardening"
        className={`${styles.categoryItem} ${styles.gardening}`}
      >
        Gardening
      </Link>
      <Link
        href="/blog?cat=yoga"
        className={`${styles.categoryItem} ${styles.food}`}
      >
        Food
      </Link>
    </div>
  );
}
