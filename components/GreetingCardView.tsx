import { FC } from "react";
import GreetingCard from "../models/GreetingCard";
import styles from "../styles/Card.module.css";

interface Props {
  greetingCard: GreetingCard;
}

const GreetingCardView:FC<Props> = ({ greetingCard }) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <p>{greetingCard.coverText}</p>
    </div>
  </div>
);

export default GreetingCardView;
