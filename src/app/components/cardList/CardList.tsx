import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";
import { getPosts, POSTS_PER_PAGE } from "@/utils/posts";

export default async function CardList({
  page,
  cat,
}: {
  page: number;
  cat?: string;
}) {
  const { posts, count } = await getPosts({ page, cat });

  const hasPrev = page > 1;
  const hasNext = POSTS_PER_PAGE * page < count;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
}
