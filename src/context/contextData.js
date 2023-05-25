import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [dataArr, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/results")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);
  //console.log("context", dataArr); //? arrived

  //! for adding movie:
  const [newMoive, setNewMoive] = useState({});
  const navigate = useNavigate();

  const addNewMovies = () => {
    axios.post("http://localhost:3000/results", newMoive);
    setData((prev) => [...prev, newMoive]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewMovies();
    setNewMoive({});
    navigate("/");
    console.log(newMoive);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMoive({ ...newMoive, [name]: value });
  };

  //! Delate:
  const handleDelate = (id) => {
    setNewMoive(newMoive.filter((movie) => movie.id !== id));
    axios.delete(`http://localhost:3000/results/:${id}`);
    navigate("/");
  };

  //! details:
  const handleDetail = (id) => {
    setNewMoive(newMoive.find((movie) => +movie.id === +id));
    axios.get(`http://localhost:3000/results/detail/:${id}`);
    navigate(`/detail/${id}`);
  };
  const values = {
    dataArr: dataArr,
    newMoive: newMoive,
    change: handleChange,
    submit: handleSubmit,
    delate: handleDelate,
    detail: handleDetail,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};
export default DataProvider;
