import { useDispatch, useSelector } from "react-redux";
import { gameStart, gameEnd, setFlag } from "./reducer/mineSlice";

import "./App.css";
import styled from "styled-components";

import Board from "./component/Board";

const MineGame = () => {
  const isStart = useSelector((state) => state.mine.isStart);
  const flag = useSelector((state) => state.mine.flag);
  const dispatch = useDispatch();

  const handleClick = () => {
    const mineData = [];
    const row = 8;
    const col = 8;
    /* 2차원 배열 만들기 */
    for (let i = 0; i < row; i++) {
      mineData.push([]);
      for (let j = 0; j < col; j++) {
        mineData[i].push(0);
      }
    }
    /* 폭탄 심기 */
    for (let i = 0; i < 12; i++) {
      let rowNum = Math.floor(Math.random() * row);
      let colNum = Math.floor(Math.random() * col);
      // 중복시 재실행
      if (mineData[rowNum][colNum]) {
        i--;
      } else {
        mineData[rowNum][colNum] = "💣";
        countMines(rowNum, colNum, mineData);
      }
    }
    /* 지뢰 위치를 기준으로 근접 셀에 지뢰 갯수 카운팅 */
    function countMines(rowNum, colNum, mineData) {
      let nearRow = rowNum + 1;
      let nearCol = colNum + 1;
      // 지뢰 위치 '-1 행, 열' ~ '+1 행, 열' 돌면서 검사
      for (let i = rowNum - 1; i <= nearRow; i++) {
        for (let j = colNum - 1; j <= nearCol; j++) {
          if (
            // 지뢰 위치 위, 왼쪽에 행, 열이 없거나
            i < 0 ||
            j < 0 ||
            // 지뢰 위치 아래, 오른쪽에 행, 열이 없거나
            i === mineData.length ||
            j === mineData[i].length ||
            // 지뢰 자신이거나
            (i === rowNum && j === colNum)
          ) {
            continue;
          }
          // 탐색한 주변이 지뢰가 아니면 1을 더하기
          mineData[i][j] += mineData[i][j] !== "X" ? 1 : "";
        }
      }
    }
    dispatch(gameStart(mineData));
  };
  console.log("메인 랜더");

  return (
    <>
      <Title>지뢰찾기</Title>
      <InfoBox>
        <p>지뢰 갯수 : {flag}</p>
        <button onClick={handleClick} disabled={!isStart}>
          Start
        </button>
        <button onClick={() => dispatch(gameEnd())} disabled={isStart}>
          Reset
        </button>
        <p>시간 : 0</p>
      </InfoBox>
      <Board flag={flag} setFlag={setFlag} />
    </>
  );
};
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
