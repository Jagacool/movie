import React, { useEffect } from "react";
import { DataContext } from "../context/contextData";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ImgMediaCardDetail from "./CardInfoDetail";

export default function Detail() {
  const { newMoive, handleDetail } = useContext(DataContext);
  const { id } = useParams();
  useEffect(() => {
    handleDetail(id);
  }, [handleDetail, id]);

  return (
    <div>
      {newMoive && <ImgMediaCardDetail {...newMoive}></ImgMediaCardDetail>}
    </div>
  );
}
