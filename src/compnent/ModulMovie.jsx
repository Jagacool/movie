import React from "react";
//import { BrowserRouter } from "react-router-dom";
import DataProvider from "../context/contextData";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AddMovie from "./AddMoive";
export default function ModulMovie() {
  return (
    // <BrowserRouter>
    <DataProvider>
      <Routes>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="/add" element={<AddMovie></AddMovie>}></Route>
      </Routes>
    </DataProvider>
    // </BrowserRouter>
  );
}
