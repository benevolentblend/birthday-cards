import Envelope from "../components/Envelope";
import Card from "../components/Card";
import EnvelopeStack from "../components/EnvelopeStack";

export default function Home() {
  const envelopes = [
    <Envelope>
      <Card>
        This is the letter Content
      </Card>
    </Envelope>,
    <Envelope>
      <Card>
        This a third another letter Content
      </Card>
    </Envelope>,
    <Envelope>
      <Card>
        This is another letter Content
      </Card>
    </Envelope>,
  ];

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
