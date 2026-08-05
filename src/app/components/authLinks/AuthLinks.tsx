"use client";

import { Link } from "@/i18n/navigation";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

export default function AuthLinks() {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  const t = useTranslations("default.auth");
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          {t("login")}
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            {t("write")}
          </Link>
          <span className={styles.link} onClick={() => signOut()}>
            {t("logout")}
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}
