import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";

export default function cardList() {
  return (
    <div className={styles.container}>
      CardList
      <Pagination />
    </div>
  );
}
