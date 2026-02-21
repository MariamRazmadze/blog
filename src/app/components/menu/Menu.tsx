import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot?"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.meditation}`}>
              Meditation
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
              atque!
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Mariam Razmadze</span>
              <span className={styles.date}> - 2/21/2026</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.health}`}>
              Health
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
              atque!
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Mariam Razmadze</span>
              <span className={styles.date}> - 2/21/2026</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.strength}`}>
              Strength
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
              atque!
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Mariam Razmadze</span>
              <span className={styles.date}> - 2/21/2026</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.habits}`}>
              Habits
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
              atque!
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Mariam Razmadze</span>
              <span className={styles.date}> - 2/21/2026</span>
            </div>
          </div>
        </Link>
      </div>
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
        <Link
          href="/blog?cat=meditation"
          className={`${styles.categoryItem} ${styles.meditation}`}
        >
          Meditation
        </Link>
        <Link
          href="/blog?cat=meditation"
          className={`${styles.categoryItem} ${styles.meditation}`}
        >
          Meditation
        </Link>
        <Link
          href="/blog?cat=meditation"
          className={`${styles.categoryItem} ${styles.meditation}`}
        >
          Meditation
        </Link>
        <Link
          href="/blog?cat=meditation"
          className={`${styles.categoryItem} ${styles.meditation}`}
        >
          Meditation
        </Link>
      </div>
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editor Picks</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.meditation}`}>
              Meditation
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
              atque!
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Mariam Razmadze</span>
              <span className={styles.date}> - 2/21/2026</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.health}`}>
              Health
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
              atque!
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Mariam Razmadze</span>
              <span className={styles.date}> - 2/21/2026</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.strength}`}>
              Strength
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
              atque!
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Mariam Razmadze</span>
              <span className={styles.date}> - 2/21/2026</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.habits}`}>
              Habits
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
              atque!
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Mariam Razmadze</span>
              <span className={styles.date}> - 2/21/2026</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
