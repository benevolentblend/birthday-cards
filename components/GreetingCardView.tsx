import {
  FC, useCallback, useEffect, useRef, useState,
} from "react";
import { useSpring, animated } from "react-spring";
import GreetingCard from "../models/GreetingCard";
import styles from "../styles/Card.module.css";

interface Props {
  greetingCard: GreetingCard;
  isActive: boolean;
  isOpen: boolean;
}

const windowOffset = 100;

const GreetingCardView:FC<Props> = ({ greetingCard, isActive, isOpen }) => {
  const wrapperEle = useRef<HTMLDivElement>(null);

  const [delayedIsActive, setDelayedIsActice] = useState(false);

  const getParentPositionBox = useCallback(() => {
    if (wrapperEle.current?.parentElement) {
      return wrapperEle.current.parentElement.getBoundingClientRect();
    }
    return new DOMRect();
  }, [wrapperEle]);

  const animatedProps = useSpring({
    duration: 500,
    left: delayedIsActive ? -(getParentPositionBox().left - windowOffset) : 0,
  });

  useEffect(() => {
    const delay = isActive ? 500 : 0;
    setTimeout(() => {
      setDelayedIsActice(isActive);
    }, delay);
  }, [isActive]);

  return (
    <animated.div
      ref={wrapperEle}
      className={`${styles.wrapper} ${isActive ? styles.active : ""} ${isOpen ? styles.open : ""}`}
      style={{
        left: animatedProps.left,
      }}
    >
      <div className={styles.close} />
      <div className={`${styles.frontPage} ${styles.page}`}>
        <h2>{greetingCard.coverText}</h2>
      </div>
      <div className={`${styles.backPage} ${styles.page}`} />
      <div className={`${styles.insidePage}  ${styles.page}`}>
        <p>{greetingCard.insideText}</p>
      </div>
    </animated.div>
  );
};

export default GreetingCardView;
