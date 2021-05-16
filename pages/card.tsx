import GreetingCardView from "../components/GreetingCardView";

export default function CardPage() {
  return (
    <div style={{
      display: "grid",
      placeItems: "center",
      height: "100%",
    }}
    >
      <GreetingCardView greetingCard={{ color: "red", coverText: "this is the content" }} />
    </div>
  );
}
