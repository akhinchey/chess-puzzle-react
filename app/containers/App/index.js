import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
import styled from 'styled-components';
// import styled from '@emotion/styled';
import { css } from '@emotion/core';
import queenImg from '../../images/queen.png';
// import { Switch, Route } from 'react-router-dom';
// import GlobalStyle from '../../global-styles';

const sqaureData = [
  { col: 'A', row: '8', lDiag: '8', rDag: '1', active: false },
  { col: 'B', row: '8', lDiag: '9', rDag: '2', active: false },
  { col: 'C', row: '8', lDiag: '10', rDag: '3', active: false },
  { col: 'D', row: '8', lDiag: '11', rDag: '4', active: false },
  { col: 'E', row: '8', lDiag: '12', rDag: '5', active: false },
  { col: 'F', row: '8', lDiag: '13', rDag: '6', active: false },
  { col: 'G', row: '8', lDiag: '14', rDag: '7', active: false },
  { col: 'H', row: '8', lDiag: '15', rDag: '8', active: false },

  { col: 'A', row: '7', lDiag: '7', rDag: '2', active: false },
  { col: 'B', row: '7', lDiag: '8', rDag: '3', active: false },
  { col: 'C', row: '7', lDiag: '9', rDag: '4', active: false },
  { col: 'D', row: '7', lDiag: '10', rDag: '5', active: false },
  { col: 'E', row: '7', lDiag: '11', rDag: '6', active: false },
  { col: 'F', row: '7', lDiag: '12', rDag: '7', active: false },
  { col: 'G', row: '7', lDiag: '13', rDag: '8', active: false },
  { col: 'H', row: '7', lDiag: '14', rDag: '9', active: false },

  { col: 'A', row: '6', lDiag: '6', rDag: '3', active: false },
  { col: 'B', row: '6', lDiag: '7', rDag: '4', active: false },
  { col: 'C', row: '6', lDiag: '8', rDag: '5', active: false },
  { col: 'D', row: '6', lDiag: '9', rDag: '6', active: false },
  { col: 'E', row: '6', lDiag: '10', rDag: '7', active: false },
  { col: 'F', row: '6', lDiag: '11', rDag: '8', active: false },
  { col: 'G', row: '6', lDiag: '12', rDag: '9', active: false },
  { col: 'H', row: '6', lDiag: '13', rDag: '10', active: false },

  { col: 'A', row: '5', lDiag: '5', rDag: '4', active: false },
  { col: 'B', row: '5', lDiag: '6', rDag: '5', active: false },
  { col: 'C', row: '5', lDiag: '7', rDag: '6', active: false },
  { col: 'D', row: '5', lDiag: '8', rDag: '7', active: false },
  { col: 'E', row: '5', lDiag: '9', rDag: '8', active: false },
  { col: 'F', row: '5', lDiag: '10', rDag: '9', active: false },
  { col: 'G', row: '5', lDiag: '11', rDag: '10', active: false },
  { col: 'H', row: '5', lDiag: '12', rDag: '11', active: false },

  { col: 'A', row: '4', lDiag: '4', rDag: '5', active: false },
  { col: 'B', row: '4', lDiag: '5', rDag: '6', active: false },
  { col: 'C', row: '4', lDiag: '6', rDag: '7', active: false },
  { col: 'D', row: '4', lDiag: '7', rDag: '8', active: false },
  { col: 'E', row: '4', lDiag: '8', rDag: '9', active: false },
  { col: 'F', row: '4', lDiag: '9', rDag: '10', active: false },
  { col: 'G', row: '4', lDiag: '10', rDag: '11', active: false },
  { col: 'H', row: '4', lDiag: '11', rDag: '12', active: false },

  { col: 'A', row: '3', lDiag: '3', rDag: '6', active: false },
  { col: 'B', row: '3', lDiag: '4', rDag: '7', active: false },
  { col: 'C', row: '3', lDiag: '5', rDag: '8', active: false },
  { col: 'D', row: '3', lDiag: '6', rDag: '9', active: false },
  { col: 'E', row: '3', lDiag: '7', rDag: '10', active: false },
  { col: 'F', row: '3', lDiag: '8', rDag: '11', active: false },
  { col: 'G', row: '3', lDiag: '9', rDag: '12', active: false },
  { col: 'H', row: '3', lDiag: '10', rDag: '13', active: false },

  { col: 'A', row: '2', lDiag: '2', rDag: '7', active: false },
  { col: 'B', row: '2', lDiag: '3', rDag: '8', active: false },
  { col: 'C', row: '2', lDiag: '4', rDag: '9', active: false },
  { col: 'D', row: '2', lDiag: '5', rDag: '10', active: false },
  { col: 'E', row: '2', lDiag: '6', rDag: '11', active: false },
  { col: 'F', row: '2', lDiag: '7', rDag: '12', active: false },
  { col: 'G', row: '2', lDiag: '8', rDag: '13', active: false },
  { col: 'H', row: '2', lDiag: '9', rDag: '14', active: false },

  { col: 'A', row: '1', lDiag: '1', rDag: '8', active: false },
  { col: 'B', row: '1', lDiag: '2', rDag: '9', active: false },
  { col: 'C', row: '1', lDiag: '3', rDag: '10', active: false },
  { col: 'D', row: '1', lDiag: '4', rDag: '11', active: false },
  { col: 'E', row: '1', lDiag: '5', rDag: '12', active: false },
  { col: 'F', row: '1', lDiag: '6', rDag: '13', active: false },
  { col: 'G', row: '1', lDiag: '7', rDag: '14', active: false },
  { col: 'H', row: '1', lDiag: '8', rDag: '15', active: false },
];

const oddRow = index =>
  index <= 7 ||
  (index >= 16 && index <= 23) ||
  (index >= 32 && index <= 39) ||
  (index >= 48 && index <= 55);

const darkStyle = css`
  background: #aaa;
`;

const colorSelect = darkSquare =>
  darkSquare &&
  css`
    ${darkStyle};
  `;

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
  background-color: #e3e3e3;
  margin: 0;
  ${props =>
    oddRow(props.index)
      ? colorSelect(props.index % 2 === 0)
      : colorSelect(props.index % 2 !== 0)}
`;

const Image = styled.img`
  text-align: center;
  width: 80%;
`;

const ChessBoard = ({ board, getSquare }) =>
  board.map((square, squareIndex) => (
    /* eslint-disable-next-line */
    <ChessSquare index={squareIndex} key={squareIndex} onClick={() => getSquare(squareIndex)}>
      {square.active && <Image alt="queen" src={queenImg} />}
    </ChessSquare>
  ));

export default function App() {
  const [board, setBoard] = useState(sqaureData);

  const getSquare = squareIndex => {
    const newBoard = board.slice();
    newBoard[squareIndex].active = !newBoard[squareIndex].active;
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
