import {
  FC, useCallback, useRef,
} from "react";
import { useSpring, animated } from "react-spring";
import GreetingCard from "../models/GreetingCard";
import styles from "../styles/Card.module.css";

interface Props {
  greetingCard: GreetingCard;
  isActive: boolean;
  isOpen: boolean;
}

const windowXMargin = 100;
const windowYMargin = 100;

const GreetingCardView:FC<Props> = ({ greetingCard, isActive, isOpen }) => {
  const wrapperEle = useRef<HTMLDivElement>(null);

  const getParentPositionBox = useCallback(() => {
    if (wrapperEle.current?.parentElement) {
      return wrapperEle.current.parentElement.getBoundingClientRect();
    }
    return { left: 0, top: 0 };
  }, [wrapperEle]);

  const { left, top } = getParentPositionBox();

  const animatedStyles = useSpring({
    from: {
      left: 0,
      top: 0,
      transform: "rotate(90deg)",
      width: "300px",
      height: "200px",
    },
    to: async (next) => {
      if (isActive) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        await next({ top: -200, duraction: 250 });
        await next({
          left: -(left + window.pageXOffset - windowXMargin),
          top: -(top + window.pageYOffset - windowYMargin),
          transform: "rotateZ(0deg)",
          duraction: 250,
          width: `${(window.innerWidth - windowXMargin * 2)}px`,
        });
      } else {
        await next({
          left: 0,
          duraction: 200,
          transform: "rotate(90deg)",
          width: "300px",
        });
        await next({ top: 0, duraction: 200 });
      }
    },
  });

  return (
    <animated.div
      ref={wrapperEle}
      style={{
        ...animatedStyles,
        position: "absolute",
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
