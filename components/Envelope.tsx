import { FC, useState } from "react";
import styles from "../styles/Envelope.module.css";

const Envelope:FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.contents}>
        {children}
      </div>
      <div
        className={`${styles.mail} ${isOpen ? styles.mailOpen : ""}`}
        role="button"
        onClick={toggleOpen}
        onKeyDown={toggleOpen}
        tabIndex={0}
      >
        <div className={styles.cover} />
      </div>
    </div>
  );
};

export default Envelope;
