"use client";

import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

export default function Pagination({ page }: { page: number }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        className={styles.button}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
}
