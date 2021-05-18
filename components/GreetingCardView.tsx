import { FC } from "react";
import GreetingCard from "../models/GreetingCard";
import styles from "../styles/Card.module.css";

interface Props {
  greetingCard: GreetingCard;
  isOpen: boolean;
}

const GreetingCardView:FC<Props> = ({ greetingCard, isOpen }) => (
  <div className={`${styles.wrapper} ${isOpen ? styles.open : ""}`}>
    <div className={styles.frontPage}>
      <p>{greetingCard.coverText}</p>
    </div>
    <div className={styles.insidePage} />
  </div>
);

export default GreetingCardView;
