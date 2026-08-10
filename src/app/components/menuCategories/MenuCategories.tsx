import styles from "./menuCategories.module.css";
import { Link } from "@/i18n/navigation";
import { prisma } from "@/utils/connect";

export default async function MenuCategories() {
  const categories = await prisma.category.findMany();

  return (
    <div className={styles.categoryList}>
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/blog?cat=${cat.slug}`}
          className={`${styles.categoryItem} ${styles[cat.slug] ?? ""}`}
        >
          {cat.title}
        </Link>
      ))}
    </div>
  );
}
