import React, { ReactNode, HTMLAttributes } from "react";
import styles from "./Tag.module.scss";

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export default function Tag({ children, ...rest }: TagProps) {
  return (
    <span className={styles.Tag} {...rest}>
      {children}
    </span>
  );
}
