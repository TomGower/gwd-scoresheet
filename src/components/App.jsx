/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Joker from './Joker';
import SpecialRound from './SpecialRound';
import RoundOne from './Round1';
import MusicRound from './Round2';
import RoundThree from './Round3';
import RoundFour from './Round4';
import RoundFive from './Round5';
import RoundSix from './Round6';
import RoundSeven from './Round7';
import RoundEight from './Round8';
import BonusQuestions from './BonusQuestions';

class App extends React.Component {
  constructor(props) {
    super(props);
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
        special: false,
        scores: Array(8).fill(null),
        answers: Array(8).fill(''),
        score: 0,
      },
      r7info: {
        round: 7,
        special: false,
        scores: Array(8).fill(null),
        answers: Array(8).fill(''),
        score: 0,
      },
      r8info: {
        round: 8,
        scores: Array(16).fill(null),
        answers: Array(16).fill(''),
        score: 0,
      },
    };
    this.updateScore = this.updateScore.bind(this);
    this.pickJoker = this.pickJoker.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkSpecialRound = this.checkSpecialRound.bind(this);
  }

  updateScore(event) {
    const round = event.target.value;
    const answerBoxes = document.querySelectorAll(`input[id~='round${round}answer']`);
    const answers = [];
    answerBoxes.forEach((answer) => answers.push(answer.value));
    const checkboxes = document.querySelectorAll(`input[id~='round${round}']`);
    const check = [];
    checkboxes.forEach((checkbox) => (checkbox.checked ? check.push(1) : check.push(0)));
    const thisScore = check.reduce((acc, cur) => (acc + cur));
    const roundName = `r${round}info`;
    const currentInfo = this.state[roundName];
    const newTotal = this.state.score - currentInfo.score + thisScore;
    currentInfo.score = thisScore;
    currentInfo.answers = answers;
    currentInfo.scores = check;
    if (`r${round}` === this.state.joker) {
      this.setState({
        jokerScore: thisScore,
        [roundName]: currentInfo,
        score: newTotal + thisScore, // to account for joker, without using callback
      });
    } else {
      this.setState({
        [roundName]: currentInfo,
        score: newTotal,
      });
    }
  }

  pickJoker() {
    const radio = document.querySelectorAll('input[name=\'joker\']');
    for (let i = 0; i < radio.length; i += 1) {
      if (radio[i].checked) {
        this.setState({ joker: radio[i].value });
        break;
      }
    }
  }

  checkSpecialRound() {
    const specialRound = document.querySelectorAll('input[name=\'bonus\']');
    for (let i = 0; i < specialRound.length; i += 1) {
      let special = 0;
      if (i === 0) special = 1;
      else special = i + 2;
      const roundName = `r${special}info`;
      const currentInfo = this.state[roundName];
      if (specialRound[i].checked && !currentInfo.special) {
        currentInfo.special = true;
        currentInfo.scores = Array(16).fill(null);
        currentInfo.answers = Array(16).fill('');
        this.setState({
          [roundName]: currentInfo,
        });
      }
    }
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  render() {
    const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

    const renderPageNumbers = pageNumbers.map((number) => (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <li
        key={number}
        id={number}
        onClick={this.handleClick}
      >
        {number}
      </li>
    ));

    const { currentPage } = this.state;
    let thisRound;
    if (currentPage === 1) {
      thisRound = (
        <RoundOne
          updater={this.updateScore}
          info={this.state.r1info}
        />
      );
    } else if (currentPage === 2) {
      thisRound = (
        <MusicRound
          updater={this.updateScore}
          info={this.state.r2info}
        />
      );
    } else if (currentPage === 3) {
      thisRound = (
        <RoundThree
          updater={this.updateScore}
          info={this.state.r3info}
        />
      );
    } else if (currentPage === 4) {
      thisRound = (
        <RoundFour
          updater={this.updateScore}
          info={this.state.r4info}
        />
      );
    } else if (currentPage === 5) {
      thisRound = (
        <RoundFive
          updater={this.updateScore}
          info={this.state.r5info}
        />
      );
    } else if (currentPage === 6) {
      thisRound = (
        <RoundSix
          updater={this.updateScore}
          info={this.state.r6info}
        />
      );
    } else if (currentPage === 7) {
      thisRound = (
        <RoundSeven
          updater={this.updateScore}
          info={this.state.r7info}
        />
      );
    } else if (currentPage === 8) {
      thisRound = (
        <RoundEight
          updater={this.updateScore}
          info={this.state.r8info}
        />
      );
    }

    return (
      <div>
        <h2 align="center">GEEKS WHO DRINK Scoresheet</h2>
        <hr />
        <h4>
          Your Current Score is
          {` ${this.state.score}`}
        </h4>
        <hr />
        <Joker pickJoker={this.pickJoker} />
        <hr />
        <SpecialRound checkSpecialRound={this.checkSpecialRound} />
        <hr />
        {thisRound}
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
        <hr />
        <BonusQuestions />
      </div>
    );
  }
}

export default App;
