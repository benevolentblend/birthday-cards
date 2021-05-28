import {
  FC, useCallback, useEffect, useRef,
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

  const getParentPositionBox = useCallback(() => {
    if (wrapperEle.current?.parentElement) {
      return wrapperEle.current.parentElement.getBoundingClientRect();
    }
    return new DOMRect();
  }, [wrapperEle]);

  const { left } = getParentPositionBox();

  const animatedProps = useSpring({
    from: { left: 0, top: 0, transform: "rotate(0deg)" },
    to: async (next) => {
      if (isActive) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        await next({ top: -200, duraction: 250 });
        await next({
          left: -(left + window.pageXOffset - windowOffset),
          transform: "rotateZ(90deg)",
          duraction: 250,
        });
      } else {
        await next({ left: 0, duraction: 200, transform: "rotate(0deg)" });
        await next({ top: 0, duraction: 200 });
      }
    },
  });

  useEffect(() => {
    console.log({ left, result: -(left + window.pageXOffset - windowOffset), screenX: window.pageXOffset });
  }, [isActive]);

  return (
    <animated.div
      ref={wrapperEle}
      style={{
        left: animatedProps.left,
        top: animatedProps.top,
        position: "absolute",
        transform: animatedProps.transform,
      }}
    >
      <div className={`${styles.wrapper} ${isOpen ? styles.open : ""}`}>
        <div className={styles.close} />
        <div className={`${styles.frontPage} ${styles.page}`}>
          <h2>
            {greetingCard.coverText}
            {" "}
            {left.toFixed()}
          </h2>
        </div>
        <div className={`${styles.backPage} ${styles.page}`} />
        <div className={`${styles.insidePage}  ${styles.page}`}>
          <p>{greetingCard.insideText}</p>
        </div>
      </div>

    </animated.div>
  );
};

export default GreetingCardView;
