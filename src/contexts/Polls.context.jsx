import { createContext, useState, useEffect, useContext } from "react";
import { LoaderContext } from "./Loader.context";

export const PollContext = createContext();

export const PollContextProvider = ({ children }) => {
  const [polls, setPolls] = useState([]);
  const { setLoading } = useContext(LoaderContext);

  // Loading Data
  useEffect(() => {
    setLoading(true);
    const data = JSON.parse(localStorage.getItem("dataArray"));
    if (!data) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      return;
    }
    setTimeout(() => {
      setPolls(data);
      setLoading(false);
    }, 2000);
    return () => {};
  }, []);

  return (
    <PollContext.Provider value={{ polls, setPolls }}>
      {children}
    </PollContext.Provider>
  );
};
