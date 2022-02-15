import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";

const List = ({ list }) => {
  return (
    <Droppable droppableId={list.id}>
      {(provided) => {
        return (
          <div
            className="list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {list.title}
            {list.cards.map((card, index) => (
              <Card key={card.id} card={card} index={index} />
            ))}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

export default List;
