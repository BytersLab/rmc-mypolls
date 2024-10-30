import "./App.css";
import { Poll } from "./components/Poll.comp.jsx";

const dataArray = [
  {
    name: "Spiderman 1",
    value: 1,
  },
  {
    name: "Harry Potter 5",
    value: 1,
  },
  {
    name: "Herr der Ringe 2",
    value: 1,
  },
];

function App() {
  return (
    <>
      <h1>MyPoll</h1>
      <div className="pollcontainer">
        <Poll dataArray={dataArray} color={"#05def3"} />
      </div>
    </>
  );
}

export default App;
