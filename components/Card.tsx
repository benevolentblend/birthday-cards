import { FC } from "react";
import styles from "../styles/Card.module.css";

const Card:FC = ({ children }) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      {children}
    </div>
  </div>
);

export default Card;
