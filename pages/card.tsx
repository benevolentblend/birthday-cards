import Card from "../components/Card";

export default function CardPage() {
  return (
    <div style={{
      display: "grid",
      placeItems: "center",
      height: "100%",
    }}
    >
      <Card>
        This is the letter Content
      </Card>
    </div>

  );
}
