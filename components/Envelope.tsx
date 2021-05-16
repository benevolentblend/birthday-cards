import { FC, useState, useEffect } from "react";
import styles from "../styles/Envelope.module.css";

interface Props {
  isActive: boolean;
}

const Envelope:FC<Props> = ({ children, isActive }) => {
  const [isOpen, setisOpen] = useState(false);

  const toggleOpen = () => {
    if (isActive) {
      setisOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (!isActive) {
      setisOpen(false);
    }
  }, [isActive]);

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
