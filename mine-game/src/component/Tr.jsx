import React from "react";
import { useSelector } from "react-redux";

import Td from "./Td";

export default function Tr({ rowIndex }) {
  const mineData = useSelector((state) => state.mine.mineData);

  return (
    <tr>
      {mineData[0] &&
        Array(mineData[0].length)
          .fill()
          .map((td, i) => <Td key={i} rowIndex={rowIndex} colIndex={i} />)}
    </tr>
  );
}
