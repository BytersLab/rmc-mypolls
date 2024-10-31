import PropTypes from "prop-types";
import { useState } from "react";
import { Bar, BarChart, XAxis } from "recharts";
import "./Poll.style.css";

export function Poll({ dataObj, dataArray }) {
  console.log("render");
  const [data, setData] = useState(dataObj);
  const [pollStatus, setPollStatus] = useState(0);

  const onPollChange = (event) => {
    const objName = event.target.innerText;

    const newData = data.options.filter((item) => {
      if (item.name !== objName) {
        return item;
      }
      return { ...item, value: item.value++ };
    });

    const newLocalStorangeData = dataArray.filter((item) => {
      if (item.id !== dataObj.id) {
        return item;
      }
      item.status = 1;
      return item;
    });

    localStorage.setItem("dataArray", JSON.stringify(newLocalStorangeData));
    setData({ ...data, options: newData });
    setPollStatus(1);
  };

  return (
    <>
      <div className="poll">
        <h2 className="poll-title">{data.title}</h2>
        {
          {
            1: (
              <BarChart
                width={300}
                height={300}
                data={data.options}
                margin={{ bottom: 48 }}
              >
                <Bar dataKey="value" fill={data.color} />
                <XAxis dataKey={"name"} interval={0} angle={-10} dy={32} />
              </BarChart>
            ),
            0: (
              <div className="poll-button-container">
                {data.options.map((item, index) => {
                  return (
                    <button key={index} onClick={onPollChange}>
                      {item.name}
                    </button>
                  );
                })}
              </div>
            ),
          }[(pollStatus, dataObj.status)]
        }
      </div>
    </>
  );
}

Poll.propTypes = {
  dataObj: PropTypes.object.isRequired,
  dataArray: PropTypes.array.isRequired,
};
