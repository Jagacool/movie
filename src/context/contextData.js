import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [dataArr, setData] = useState([]);
  const getAllMoives = () => {
    axios
      .get("http://localhost:3000/results")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getAllMoives();
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
    setNewMoive(dataArr.filter((movie) => movie.id !== id));
    axios
      .delete(`http://localhost:3000/results/${id}`)
      .then(() => getAllMoives());
  };

  //! details:
  const handleDetail = (id) => {
    setNewMoive(dataArr.find((movie) => +movie.id === +id));
    axios.get(`http://localhost:3000/results/${id}`);
    navigate(`/detail/${id}`);
  };
  const values = {
    dataArr: dataArr,
    newMoive: newMoive,
    change: handleChange,
    submit: handleSubmit,
    handleDelate: handleDelate,
    handleDetail: handleDetail,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};
export default DataProvider;
