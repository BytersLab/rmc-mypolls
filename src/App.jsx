import { useContext } from "react";
import "./App.css";
import { Poll } from "./components/Poll.comp.jsx";
import { Modal } from "./components/Modal.comp.jsx";
import { PollContext } from "./contexts/Polls.context.jsx";

function App() {
  const { polls } = useContext(PollContext);

  return (
    <>
      <h1>MyPoll</h1>
      <Modal />
      {polls.length ? (
        <div className="pollcontainer">
          {polls.map((item, index) => {
            return <Poll key={index} dataObj={item} />;
          })}
        </div>
      ) : (
        "No poll available, create one!"
      )}
    </>
  );
}

export default App;
