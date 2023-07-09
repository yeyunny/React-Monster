import React from "react";
import "./Card.scss";

function Card({ name, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{email}</h3>
    </div>
  );
}

export default Card;
