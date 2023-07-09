import React, { useEffect, useState } from "react";
import "./Monsters.scss";
import CardList from "./components/CardList/CardList";

function Monsters() {
  const [monsterList, setMonsterList] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const inputHandler = (event) => {
    setSearch(event.target.value);

    const answer = monsterList.filter((monster) => {
      return monster.name.includes(event.target.value);
    });

    setFiltered(answer);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((data) => setMonsterList(data));
  }, []);

  return (
    <div className="monsters">
      <h1 className="title">Monsters</h1>
      <input
        value={search}
        onChange={inputHandler}
        className="search"
        placeholder="Search"
      />
      <CardList monsterList={search.length === 0 ? monsterList : filtered} />
    </div>
  );
}

export default Monsters;
