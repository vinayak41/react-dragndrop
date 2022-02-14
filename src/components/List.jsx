import React from "react";
import Card from "./Card";

const List = ({ list }) => {
  return (
    <div className="list">
      {list.title}
      {list.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default List;
