import { FC } from "react";
import Envelope from "../models/Envelope";
import styles from "../styles/Envelope.module.css";
import GreetingCardView from "./GreetingCardView";

interface Props {
  envelope: Envelope;
  isOpen: boolean;
}

const EnvelopeView:FC<Props> = ({ envelope, isOpen }) => (
  <div className={`${styles.wrapper} ${isOpen ? styles.mailOpen : ""}`}>
    <div className={styles.seal} />
    <div className={styles.contents}>
      <GreetingCardView greetingCard={envelope.card} isActive={isOpen} isOpen={false} />
    </div>
    <div className={styles.face} />
  </div>
);

export default EnvelopeView;
