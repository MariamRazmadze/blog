import CardList from "@/app/components/cardList/CardList";
import Menu from "@/app/components/menu/Menu";
import styles from "./blogPage.module.css";

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Coding Blog</h1>
      <div className={styles.content}>
        <CardList page={1} cat="" />
        <Menu />
      </div>
    </div>
  );
}
