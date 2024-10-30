import { useState } from "react";

export function Modal() {
  const [modal, setModal] = useState(false);

  const onTriggerModal = () => {
    setModal(!modal);
  };
  return (
    <>
      {
        {
          true: (
            <div className="modal">
              <h3>Create Poll</h3>
              <form>
                <input placeholder="Question" type="text" />
                <input placeholder="Option 1" type="text" />
                <input placeholder="Option 2" type="text" />
                <input placeholder="Option 3" type="text" />
                <button type="submit">Create</button>
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
