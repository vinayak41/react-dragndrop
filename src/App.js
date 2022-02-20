import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import List from "./components/List";
import { DragDropContext } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import { compareObjects } from "./utils";
import { Droppable } from "react-beautiful-dnd";

function App() {
  const [lists, setLists] = useState(data);

  const moveCard = (source, destination) => {
    let newLists = lists;
    //find source card and remove from source list
    const sourceCard = newLists
      .find((list) => list.id === source.droppableId)
      .cards.splice(source.index, 1)[0];
    //add sourceCard in destination list
    newLists
      .find((list) => list.id === destination.droppableId)
      .cards.splice(destination.index, 0, sourceCard);
    setLists(newLists);
  };

  const moveList = (source, destination) => {
    console.log("list moved");
    let newLists = lists;
    //remove source list
    const sourceList = lists.splice(source.index, 1)[0];
    //add source list
    newLists.splice(destination.index, 0, sourceList);
    setLists(newLists);
  };

  const handleDragEnd = ({ source, destination, type }) => {
    if (destination && source && !compareObjects(destination, source)) {
      if (type === "card") {
        moveCard(source, destination);
      }
      if (type === "list") {
        moveList(source, destination);
      }
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="app">
        <Droppable droppableId="board" type="list" direction="horizontal">
          {(provided) => {
            return (
              <div
                className="board"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {lists.map((list, index) => (
                  <List key={list.id} list={list} index={index} />
                ))}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
