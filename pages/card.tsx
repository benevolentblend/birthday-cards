import { useState } from "react";
import GreetingCardView from "../components/GreetingCardView";

export default function CardPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        marginTop: "5em",
      }}
      role="button"
      onClick={toggleIsOpen}
      onKeyDown={toggleIsOpen}
      tabIndex={0}
      aria-label="open"
    >
      <GreetingCardView
        greetingCard={{ color: "red", coverText: "Cover Text", insideText: "Inside Text" }}
        isOpen={isOpen}
      />
    </div>
  );
}
