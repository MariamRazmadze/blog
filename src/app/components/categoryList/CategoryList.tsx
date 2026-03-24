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
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

export default async function CategoryList() {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1>Categories</h1>
      <div className={styles.categories}>
        {data?.map((item: Category) => (
          <Link
            href="/blog?cat=style"
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
