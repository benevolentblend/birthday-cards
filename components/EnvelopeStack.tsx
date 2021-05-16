import {
  CSSProperties, Dispatch, FC, SetStateAction, useState,
} from "react";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Envelope from "../models/Envelope";
import EnvelopeView from "./EnvelopeView";
import styles from "../styles/EnvelopeStack.module.css";

interface Props {
  envelopes: Envelope[];
}

interface EnvelopeItemProps {
  index: number;
  data: {
    envelopes: Envelope[];
    activeEnvelope: number;
    setActiveEnvelope: Dispatch<SetStateAction<number>>;
  };
  style: CSSProperties;
}

const EnvelopeItem = ({
  index, style, data,
}: EnvelopeItemProps) => {
  const { envelopes, activeEnvelope, setActiveEnvelope } = data;
  const isActive = activeEnvelope === index;
  const toggleActive = () => {
    if (activeEnvelope === -1 || activeEnvelope === index) {
      const toggledIsActive = !isActive;

      setActiveEnvelope(toggledIsActive ? index : -1);
    }
  };

  return (
    <div style={{
      ...style,
      display: "grid",
      alignItems: "center",
    }}
    >
      <div
        className={`${styles.item} ${isActive ? styles.itemActive : ""}`}
        role="button"
        onClick={toggleActive}
        onKeyDown={(event) => {
          if (event.code === "Space") {
            toggleActive();
          }
        }}
        tabIndex={0}
        aria-label="open"
      >
        <EnvelopeView envelope={envelopes[index]} isOpen={isActive} />
      </div>
    </div>
  );
};

const EnvelopeStack:FC<Props> = ({ envelopes }: Props) => {
  const [activeEnvelope, setActiveEnvelope] = useState(-1);

  return (
    <AutoSizer>
      {({ height, width }) => (
        <FixedSizeList {...{
          height,
          itemCount: envelopes.length,
          layout: "horizontal",
          itemSize: 250,
          width,
          className: activeEnvelope === -1 ? styles.scrollableList : styles.fixedList,
          style: {
            overflowX: activeEnvelope === -1 ? "scroll" : "hidden",
          },
          itemData: {
            envelopes,
            activeEnvelope,
            setActiveEnvelope,
          },
        }}
        >
          {EnvelopeItem}
        </FixedSizeList>
      )}
    </AutoSizer>
  );
};

export default EnvelopeStack;
