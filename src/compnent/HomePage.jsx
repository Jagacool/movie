import { Grid, Typography, Box } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../context/contextData";
import ImgMediaCard from "./CardInfo";

const HomePage = () => {
  const { dataArr } = useContext(DataContext);
  //console.log("HomePage", dataArr);
  return (
    <div>
      {/* {dataArr && dataArr.map((ele) => <div>{ele.title}</div>)} */}
      <Typography variant="h1" fontSize="2rem" sx={{ margin: "20px" }}>
        <Box sx={{ color: "error.main" }}>Movies</Box>
      </Typography>
      <Grid container spacing={2}>
        {dataArr &&
          dataArr.map((movie) => {
            return (
              <Grid item xs={4}>
                <ImgMediaCard {...movie}></ImgMediaCard>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default HomePage;
