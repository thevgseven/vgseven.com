import styles from "./Quote.module.scss";
import React, { ReactNode } from "react";
import { DMSerifDisplay } from "@/lib/Config/Fonts/Fonts";

export default function Quote({ children }: { children: ReactNode }) {
  return (
    <span className={styles.Quote}>
      <span className={DMSerifDisplay.className}>{children}</span>
    </span>
  );
}
