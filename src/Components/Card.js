import CardInfo from "./CardInfo";

export default function Card(props) {
  return (
    <section className="card">
      <img className="card-img" src={props.place.imageUrl} />
      <CardInfo place={props.place} />
    </section>
  );
}
