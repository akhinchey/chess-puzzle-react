import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';
import styled from 'styled-components';
// import styled from '@emotion/styled';
// import { css } from '@emotion/core';
import queenImg from '../../images/queen.png';
import boardData from './boardData';
// import { Switch, Route } from 'react-router-dom';
// import GlobalStyle from '../../global-styles';

const oddRow = index =>
  index <= 7 ||
  (index >= 16 && index <= 23) ||
  (index >= 32 && index <= 39) ||
  (index >= 48 && index <= 55);

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  padding-bottom: 30px;
`;

const ChessSquare = styled.div`
  display: block;
  width: 12.5%;
  float: left;
  height: 0;
  padding-bottom: 12.5%;
  background: #e3e3e3;
  margin: 0;
  ${props =>
    oddRow(props.index)
      ? props.index % 2 === 0 && `background: #aaa;`
      : props.index % 2 !== 0 && `background: #aaa;`}
`;

const Image = styled.img`
  text-align: center;
  width: 80%;
  display: block;
  margin: auto;
  padding-top: 10%;
`;

const ChessBoard = ({ board, getSquare }) =>
  board.map((square, squareIndex) => (
    /* eslint-disable-next-line */
    <ChessSquare index={squareIndex} key={squareIndex} onClick={() => getSquare(squareIndex)}>
      {square.active && <Image alt="queen" src={queenImg} />}
    </ChessSquare>
  ));

export default function App() {
  const [board, setBoard] = useState(boardData);

  // useEffect(() => {
  //   alert('square has been clicked');
  // }, [board]);

  const getSquare = squareIndex => {
    const newBoard = board.slice();
    const newSquare = newBoard[squareIndex];
    const { col, row, lDiag, rDiag } = newSquare;
    newBoard.forEach(square => {
      if (
        square.row === row ||
        square.col === col ||
        square.lDiag === lDiag ||
        square.rDiag === rDiag
      )
        square.active = false;
    });
    newSquare.active = !newSquare.active;
    setBoard(newBoard);
  };

  return (
    <AppWrapper>
      <h1 className="title"> Chess Queen Challenge</h1>

      <main role="main" className="container">
        <section>
          <ChessBoard board={board} getSquare={getSquare} />
        </section>
      </main>
    </AppWrapper>
  );
}
