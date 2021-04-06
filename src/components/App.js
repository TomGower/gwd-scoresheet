/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import styled from 'styled-components';
import Joker from './Joker';
import SpecialRound from './SpecialRound';
import NormalRound from './NormalRound';
import MusicRound from './MusicRound';
import RoundSix from './Round6';
import RandomRound from './RandomRound';
import BonusQuestions from './BonusQuestions';

import checkSpecialRound from '../functions/checkSpecialRound';
import handleClick from '../functions/handleClick';
import pickJoker from '../functions/pickJoker';
import updateScore from '../functions/updateScore';
import GlobalStyle from './GlobalStyles';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      score: 0,
      joker: '',
      jokerScore: 0,
      r1info: {
        round: 1,
        special: false,
        scores: Array(8).fill(null),
        answers: Array(8).fill(''),
        score: 0,
      },
      r2info: {
        round: 2,
        scores: Array(16).fill(null),
        answers: Array(16).fill(''),
        score: 0,
      },
      r3info: {
        round: 3,
        special: false,
        scores: Array(8).fill(null),
        answers: Array(8).fill(''),
        score: 0,
      },
      r4info: {
        round: 4,
        special: false,
        scores: Array(8).fill(null),
        answers: Array(8).fill(''),
        score: 0,
      },
      r5info: {
        round: 5,
        special: false,
        scores: Array(8).fill(null),
        answers: Array(8).fill(''),
        score: 0,
      },
      r6info: {
        round: 6,
        scores: Array(16).fill(null),
        answers: Array(16).fill(''),
        score: 0,
      },
      r7info: {
        round: 7,
        scores: Array(16).fill(null),
        answers: Array(16).fill(''),
        score: 0,
      },
    };
    this.updateScore = updateScore.bind(this);
    this.pickJoker = pickJoker.bind(this);
    this.handleClick = handleClick.bind(this);
    this.checkSpecialRound = checkSpecialRound.bind(this);
  }

  render() {
    const pageNumbers = [1, 2, 3, 4, 5, 6, 7];

    const renderPageNumbers = pageNumbers.map((number) => (
      <PageNumber
        key={number}
        id={number}
        onClick={this.handleClick}
      >
        {number}
      </PageNumber>
    ));

    const {
      currentPage, r1info, r2info, r3info, r4info, r5info, r6info, r7info, score,
    } = this.state;
    let currentRound;
    if (currentPage === 1) {
      currentRound = (
        <NormalRound
          updater={this.updateScore}
          info={r1info}
          key="r1"
        />
      );
    } else if (currentPage === 2) {
      currentRound = (
        <MusicRound
          updater={this.updateScore}
          info={r2info}
        />
      );
    } else if (currentPage === 3) {
      currentRound = (
        <NormalRound
          updater={this.updateScore}
          info={r3info}
          key="r3"
        />
      );
    } else if (currentPage === 4) {
      currentRound = (
        <NormalRound
          updater={this.updateScore}
          info={r4info}
          key="r4"
        />
      );
    } else if (currentPage === 5) {
      currentRound = (
        <NormalRound
          updater={this.updateScore}
          info={r5info}
          key="r5"
        />
      );
    } else if (currentPage === 6) {
      currentRound = (
        <RoundSix
          updater={this.updateScore}
          info={r6info}
        />
      );
    } else if (currentPage === 7) {
      currentRound = (
        <RandomRound
          updater={this.updateScore}
          info={r7info}
        />
      );
    }

    return (
      <Wrapper>
        <Header>GEEKS WHO DRINK Scoresheet</Header>
        <Divider />
        <Score>
          {`Your Current Score is ${score}`}
        </Score>
        <Divider />
        <Joker pickJoker={this.pickJoker} />
        <Divider />
        <SpecialRound checkSpecialRound={this.checkSpecialRound} />
        <Divider />
        {currentRound}
        <PageNumbers>
          {renderPageNumbers}
        </PageNumbers>
        <Divider />
        <BonusQuestions />
        <GlobalStyle />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

const Header = styled.h2`
  text-align: center;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  border: none;
  background-color: black;
`;

const Score = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  display: block;
  margin-block-start: 1.25rem;
  margin-block-end: 1.25rem;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const PageNumbers = styled.ul`
  list-style: none;
  display: flex;
`;

const PageNumber = styled.li`
  margin-right: 0.5rem;
  color: blue;
  user-select: none;
  cursor: pointer;
`;

export default App;
