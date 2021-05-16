import { FC, ReactNode } from "react";
import styles from "../styles/EnvelopeStack.module.css";

interface Props {
  envelopes: ReactNode[];
}

const EnvelopeStack:FC<Props> = ({ envelopes }: Props) => (
  <div className={styles.container}>
    {envelopes.map((envelope) => (
      <div className={styles.item}>
        {envelope}
      </div>
    ))}
  </div>
);

export default EnvelopeStack;
