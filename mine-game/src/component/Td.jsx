import React from "react";
import { useSelector } from "react-redux";

export default function Td({ rowIndex, colIndex }) {
  const mineData = useSelector((state) => state.mine.mineData);

  const handleStyle = () => {};
  const handleClick = () => {};
  return (
    <>
      <td style={{ handleStyle }} onClick={handleClick}>
        {mineData[rowIndex][colIndex]}
      </td>
    </>
  );
}
