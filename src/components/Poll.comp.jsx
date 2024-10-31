import PropTypes from "prop-types";
import { useContext, useMemo, useState } from "react";
import { Bar, BarChart, XAxis } from "recharts";
import { getRandomColor } from "./../lib/colorgen.tool.js";
import "./Poll.style.css";
import { PollContext } from "../contexts/Polls.context.jsx";

export function Poll({ dataObj }) {
  const { polls, setPolls } = useContext(PollContext);
  const [pollStatus, setPollStatus] = useState(dataObj.status);
  const { options, id, title } = dataObj;

  const randomColor = useMemo(() => {
    return getRandomColor();
  }, []);

  const onPollChange = (event) => {
    options.filter((item) => {
      if (item.name !== event.target.innerText) {
        return item;
      }
      return { ...item, value: item.value++ };
    });

    const newLocalStorangeData = polls.filter((item) => {
      if (item.id !== id) {
        return item;
      }
      return (item.status = 1);
    });

    localStorage.setItem("dataArray", JSON.stringify(newLocalStorangeData));
    setPollStatus(1);
  };

  const onPollDelete = () => {
    const newDataArray = polls.filter((item) => {
      if (id !== item.id) {
        return item;
      }
    });
    setPolls(newDataArray);
    localStorage.setItem("dataArray", JSON.stringify(newDataArray));
  };

  return (
    <>
      <div className="poll">
        <h2 className="poll-title">{title}</h2>
        {
          {
            1: (
              <BarChart
                width={300}
                height={300}
                data={options}
                margin={{ bottom: 48 }}
              >
                <Bar dataKey="value" fill={randomColor} />
                <XAxis dataKey={"name"} interval={0} angle={-10} dy={32} />
              </BarChart>
            ),
            0: (
              <div className="poll-button-container">
                {options.map((item, index) => {
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
        <button onClick={onPollDelete}>Delete</button>
      </div>
    </>
  );
}

Poll.propTypes = {
  dataObj: PropTypes.object.isRequired,
};
