import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";
import { useState } from "react";

import "./App.css";

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
  const [data, setData] = useState(dataArray);
  const [pollStatus, setPollStatus] = useState(0);

  const onPollChange = (event) => {
    const objName = event.target.innerText;

    const newData = data.filter((item) => {
      if (item.name !== objName) {
        return item;
      }
      return { ...item, value: item.value++ };
    });
    setData(newData);
    setPollStatus(1);
  };

  return (
    <>
      <h1>Whats Movie you want to see?</h1>

      {
        {
          1: (
            <ResponsiveContainer width={"100%"} height={500}>
              <BarChart data={data} margin={{ bottom: 120 }}>
                <Bar dataKey="value" fill="#8884d8" />
                <XAxis dataKey={"name"} interval={0} angle={-10} dy={32} />
              </BarChart>
            </ResponsiveContainer>
          ),
          0: data.map((item, index) => {
            return (
              <button key={index} onClick={onPollChange}>
                {item.name}
              </button>
            );
          }),
        }[pollStatus]
      }
    </>
  );
}

export default App;
