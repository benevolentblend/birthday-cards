import { useState } from "react";
import GreetingCardView from "../components/GreetingCardView";

export default function CardPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      style={{
        marginTop: "5em",
      }}
    >
      <button type="button" onClick={toggleIsOpen}>Open Card</button>
      <button type="button" onClick={toggleIsActive}>Make Card Active Card</button>

      <GreetingCardView
        greetingCard={{ color: "red", coverText: "Cover Text", insideText: "Inside Text" }}
        isOpen={isOpen}
        isActive={isActive}
      />
    </div>
  );
}
