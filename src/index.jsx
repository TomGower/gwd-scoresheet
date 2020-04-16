import React from 'react';
import ReactDOM from 'react-dom';
import Joker from './components/Joker.jsx';
import RoundOne from './components/Round1.jsx';
import MusicRound from './components/Round2.jsx';
import RoundThree from './components/Round3.jsx';
import RoundFour from './components/Round4.jsx';
import RoundFive from './components/Round5.jsx';
import RoundSix from './components/Round6.jsx';
import RoundSeven from './components/Round7.jsx';
import RandomRound from './components/Round8.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      score: 0,
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
      r4scores: Array(8).fill(null),
      r4answers: Array(8).fill(''),
      r4score: 0,
      r5scores: Array(8).fill(null),
      r5answers: Array(8).fill(''),
      r5score: 0,
      r6scores: Array(8).fill(null),
      r6answers: Array(8).fill(''),
      r6score: 0,
      r7scores: Array(8).fill(null),
      r7answers: Array(8).fill(''),
      r7score: 0,
      r8scores: Array(16).fill(null),
      r8answers: Array(16).fill(''),
      r8score: 0,
      joker: '',
      jokerScore: 0
    };
    this.updateScore = this.updateScore.bind(this);
    this.pickJoker = this.pickJoker.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.r3check = this.r3check.bind(this);
  }

  componentDidMount() {
    this.setState({
      score: this.state.r1score + this.state.r2score + this.state.r3score + this.state.r4score + this.state.r5score + this.state.r6score + this.state.r7score + this.state.r8score
    })
  }

  updateScore(event) {
    const round = event.target.value;
    const answerBoxes = document.querySelectorAll(`input[id~='round${round}answer']`);
    const answers = [];
    answerBoxes.forEach(answer => answers.push(answer.value));
    const checkboxes = document.querySelectorAll(`input[id~='round${round}']`);
    const check = [];
    checkboxes.forEach(checkbox => checkbox.checked ? check.push(1) : check.push(0));
    const stateTrack = `r${round}scores`;
    const stateScores = `r${round}score`;
    const stateAnswers = `r${round}answers`;
    const thisScore = check.reduce((acc, cur) => (acc + cur));
    if (`r${round}` === this.state.joker) {
      this.setState({
        jokerScore: thisScore,
        [stateTrack]: check,
        [stateScores]: thisScore,
        [stateAnswers]: answers
      }, () => {this.setState({
        score: this.state.r1score + this.state.r2score + this.state.r3score + this.state.r4score + this.state.r5score + this.state.r6score + this.state.r7score + this.state.r8score + this.state.jokerScore
    })})} else {
      this.setState({
        [stateTrack]: check,
        [stateScores]: thisScore,
        [stateAnswers]: answers
      }, () => {this.setState({
        score: this.state.r1score + this.state.r2score + this.state.r3score + this.state.r4score + this.state.r5score + this.state.r6score + this.state.r7score + this.state.r8score + this.state.jokerScore
    })})};
  }

  pickJoker() {
    const radio = document.querySelectorAll(`input[name='joker']`);
    for (let i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        this.setState({joker: radio[i].value})
        break;
      }
    }
  }

  r3check() {
    const r3bonus = document.querySelector(`#r3bonus`);
    if (r3bonus.checked) {
      this.setState({
        r3special: true,
        r3scores: Array(16).fill(null),
        r3answers: Array(16).fill('')
      });
    }
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      )
    })

    const currentPage = this.state.currentPage;
    let thisRound;
    if (currentPage === 1) {
      thisRound = <RoundOne updater={this.updateScore} round={1} answers={this.state.r1answers} scores={this.state.r1scores}/>;
    } else if (currentPage === 2) {
      thisRound = <MusicRound updater={this.updateScore} round={2} answers={this.state.r2answers} scores={this.state.r2scores}/>;
    } else if (currentPage === 3) {
      thisRound = <RoundThree updater={this.updateScore} round={3} answers={this.state.r3answers} scores={this.state.r3scores} bonus = {this.state.r3special}/>;
    } else if (currentPage === 4) {
      thisRound = <RoundFour updater={this.updateScore} round={4} answers={this.state.r4answers} scores={this.state.r4scores}/>;
    } else if (currentPage === 5) {
      thisRound = <RoundFive updater={this.updateScore} round={5} answers={this.state.r5answers} scores={this.state.r5scores}/>;
    } else if (currentPage === 6) {
      thisRound = <RoundSix updater={this.updateScore} round={6} answers={this.state.r6answers} scores={this.state.r6scores}/>;
    } else if (currentPage === 7) {
      thisRound = <RoundSeven updater={this.updateScore} round={7} answers={this.state.r7answers} scores={this.state.r7scores}/>;
    } else if (currentPage === 8) {
      thisRound = <RandomRound updater={this.updateScore} round={8} answers={this.state.r8answers} scores={this.state.r8scores}/>;
    }

    return (
      <div>
        <h2 align="center">GEEKS WHO DRINK Scoresheet</h2>
        <hr />
        <h4>Your Current Score is {this.state.score}</h4>
        <hr />
        <Joker pickJoker={this.pickJoker}/>
        <hr />
        <div>Is tonight a special 16-point Round 3?</div><input type="checkbox" id={`r3bonus`}></input><label htmlFor={`r3bonus`}>Check if it is.</label><br />
        <div><button type="submit" id="jokerButton" onClick={this.r3check}>Make Round 3 a special 16-point round.</button></div><br />
        <hr />
        {thisRound}
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
        <hr />
        <strong>Bonus Questions</strong><br />
        Round 1 Bonus Question <br />
        <span>Answer</span>: <input className='answer' ></input><input type="checkbox" id={`bonusquestion1`}></input><label htmlFor="bonusquestion1">Check if correct</label><br />
        Round 3 Bonus Question <br />
        <span>Answer</span>: <input className='answer' ></input><input type="checkbox" id={`bonusquestion3`}></input><label htmlFor="bonusquestion3">Check if correct</label><br />
        Round 4 Bonus Question <br />
        <span>Answer</span>: <input className='answer' ></input><input type="checkbox" id={`bonusquestion4`}></input><label htmlFor="bonusquestion4">Check if correct</label><br />
        Round 6 Bonus Question <br />
        <span>Answer</span>: <input className='answer' ></input><input type="checkbox" id={`bonusquestion6`}></input><label htmlFor="bonusquestion6">Check if correct</label><br />
        Round 8 Bonus Question <br />
        <span>Answer</span>: <input className='answer' ></input><input type="checkbox" id={`bonusquestion8`}></input><label htmlFor="bonusquestion8">Check if correct</label><br />
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));