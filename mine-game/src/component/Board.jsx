import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Tr from "./Tr";

export default function Board() {
  const mineData = useSelector((state) => state.mine.mineData);
  return (
    <>
      <Table>
        <tbody>
          {Array(mineData.length)
            .fill()
            .map((el, i) => (
              <Tr key={i} rowIndex={i} />
            ))}
        </tbody>
      </Table>
    </>
  );
}

const Table = styled.table`
  border: 2px solid black;
  border-collapse: collapse;
  width: 400px;
  height: 400px;
  margin: 0 auto;
  text-align: center;
  tr {
    border: 1px solid black;
  }
  td {
    border: 1px solid black;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: #eded69;
    color: #eded69;
  }
`;
