import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import List from "./components/List";
import { DragDropContext } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import { compareObjects } from "./utils";

function App() {
  const [lists, setLists] = useState(data);

  const handleDragEnd = ({ destination, source }) => {
    if (destination && source && !compareObjects(destination, source)) {
      let newLists = lists;
      //find source card and remove from source list
      const sourceCard = newLists
        .find((list) => list.id === source.droppableId)
        .cards.splice(source.index, 1)[0];
      //add sourceCard in destination list
      newLists
        .find((list) => list.id === destination.droppableId)
        .cards.splice(destination.index, 0, sourceCard);
      console.log(newLists);
      console.log(lists);
      setLists(newLists);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="app">
        {lists.map((list) => (
          <List key={list.id} list={list} />
        ))}
      </div>
    </DragDropContext>
  );
}

export default App;
