import React, { memo } from "react";
import { useSelector } from "react-redux";

import Td from "./Td";

const Tr = memo(({ rowIndex }) => {
  const mineData = useSelector((state) => state.mine.mineData);
  console.log("tr랜더");

  return (
    <tr>
      {mineData[0] &&
        Array(mineData[0].length)
          .fill()
          .map((td, i) => <Td key={i} rowIndex={rowIndex} colIndex={i} />)}
    </tr>
  );
});
export default Tr;
