import React from "react";
import { DataContext } from "../context/contextData";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ImgMediaCardDetail from "./CardInfoDetail";
export default function Detail() {
  const { newMoive } = useContext(DataContext);
  const { id } = useParams();

  return (
    <div>
      <ImgMediaCardDetail {...newMoive}></ImgMediaCardDetail>
    </div>
  );
}
