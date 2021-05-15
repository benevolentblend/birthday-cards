import Envelope from "../components/Envelope";
import Card from "../components/Card";

export default function Home() {
  return (
    <div style={{
      display: "grid",
      placeItems: "center",
      height: "100%",
    }}
    >
      <Envelope>
        <Card>
          This is the letter Content
        </Card>
      </Envelope>
    </div>

  );
}
