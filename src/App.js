import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import List from "./components/List";

function App() {
  return (
    <div className="app">
      {data.map((list) => (
        <List key={list.id} list={list} />
      ))}
    </div>
  );
}

export default App;
