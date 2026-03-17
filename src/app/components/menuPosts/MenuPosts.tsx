import Link from "next/link";
import styles from "./menuPosts.module.css";
import Image from "next/image";

export default function MenuPosts({ withImage }: { withImage: boolean }) {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
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
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.stories}`}>
            Stories
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
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
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
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.games}`}>Games</span>
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
  );
}
