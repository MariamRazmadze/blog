import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
import { useTranslations } from "next-intl";

export default function Menu() {
  const t = useTranslations("default.menu");
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{t("hot")}</h2>
      <h1 className={styles.title}>{t("popular")}</h1>
      <MenuPosts withImage={false} />
      <h2 className={styles.subtitle}>{t("discoverByTopic")}</h2>
      <h1 className={styles.title}>{t("categories")}</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>{t("handpicked")}</h2>
      <h1 className={styles.title}>{t("worthReading")}</h1>
      <MenuPosts withImage={true} />
    </div>
  );
}
