import styles from "./menuCategories.module.css";
import { Link } from "@/i18n/navigation";

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
        href="/blog?cat=people"
        className={`${styles.categoryItem} ${styles.people}`}
      >
        People
      </Link>
      <Link
        href="/blog?cat=events"
        className={`${styles.categoryItem} ${styles.events}`}
      >
        Events
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
