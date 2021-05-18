import { useState } from "react";
import GreetingCardView from "../components/GreetingCardView";

export default function CardPage() {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div
      style={{
        marginTop: "5em",
      }}
      onClick={toggleOpen}
    >
      <GreetingCardView greetingCard={{ color: "red", coverText: "this is the content" }} isOpen={isOpen} />
    </div>
  );
}
