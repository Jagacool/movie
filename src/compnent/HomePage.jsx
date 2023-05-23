import React, { useContext } from "react";
import DataContext from "../context/contextData";
//import { Grid } from "@mui/material";
//import ImgMediaCard from "./CardInfo";
const HomePage = () => {
  const DataFromArray = useContext(DataContext);
  console.log("HomePage", DataFromArray);
  return (
    <div>
      {DataFromArray && DataFromArray.map((ele) => <div>ele.title</div>)}
      {/* <Grid container spacing={2}>
        {dataArr &&
          dataArr.map((movie) => {
            return (
              <Grid item xs={4}>
                <ImgMediaCard></ImgMediaCard>
              </Grid>
            );
          })}
      </Grid> */}
    </div>
  );
};

export default HomePage;
