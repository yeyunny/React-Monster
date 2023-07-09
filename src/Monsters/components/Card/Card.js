import React from "react";
import "./Card.scss";

function Card({ monster }) {
  const { id, name, email } = monster;
  return (
    <div>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h2>{name}</h2>
      <h3>{email}</h3>
    </div>
  );
}

export default Card;
