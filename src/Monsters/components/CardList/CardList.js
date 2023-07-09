import React from "react";
import "./CardList.scss";
import Card from "../Card/Card";

function CardList({ monsterList }) {
  console.log(typeof monsterList, monsterList);
  return (
    <div>
      {monsterList.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}

export default CardList;
