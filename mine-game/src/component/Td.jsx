import React, { useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  gameEnd,
  setFlag,
  countOpenedCell,
  countFlagMine,
} from "../reducer/mineSlice";

const Td = memo(({ rowIndex, colIndex }) => {
  const mineData = useSelector((state) => state.mine.mineData);
  const flag = useSelector((state) => state.mine.flag);
  const openedCell = useSelector((state) => state.mine.openedCell);
  const flagMine = useSelector((state) => state.mine.flagMine);
  const time = useSelector((state) => state.mine.time);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [openState, setOpenState] = useState(false);

  // 셀 클릭시 (isOpen 상태일 때), 스타일 변경
  const handleStyle = () => {
    if (isOpen) {
      return {
        background: "white",
      };
    }
  };

  const handleClick = (e) => {
    // 성공 조건 관련 변수
    const successCondition = mineData.length * mineData[0].length - 12;

    // 셀 오픈
    setIsOpen(true);

    // 깃발이거나, 깃발 && 폭탄일 시 셀 오픈 스타일 차단
    if (
      e.target.innerText === "⛳️" ||
      (e.target.innerText === "⛳️" && mineData[rowIndex][colIndex] === "💣")
    ) {
      setIsOpen(false);
      // 폭탄일 시, 게임 종료
    } else if (mineData[rowIndex][colIndex] === "💣") {
      e.target.innerText = "💣";
      setTimeout(() => {
        alert("게임 종료");
        dispatch(gameEnd());
      }, 100);

      // 일반 셀일 경우 (1. 지뢰 갯수 open (단, 0개 일 땐 "") 2. open 된 셀 갯수 세기)
    } else {
      if (openState === false) {
        if (mineData[rowIndex][colIndex] === 0) {
          e.target.innerText = "";
          dispatch(countOpenedCell());
          setOpenState(true);
        } else {
          e.target.innerText = mineData[rowIndex][colIndex];
          dispatch(countOpenedCell());
          setOpenState(true);
        }
      }
    }

    // 성공 조건 부합시, 미션 성공 알리기
    if (openedCell === successCondition) {
      setTimeout(() => {
        alert(`${time} 초 만에 성공! `);
        dispatch(gameEnd());
      }, 100);
    }
  };

  // 오른쪽 클릭시, 깃발
  const handleRightClick = (e) => {
    e.preventDefault();
    // 열리지 않은 셀만 깃발 심기 가능
    if (!isOpen) {
      if (flag > 0 && e.target.innerText !== "⛳️") {
        e.target.innerText = "⛳️";
        dispatch(setFlag(-1));
        if (mineData[rowIndex][colIndex] === "💣") {
          dispatch(countFlagMine());
        }
      } else if (flag >= 0 && e.target.innerText === "⛳️") {
        e.target.innerText = "";
        dispatch(setFlag(1));
      }
    }
    if (flagMine === 12) {
      setTimeout(() => {
        alert(`${time} 초 만에 성공! `);
        dispatch(gameEnd());
      }, 100);
    }
  };

  return (
    <>
      <td
        style={handleStyle()}
        onClick={handleClick}
        onContextMenu={handleRightClick}
      ></td>
    </>
  );
});

export default Td;
