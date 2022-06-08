import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mineSearch } from "./reducer/mineSlice";

import "./App.css";
import styled from "styled-components";

import Board from "./component/Board";

// import MineSearch from "./test/MineSearch";

function MineGame() {
  const [start, setStart] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    const mineData = [];
    const row = 8;
    const col = 8;
    // 2차원 배열 만들기
    for (let i = 0; i < row; i++) {
      mineData.push([]);
      for (let j = 0; j < col; j++) {
        mineData[i].push(0);
      }
    }
    // 폭탄 심기
    for (let i = 0; i < 12; i++) {
      let rd1 = Math.floor(Math.random() * row);
      let rd2 = Math.floor(Math.random() * col);
      // 중복시 재실행
      if (mineData[rd1][rd2]) {
        i--;
      } else {
        mineData[rd1][rd2] = "💣";
      }
    }
    dispatch(mineSearch(mineData));
  };
  return (
    <>
      <Title>지뢰찾기</Title>
      <InfoBox>
        <p>지뢰 갯수 : 12</p>
        <button onClick={handleClick}>시작!</button>
        <p>시간 : 0</p>
      </InfoBox>
      <Board />

      {/* <MineSearch /> */}
    </>
  );
}
const Title = styled.h2`
  text-align: center;
`;
const InfoBox = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;
  button {
    margin: 0 auto;
    font-size: 20px;
  }
`;
export default MineGame;
