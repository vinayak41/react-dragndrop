import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";

const CardsContainer = ({ cards, listId }) => {
  return (
    <Droppable droppableId={listId} type="card">
      {(provided) => {
        return (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {cards.map((card, index) => (
              <Card key={card.id} card={card} index={index} />
            ))}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

export default CardsContainer;
