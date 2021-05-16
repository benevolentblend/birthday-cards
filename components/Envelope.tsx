import { FC, useState } from "react";
import styles from "../styles/Envelope.module.css";

const Envelope:FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div
      className={`${styles.wrapper} ${isOpen ? styles.mailOpen : ""}`}
      role="button"
      onClick={toggleOpen}
      onKeyDown={toggleOpen}
      tabIndex={0}
      aria-label="open"
    >
      <div className={styles.seal} />
      <div className={styles.contents}>
        {children}
      </div>
      <div className={styles.face} />
    </div>
  );
};

export default Envelope;
