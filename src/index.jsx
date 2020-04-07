import React from 'react';
import ReactDOM from 'react-dom';
import Joker from './components/Joker.jsx';
import RoundOne from './components/Round1.jsx';
import MusicRound from './components/MusicRound.jsx';
import RoundThree from './components/Round3.jsx';
import RoundFour from './components/Round4.jsx';
import RoundFive from './components/Round5.jsx';
import RoundSix from './components/Round6.jsx';
import RoundSeven from './components/Round7.jsx';
import RandomRound from './components/RandomRound.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      score: 0,
      r1scores: [null, null, null, null, null, null, null, null],
      r1answers: ['', '', '', '', '', '', '', ''],
      r1score: 0,
      r2scores: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      r2answers: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      r2score: 0,
      r3scores: [null, null, null, null, null, null, null, null],
      r3answers: ['', '', '', '', '', '', '', ''],
      r3score: 0,
      r4scores: [null, null, null, null, null, null, null, null],
      r4answers: ['', '', '', '', '', '', '', ''],
      r4score: 0,
      r5scores: [null, null, null, null, null, null, null, null],
      r5answers: ['', '', '', '', '', '', '', ''],
      r5score: 0,
      r6scores: [null, null, null, null, null, null, null, null],
      r6answers: ['', '', '', '', '', '', '', ''],
      r6score: 0,
      r7scores: [null, null, null, null, null, null, null, null],
      r7answers: ['', '', '', '', '', '', '', ''],
      r7score: 0,
      r8scores: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      r8answers: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      r8score: 0,
      joker: '',
      jokerScore: 0
    };
    this.updateScore = this.updateScore.bind(this);
    this.pickJoker = this.pickJoker.bind(this);
    this.handleClick = this.handleClick.bind(this);
    //this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      score: this.state.r1score + this.state.r2score + this.state.r3score + this.state.r4score + this.state.r5score + this.state.r6score + this.state.r7score + this.state.r8score
    })
  }

  updateScore(event) {
    let round = event.target.value;
    let answerBoxes = document.querySelectorAll(`input[id~='round${round}answer']`);
    let answers = [];
    for (let i = 0; i < answerBoxes.length; i++) {
      answers.push(answerBoxes[i].value);
    }
    let checkbox = document.querySelectorAll(`input[id~='round${round}']`);
    let arr = [];
    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        arr.push(1);
      } else {
        arr.push(0);
      }
    }
    let stateTrack = `r${round}scores`;
    let stateScores = `r${round}score`;
    let stateAnswers = `r${round}answers`;
    let thisScore = arr.reduce((acc, cur) => (acc + cur));
    if (`r${round}` === this.state.joker) {
      this.setState({
        jokerScore: thisScore
      })
    }
    this.setState({
      [stateTrack]: arr,
      [stateScores]: thisScore,
      [stateAnswers]: answers
    }, () => {this.setState({
      score: this.state.r1score + this.state.r2score + this.state.r3score + this.state.r4score + this.state.r5score + this.state.r6score + this.state.r7score + this.state.r8score + this.state.jokerScore
    })});
  }

  pickJoker() {
    let radio = document.querySelectorAll(`input[name='joker']`);
    for (let i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        this.setState({joker: radio[i].value})
        break;
      }
    }
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  /*
  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  */

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
      thisRound = <RoundThree updater={this.updateScore} round={3} answers={this.state.r3answers} scores={this.state.r3scores}/>;
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
        <span>Answer</span>: <input className='answer' ></input><input type="checkbox" id={`bonusquestion1`}></input><label htmlFor="bonusquestion4">Check if correct</label><br />
        Round 6 Bonus Question <br />
        <span>Answer</span>: <input className='answer' ></input><input type="checkbox" id={`bonusquestion1`}></input><label htmlFor="bonusquestion6">Check if correct</label><br />
        Round 8 Bonus Question <br />
        <span>Answer</span>: <input className='answer' ></input><input type="checkbox" id={`bonusquestion1`}></input><label htmlFor="bonusquestion8">Check if correct</label><br />
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));