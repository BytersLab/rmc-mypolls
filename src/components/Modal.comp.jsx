import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Modal.style.css";
import { PollContext } from "../contexts/Polls.context.jsx";

export function Modal() {
  const { polls, setPolls } = useContext(PollContext);
  const [modal, setModal] = useState(false);
  const [formdata, setFormData] = useState({
    title: "",
    option1: "",
    option2: "",
    option3: "",
  });

  const onTriggerModal = () => {
    setModal(!modal);
  };

  const onInputChange = (event) => {
    const stateProp = event.target.name;
    const value = event.target.value;
    setFormData({ ...formdata, [stateProp]: value });
  };

  const onCreatePoll = (event) => {
    event.preventDefault();
    const options = [
      { name: formdata.option1, value: 0 },
      { name: formdata.option2, value: 0 },
      { name: formdata.option3, value: 0 },
    ];

    const newDataArray = [
      ...polls,
      {
        title: formdata.title,
        options: options,
        id: uuidv4(),
        status: 0,
      },
    ];

    setPolls(newDataArray);
    localStorage.setItem("dataArray", JSON.stringify(newDataArray));
    setModal(false);
  };

  return (
    <>
      {
        {
          true: (
            <div className="modal">
              <h3>Create Poll</h3>
              <form>
                <input
                  onChange={onInputChange}
                  placeholder="Question"
                  type="text"
                  name="title"
                />
                <input
                  onChange={onInputChange}
                  placeholder="Option 1"
                  type="text"
                  name="option1"
                />
                <input
                  onChange={onInputChange}
                  placeholder="Option 2"
                  type="text"
                  name="option2"
                />
                <input
                  onChange={onInputChange}
                  placeholder="Option 3"
                  type="text"
                  name="option3"
                />
                <button onClick={onCreatePoll}>Create</button>
              </form>
              <button className="modal-close" onClick={onTriggerModal}>
                X
              </button>
            </div>
          ),
        }[modal]
      }
      <button className="trigger-modal" onClick={onTriggerModal}>
        Create Poll
      </button>
    </>
  );
}
