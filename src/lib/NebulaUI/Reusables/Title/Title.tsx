import styles from "./Title.module.scss";
import React, { ReactNode } from "react";
import { RedRoseFont } from "@/lib/Config/Fonts/Fonts";

type TitleProps = {
  children: ReactNode;
  gradientName: string;
};

export default function Title({ children, gradientName }: TitleProps) {
  const validGradientNames = Object.keys(styles);
  const gradientClass = validGradientNames.includes(gradientName)
    ? styles[gradientName]
    : "";

  return (
    <div className={`${styles.Title} ${gradientClass}`}>
      <h1 className={RedRoseFont.className}>{children}</h1>
    </div>
  );
}
