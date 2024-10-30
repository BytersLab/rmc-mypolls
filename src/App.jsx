import "./App.css";
import { Poll } from "./components/Poll.comp.jsx";

const dataArray = [
  {
    title: "Whats Movie you want to see?",
    color: "#ffffff",
    options: [
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
    ],
  },
  {
    title: "Whats Book want to read?",
    color: "#ffffff",
    options: [
      {
        name: "Book 1",
        value: 1,
      },
      {
        name: "Book 2",
        value: 1,
      },
      {
        name: "Book 3",
        value: 1,
      },
    ],
  },
];

function App() {
  return (
    <>
      <h1>MyPoll</h1>
      <div className="pollcontainer">
        {dataArray.map((item, index) => {
          return <Poll key={index} dataArray={item} color={"#05def3"} />;
        })}
      </div>
    </>
  );
}

export default App;
