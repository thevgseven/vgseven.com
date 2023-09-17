import styles from "./Card.module.scss";
import React, { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return <div className={styles.Card}>{children}</div>;
}
