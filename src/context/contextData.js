import React, { useState, useEffect, createContext, useCallback } from "react";
import axios from "axios";

export const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [dataArr, setData] = useState([]);
  useEffect(() => {
    axios
      .get("  http://localhost:3000/results")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);
  console.log("context", dataArr); //? arrived

  const [counter, setCounter] = useState(0);
  const [disable, setDisable] = useState(false);
  const addMovies = useCallback(
    (userData) => {
      setData([...dataArr, { ...dataArr }]);
      setCounter((oldCounter) => oldCounter + 1);
      if (counter === 3) {
        setDisable(true);
      }
    },
    [counter, dataArr]
  );
  return (
    <DataContext.Provider
      value={{ DataFromArray: dataArr, disable, addMovies }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
