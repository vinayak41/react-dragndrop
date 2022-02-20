import React from "react";
import { Draggable } from "react-beautiful-dnd";
import CardsContainer from "./CardsContainer";

const List = ({ list, index }) => {
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => {
        return (
          <div
            className="list"
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            {list.title}
            <CardsContainer cards={list.cards} listId={list.id} />
          </div>
        );
      }}
    </Draggable>
  );
};

export default List;
