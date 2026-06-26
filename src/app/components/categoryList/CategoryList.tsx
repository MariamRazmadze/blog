import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

type Category = {
  _id: string;
  slug: string;
  title: string;
  img: string;
  posts: [];
};

const getData = async () => {
  const res = await fetch("api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  const data = await res.json();
  return data;
};

export default async function CategoryList() {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1>Categories</h1>
      <div className={styles.categories}>
        {data?.map((item: Category) => (
          <Link
            href="/blog?cat=coding"
            className={`${styles.category} ${styles[item.slug]}`}
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
