import { useState } from "react";
import EnvelopeStack from "../components/EnvelopeStack";
import Envelope from "../models/Envelope";

const numberOfCards = 50;

export default function Home() {
  const [envelopes] = useState<Envelope[]>(Array.from(
    Array(numberOfCards).keys(),
  ).map((i) => ({
    color: "red",
    card: {
      color: "white",
      coverText: `Card ${i}`,
    },
  })));

  return (
    <div style={{
      height: "100%",
    }}
    >
      <EnvelopeStack envelopes={envelopes} />
    </div>
  );
}
