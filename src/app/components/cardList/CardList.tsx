import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";
import type { Post } from "@prisma/client";

const getData = async (page: number): Promise<Post[]> => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

export default async function cardList({ page }: { page: number }) {
  const data = await getData(page);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {data?.map((item: Post) => (
          <Card item={item} key={item.title} />
        ))}
      </div>
      <Pagination page={page} />
    </div>
  );
}
