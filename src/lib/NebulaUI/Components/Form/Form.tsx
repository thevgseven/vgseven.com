import styles from "./Form.module.scss";
import React, { ReactNode, HTMLAttributes } from "react";

interface FormProps extends HTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export default function Form({ children, ...rest }: FormProps) {
  return (
    <form className={styles.Form} {...rest}>
      {children}
    </form>
  );
}
