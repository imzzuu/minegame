import React, { useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameEnd, setFlag } from "../reducer/mineSlice";

const Td = memo(({ rowIndex, colIndex }) => {
  const mineData = useSelector((state) => state.mine.mineData);
  const flag = useSelector((state) => state.mine.flag);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleStyle = () => {
    if (open) {
      return {
        background: "white",
        color: "black",
      };
    }
  };

  const handleClick = (e) => {
    setOpen(true);
    if (
      e.target.innerText === "⛳️" ||
      (e.target.innerText === "⛳️" && mineData[rowIndex][colIndex] === "💣")
    ) {
      setOpen(false);
    } else if (mineData[rowIndex][colIndex] === "💣") {
      e.target.innerText = "💣";
      setTimeout(() => {
        alert("게임 종료");
        dispatch(gameEnd());
      }, 100);
    } else {
      e.target.innerText = mineData[rowIndex][colIndex];
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    if (!open) {
      if (flag > 0 && e.target.innerText !== "⛳️") {
        e.target.innerText = "⛳️";
        dispatch(setFlag(-1));
      } else if (flag >= 0 && e.target.innerText === "⛳️") {
        e.target.innerText = "";
        dispatch(setFlag(1));
      }
    }
  };
  console.log("td 랜더");

  // return (
  //   <>
  //     <td
  //       style={handleStyle()}
  //       onClick={handleClick}
  //       onContextMenu={handleRightClick}
  //     ></td>
  //   </>
  // );

  return (
    <RealTd
      handleClick={handleClick}
      handleRightClick={handleRightClick}
      handleStyle={handleStyle}
    />
  );
});

const RealTd = memo(({ handleClick, handleRightClick, handleStyle }) => {
  console.log("real td rendered");
  return (
    <td
      style={handleStyle()}
      onClick={handleClick}
      onContextMenu={handleRightClick}
    ></td>
  );
});

export default Td;
