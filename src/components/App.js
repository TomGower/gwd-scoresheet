/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';

import initialState from '../data/initialState';

import Joker from './Joker';
import SpecialRound from './SpecialRound';
import RenderCurrentRound from './RenderCurrentRound';
import RenderPageNumbers from './RenderPageNumbers';
import BonusQuestions from './BonusQuestions';
import GlobalStyle from './GlobalStyle';

import checkSpecialRound from '../functions/checkSpecialRound';
import handleClick from '../functions/handleClick';
import pickJoker from '../functions/pickJoker';
import updateScore from '../functions/updateScore';

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.updateScore = updateScore.bind(this);
    this.pickJoker = pickJoker.bind(this);
    this.handleClick = handleClick.bind(this);
    this.checkSpecialRound = checkSpecialRound.bind(this);
  }

  render() {
    const {
      currentPage, r1info, r2info, r3info, r4info, r5info, r6info, r7info, score,
    } = this.state;

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
        <RenderCurrentRound
          currentPage={currentPage}
          updateScore={this.updateScore}
          r1info={r1info}
          r2info={r2info}
          r3info={r3info}
          r4info={r4info}
          r5info={r5info}
          r6info={r6info}
          r7info={r7info}
        />
        <RenderPageNumbers handleClick={this.handleClick} />
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

export default App;
