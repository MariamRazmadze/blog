import styles from "./categoryList.module.css";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { prisma } from "@/utils/connect";

export default async function CategoryList() {
  const categories = await prisma.category.findMany();
  const t = await getTranslations("default.menu");

  return (
    <div className={styles.container}>
      <h1>{t("categories")}</h1>
      <div className={styles.categories}>
        {categories.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug] ?? ""}`}
            key={item.slug}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
