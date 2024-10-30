import { useState, useEffect } from "react";
import "./App.css";
import { Poll } from "./components/Poll.comp.jsx";

function App() {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dataArray"));
    setDataArray(data);
  }, []);

  return (
    <>
      <h1>MyPoll</h1>

      {dataArray.length ? (
        <div className="pollcontainer">
          {dataArray.map((item, index) => {
            return <Poll key={index} dataArray={item} color={"#05def3"} />;
          })}
        </div>
      ) : (
        "No poll available, create one!"
      )}
    </>
  );
}

export default App;
