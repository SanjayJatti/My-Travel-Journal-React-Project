import Card from "./Card";
import data from "../data";

export default function Main() {
  const CardComponents = data.map((place) => {
    return <Card key={data.key} place={place} />;
  });
  return <main className="main">{CardComponents}</main>;
}
