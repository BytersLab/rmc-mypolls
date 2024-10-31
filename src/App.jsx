import { useContext } from "react";
import "./App.css";
import { Poll } from "./components/Poll.comp.jsx";
import { Modal } from "./components/Modal.comp.jsx";
import { PollContext } from "./contexts/Polls.context.jsx";
import { Loader } from "./components/Loader.comp.jsx";
import { LoaderContext } from "./contexts/Loader.context.jsx";

function App() {
  const { polls } = useContext(PollContext);
  const { loading } = useContext(LoaderContext);

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
      ) : loading ? (
        <Loader />
      ) : (
        "No Poll available, create one!"
      )}
    </>
  );
}

export default App;
