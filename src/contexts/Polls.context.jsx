import { createContext, useState, useEffect } from "react";

export const PollContext = createContext();

export const PollContextProvider = ({ children }) => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dataArray"));
    if (!data) {
      return;
    }
    setPolls(data);
    return () => {};
  }, []);

  return (
    <PollContext.Provider value={{ polls, setPolls }}>
      {children}
    </PollContext.Provider>
  );
};
