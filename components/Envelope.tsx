import { useState } from "react";
import styles from "../styles/Envelope.module.css";

export default function Envelope() {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.mail} ${isOpen ? styles.mailOpen : ""}`}
        role="button"
        onClick={toggleOpen}
        onKeyDown={toggleOpen}
        tabIndex={0}
      >
        <div className={styles.cover} />
        <div className={styles.letter}>
          @
        </div>
      </div>
    </div>
  );
}
