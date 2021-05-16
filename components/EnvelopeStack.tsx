import { FC, ReactNode } from "react";
import { FixedSizeList } from "react-window";
import styles from "../styles/EnvelopeStack.module.css";

interface Props {
  envelopes: ReactNode[];
}

const EnvelopeStack:FC<Props> = ({ envelopes }: Props) => (
  <div>
    <FixedSizeList {...{
      height: 500,
      itemCount: envelopes.length,
      layout: "horizontal",
      itemSize: 250,
      width: 700,
    }}
    >
      {({ index, style }) => (
        <div style={{
          ...style,
          display: "grid",
          alignItems: "center",
        }}
        >
          <div className={styles.item}>
            {envelopes[index]}
          </div>
        </div>
      )}
    </FixedSizeList>
  </div>
);

export default EnvelopeStack;
