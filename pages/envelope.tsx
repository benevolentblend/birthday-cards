import { useState } from "react";
import EnvelopeView from "../components/EnvelopeView";

export default function EnvelopePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100%",
      }}
      role="button"
      onClick={toggleIsOpen}
      onKeyDown={toggleIsOpen}
      tabIndex={0}
      aria-label="open"
    >
      <EnvelopeView envelope={{ color: "red", card: { color: "red" } }} isOpen={isOpen} />
    </div>
  );
}
