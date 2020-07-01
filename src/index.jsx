/* eslint-disable import/extensions */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import ReactDOM from 'react-dom';
import Joker from './components/Joker.jsx';
import SpecialRound from './components/SpecialRound.jsx';
import RoundOne from './components/Round1.jsx';
import MusicRound from './components/Round2.jsx';
import RoundThree from './components/Round3.jsx';
import RoundFour from './components/Round4.jsx';
import RoundFive from './components/Round5.jsx';
import RoundSix from './components/Round6.jsx';
import RoundSeven from './components/Round7.jsx';
import RandomRound from './components/Round8.jsx';
import BonusQuestions from './components/BonusQuestions.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      score: 0,
      r1special: false,
      r1scores: Array(8).fill(null),
      r1answers: Array(8).fill(''),
      r1score: 0,
      r2scores: Array(16).fill(null),
      r2answers: Array(16).fill(''),
      r2score: 0,
      r3special: false,
      r3scores: Array(8).fill(null),
      r3answers: Array(8).fill(''),
      r3score: 0,
      r4special: false,
      r4scores: Array(8).fill(null),
      r4answers: Array(8).fill(''),
      r4score: 0,
      r5special: false,
      r5scores: Array(8).fill(null),
      r5answers: Array(8).fill(''),
      r5score: 0,
      r6special: false,
      r6scores: Array(8).fill(null),
      r6answers: Array(8).fill(''),
      r6score: 0,
      r7special: false,
      r7scores: Array(8).fill(null),
      r7answers: Array(8).fill(''),
      r7score: 0,
      r8scores: Array(16).fill(null),
      r8answers: Array(16).fill(''),
      r8score: 0,
      joker: '',
      jokerScore: 0,
    };
    this.updateScore = this.updateScore.bind(this);
    this.pickJoker = this.pickJoker.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.specialRoundCheck = this.specialRoundCheck.bind(this);
  }

  componentDidMount() {
    this.setState({
      score: this.state.r1score + this.state.r2score + this.state.r3score + this.state.r4score
      + this.state.r5score + this.state.r6score + this.state.r7score + this.state.r8score,
    });
  }

  updateScore(event) {
    const round = event.target.value;
    const answerBoxes = document.querySelectorAll(`input[id~='round${round}answer']`);
    const answers = [];
    answerBoxes.forEach((answer) => answers.push(answer.value));
    const checkboxes = document.querySelectorAll(`input[id~='round${round}']`);
    const check = [];
    checkboxes.forEach((checkbox) => (checkbox.checked ? check.push(1) : check.push(0)));
    const stateTrack = `r${round}scores`;
    const stateScores = `r${round}score`;
    const stateAnswers = `r${round}answers`;
    const thisScore = check.reduce((acc, cur) => (acc + cur));
    if (`r${round}` === this.state.joker) {
      this.setState({
        jokerScore: thisScore,
        [stateTrack]: check,
        [stateScores]: thisScore,
        [stateAnswers]: answers,
      }, () => {
        this.setState(
          {
            score: this.state.r1score + this.state.r2score + this.state.r3score + this.state.r4score
            + this.state.r5score + this.state.r6score + this.state.r7score + this.state.r8score
            + this.state.jokerScore,
          },
        );
      });
    } else {
      this.setState({
        [stateTrack]: check,
        [stateScores]: thisScore,
        [stateAnswers]: answers,
      }, () => {
        this.setState(
          {
            score: this.state.r1score + this.state.r2score + this.state.r3score
            + this.state.r4score + this.state.r5score + this.state.r6score + this.state.r7score
            + this.state.r8score + this.state.jokerScore,
          },
        );
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

  specialRoundCheck() {
    const specialRound = document.querySelectorAll('input[name=\'bonus\']');
    for (let i = 0; i < specialRound.length; i += 1) {
      if (specialRound[i].checked) {
        let special = 0;
        if (i === 0) {
          special = 1;
        } else {
          special = 2 + i;
        }
        this.setState({
          [`r${special}special`]: true,
          [`r${special}scores`]: Array(16).fill(null),
          [`r${special}answers`]: Array(16).fill(''),
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
          round={1}
          answers={this.state.r1answers}
          scores={this.state.r1scores}
          bonus={this.state.r1special}
        />
      );
    } else if (currentPage === 2) {
      thisRound = (
        <MusicRound
          updater={this.updateScore}
          round={2}
          answers={this.state.r2answers}
          scores={this.state.r2scores}
        />
      );
    } else if (currentPage === 3) {
      thisRound = (
        <RoundThree
          updater={this.updateScore}
          round={3}
          answers={this.state.r3answers}
          scores={this.state.r3scores}
          bonus={this.state.r3special}
        />
      );
    } else if (currentPage === 4) {
      thisRound = (
        <RoundFour
          updater={this.updateScore}
          round={4}
          answers={this.state.r4answers}
          scores={this.state.r4scores}
          bonus={this.state.r4special}
        />
      );
    } else if (currentPage === 5) {
      thisRound = (
        <RoundFive
          updater={this.updateScore}
          round={5}
          answers={this.state.r5answers}
          scores={this.state.r5scores}
          bonus={this.state.r5special}
        />
      );
    } else if (currentPage === 6) {
      thisRound = (
        <RoundSix
          updater={this.updateScore}
          round={6}
          answers={this.state.r6answers}
          scores={this.state.r6scores}
          bonus={this.state.r6special}
        />
      );
    } else if (currentPage === 7) {
      thisRound = (
        <RoundSeven
          updater={this.updateScore}
          round={7}
          answers={this.state.r7answers}
          scores={this.state.r7scores}
          bonus={this.state.r7special}
        />
      );
    } else if (currentPage === 8) {
      thisRound = (
        <RandomRound
          updater={this.updateScore}
          round={8}
          answers={this.state.r8answers}
          scores={this.state.r8scores}
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
        <SpecialRound checkSpecialRound={this.specialRoundCheck} />
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

ReactDOM.render(<App />, document.getElementById('app'));
