import React, { useEffect } from "react";
import styles from "./PopUpCard.module.scss";
import { OutFitFont } from "@/lib/Config/Fonts/Fonts";

export default function PopupModal({
  message,
  onClose,
}: {
  message: string;
  onClose: any;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <p>{message}</p>
        <button className={OutFitFont.className} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
