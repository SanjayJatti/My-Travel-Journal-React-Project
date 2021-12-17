import React from "react";

export default function CardInfo(props) {
  return (
    <article className="card-info">
      <small>
        <span>
          <i className="fas fa-map-marker-alt"></i>
        </span>
        <span className="location">{props.place.location}</span>
        <a className="googleMapUrl" href={props.place.googleMapsUrl}>
          View on google map
        </a>
      </small>
      <h2>{props.place.title}</h2>
      <small className="travel-date">
        {props.place.startDate} - {props.place.endDate}
      </small>
      <p>{props.place.description}</p>
    </article>
  );
}
