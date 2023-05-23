import React, { useState, useRef, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/contextData";
const AddMovie = () => {
  const { addMovie, disable } = useContext(DataContext);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const [data, setData] = useState({ adult: "", title: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    addMovie(data);
    setData({ adult: "", title: "" });
    navigate("/home");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value }); //computedProperty
  };

  return (
    <form onSubmit={handleSubmit}>
      Adult :{" "}
      <input
        ref={inputRef}
        type="text"
        name="adult"
        value={data.adult}
        onChange={handleChange}
      />
      <br></br>
      title :{" "}
      <input
        type="text"
        name="title"
        value={data.title}
        onChange={handleChange}
      />
      <br></br>
      <input type="submit" disabled={disable} />
    </form>
  );
};

export default AddMovie;
