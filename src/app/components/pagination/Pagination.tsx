"use client";

import styles from "./pagination.module.css";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";

type PaginationProps = {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
};

export default function Pagination({
  page,
  hasPrev,
  hasNext,
}: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const goToPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(newPage));
    router.push(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => goToPage(page - 1)}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => goToPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
