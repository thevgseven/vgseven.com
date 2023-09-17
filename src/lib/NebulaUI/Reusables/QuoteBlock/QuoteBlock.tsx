import { DMSerifDisplay } from "@/lib/Config/Fonts/Fonts";
import React, { ReactNode } from "react";
import styles from "./QuoteBlock.module.scss";

export default function QuoteBlock({ children }: { children: ReactNode }) {
  return (
    <span className={styles.QuoteBlock}>
      <span className={DMSerifDisplay.className}>{children}</span>
    </span>
  );
}
