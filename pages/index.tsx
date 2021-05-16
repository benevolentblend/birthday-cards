import { ReactNode } from "react";
import Envelope from "../components/Envelope";
import EnvelopeStack from "../components/EnvelopeStack";

const numberOfCards = 50;

export default function Home() {
  const envelopes:ReactNode[] = Array.from(
    Array(numberOfCards).keys(),
  ).map((i) => (<Envelope key={i} isActive={false} />));

  return (
    <div style={{
      display: "grid",
      placeItems: "center",
      height: "100%",
    }}
    >
      <EnvelopeStack envelopes={envelopes} />
    </div>
  );
}
