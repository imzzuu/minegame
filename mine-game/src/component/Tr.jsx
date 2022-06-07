import React from "react";
import styled from "styled-components";
import Td from "./Td";

export default function Tr({ mineData, rowIndex }) {
  return (
    <tr>
      {mineData[0] &&
        Array(mineData[0].length)
          .fill()
          .map((td, i) => (
            <Td key={i} mineData={mineData} rowIndex={rowIndex} colIndex={i} />
          ))}
    </tr>
  );
}
