import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Td({ rowIndex, colIndex }) {
  const mineData = useSelector((state) => state.mine.mineData);
  const handleStyle = () => {
    if (open) {
      return {
        background: "white",
        color: "black",
      };
    }
  };

  return (
    <>
      <td style={handleStyle()}>{mineData[rowIndex][colIndex]}</td>
    </>
  );
}
