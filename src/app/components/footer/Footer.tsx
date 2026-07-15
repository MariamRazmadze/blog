import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";
import { LuGithub, LuLinkedin, LuYoutube, LuFacebook } from "react-icons/lu";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.svg" alt="Mariam's Blog" width={50} height={50} />
          <h1 className={styles.logoText}>{"Mariam's Blog"}</h1>
        </div>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          numquam, quidem alias eum, ipsam aliquam repudiandae voluptas optio
          qui hic vero veniam ea quod ex atque asperiores natus facere sequi.
        </p>
        <div className={styles.icons}>
          <a
            href="https://github.com/MariamRazmadze"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuGithub size={22} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <LuLinkedin size={22} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <LuYoutube size={22} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <LuFacebook size={22} />
          </a>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Coding</Link>
          <Link href="/">Games</Link>
          <Link href="/">Stories</Link>
          <Link href="/">Meditation</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <a
            href="https://github.com/MariamRazmadze"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
}
