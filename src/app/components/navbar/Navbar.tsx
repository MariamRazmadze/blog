import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuYoutube } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("default.nav");
  return (
    <div className={styles.container}>
      <div className={styles.social}>
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
      <div className={styles.logo}> {t("title")}</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          {t("homepage")}
        </Link>
        <Link href="/contact" className={styles.link}>
          {t("contact")}
        </Link>
        <Link href="/about" className={styles.link}>
          {t("about")}
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
}
