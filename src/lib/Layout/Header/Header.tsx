"use client";

import styles from "./Header.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  const isHome = path !== "/";

  return (
    <div
      className={styles.Center}
      style={{ background: `${isHome ? "transparent" : "#7659d5"}` }}
    >
      <div className={styles.header}>
        <Link href={"/"}>
          <span>VGSEVEN</span>
        </Link>
        <Link href={"/articles"}>
          <span>ARTICLES</span>
        </Link>
        <Link href={"/projects"}>
          <span>PROJECTS</span>
        </Link>
        <Link href={"/explore"}>
          <span>EXPLORE</span>
        </Link>
      </div>
    </div>
  );
}
