import React from "react";

export default function Td({ mineData, rowIndex, colIndex }) {
  return (
    <>
      <td>{mineData[rowIndex][colIndex]}</td>
    </>
  );
}
