import { useState, useEffect } from "react";
import "./App.css";
import { Poll } from "./components/Poll.comp.jsx";
import { Modal } from "./components/Modal.comp.jsx";

function App() {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dataArray"));
    if (!data) {
      return;
    }
    setDataArray(data);
    return () => {};
  }, []);

  useEffect(() => {
    console.log(dataArray);
  }, [dataArray]);

  return (
    <>
      <h1>MyPoll</h1>
      <Modal dataArray={dataArray} setDataArray={setDataArray} />
      {dataArray.length ? (
        <div className="pollcontainer">
          {dataArray.map((item, index) => {
            return <Poll key={index} dataObj={item} dataArray={dataArray} />;
          })}
        </div>
      ) : (
        "No poll available, create one!"
      )}
    </>
  );
}

export default App;
