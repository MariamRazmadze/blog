"use client";

import styles from "./navbar.module.css";
import { Link, usePathname } from "@/i18n/navigation";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuYoutube } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../localeSwitcher/LocaleSwitcher";

export default function Navbar() {
  const t = useTranslations("default.nav");
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const navLinkClass = (href: string) =>
    `${styles.link} ${isActive(href) ? styles.active : ""}`;
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
        <Link href="/" className={navLinkClass("/")}>
          {t("homepage")}
        </Link>
        <Link href="/contact" className={navLinkClass("/contact")}>
          {t("contact")}
        </Link>
        <Link href="/about" className={navLinkClass("/about")}>
          {t("about")}
        </Link>
        <AuthLinks />
        <LocaleSwitcher />
      </div>
    </div>
  );
}
