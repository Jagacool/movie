// import React, { useState, useRef, useEffect, useContext } from "react";
// import classes from "../styles/AddUser.module.css";
// import { useNavigate } from "react-router-dom";
// import { DataContext } from "../context/contextData";
// const AddMovie = () => {
//   const { addMovie, disable } = useContext(DataContext);
//   const navigate = useNavigate();
//   const inputRef = useRef(null);
//   console.log(inputRef.current);
//   // console.log(addUser)
//   const [data, setData] = useState({ adult: "", title: "" });
//   // console.log(x)
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     addMovie(data);
//     setData({ adult: "", title: "" });
//     navigate("/users");
//   };

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);
//   // const handleChangeName=(e)=>{
//   //     // console.log()
//   // setData({...data,name:e.target.value})
//   // }
//   // const handleChangeAge=(e)=>{
//   //    setData({...data,age:e.target.value})
//   // }
//   const handleChange = (e) => {
//     const { adult, value } = e.target;
//     // console.log(name,value)
//     // console.log(e.target.name)
//     //  setData({...data,[e.target.name]:e.target.value}) //computedProperty
//     setData({ ...data, [adult]: value }); //computedProperty
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       Adult :{" "}
//       <input
//         ref={inputRef}
//         type="text"
//         name="adult"
//         value={data.adult}
//         onChange={handleChange}
//       />
//       <br></br>
//       title :{" "}
//       <input
//         type="number"
//         name="title"
//         value={data.title}
//         onChange={handleChange}
//       />
//       <br></br>
//       <input type="submit" disabled={disable} className={classes.btn} />
//     </form>
//   );
// };

// export default AddMovie;
