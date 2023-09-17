import styles from "./Ref.module.scss";
import React, { ReactNode } from "react";

export default function Ref({
  children,
  url,
}: {
  children: ReactNode;
  url: string;
}) {
  return (
    <a href={url} className={styles.Ref}>
      {children}
    </a>
  );
}
