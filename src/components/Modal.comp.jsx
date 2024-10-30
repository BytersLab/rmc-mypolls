import { useState } from "react";
import PropTypes from "prop-types";
import "./Modal.style.css";

export function Modal({ dataArray, setDataArray }) {
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
      ...dataArray,
      {
        title: formdata.title,
        options: options,
      },
    ];

    setDataArray(newDataArray);
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

Modal.propTypes = {
  setDataArray: PropTypes.func.isRequired,
  dataArray: PropTypes.array.isRequired,
};
