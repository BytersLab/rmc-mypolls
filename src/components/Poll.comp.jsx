import { useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";

export function Poll({ dataArray, color }) {
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
      <div className="poll">
        <h3 className="poll-title">Whats Movie you want to see?</h3>
        {
          {
            1: (
              <BarChart
                width={300}
                height={300}
                data={data}
                margin={{ bottom: 120 }}
              >
                <Bar dataKey="value" fill={color} />
                <XAxis dataKey={"name"} interval={0} angle={-10} dy={32} />
              </BarChart>
            ),
            0: (
              <div className="poll-button-container">
                {data.map((item, index) => {
                  return (
                    <button key={index} onClick={onPollChange}>
                      {item.name}
                    </button>
                  );
                })}
              </div>
            ),
          }[pollStatus]
        }
      </div>
    </>
  );
}