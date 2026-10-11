import CardList from "@/app/components/cardList/CardList";
import Menu from "@/app/components/menu/Menu";
import styles from "./blogPage.module.css";

type BlogProps = {
  searchParams: Promise<{ page?: string; cat?: string }>;
};

export default async function BlogPage({ searchParams }: BlogProps) {
  const { page: pageParam, cat } = await searchParams;
  const page = parseInt(pageParam ?? "1") || 1;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat ? `${cat} Blog` : "Blog"}</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
}
