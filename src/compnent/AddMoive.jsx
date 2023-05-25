import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import React, { useContext } from "react";

import { DataContext } from "../context/contextData";

const AddMovie = () => {
  const { change, submit } = useContext(DataContext);

  return (
    <form onSubmit={submit} className="text-center mt-4" margin="normal">
      <div>
        <label
          style={{
            color: "red",
          }}
        >
          Title:
        </label>
        <TextField
          label="Enter the title"
          color="secondary"
          name="title"
          onChange={change}
          id="margin-normal"
          margin="normal"
          focused
        />
      </div>
      <br></br>
      <div>
        <label
          style={{
            color: "red",
          }}
        >
          Overview:
        </label>
        <TextField
          label="Enter True or False"
          color="secondary"
          name="overview"
          onChange={change}
          id="margin-normal"
          margin="normal"
        />
      </div>
      <br></br>
      <div>
        <label
          style={{
            color: "red",
          }}
        >
          poster path:
        </label>
        <input
          type="file"
          label="Enter True or False"
          color="secondary"
          focused
          name="poster_path"
          onChange={change}
          id="margin-normal"
          margin="normal"
        />
      </div>
      <br></br>
      <Stack direction="row" spacing={6} className="text-center">
        <Button
          color="success"
          variant="contained"
          type="submit"
          className="mx-auto"
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default AddMovie;
