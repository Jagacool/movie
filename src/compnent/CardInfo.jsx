import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DataContext } from "../context/contextData";
import { useContext } from "react";
import { Button } from "@mui/material";

export default function ImgMediaCard({
  poster_path,
  title,
  overview,
  detail,
  id,
}) {
  const { handleDelate, handleDetail } = useContext(DataContext);
  const delateMoive = () => {
    handleDelate(id);
  };
  const detailMovie = () => handleDetail(id);
  return (
    <Card sx={{ maxWidth: 345 }} className="ms-5">
      <CardMedia
        component="img"
        alt="poster of the movie"
        height="600"
        image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {overview}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button variant="contained" color="error" onClick={delateMoive}>
          Delate
        </Button>
        <Button variant="contained" color="success" onClick={detailMovie}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
