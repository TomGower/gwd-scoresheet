import React from 'react';
import Question from './Question.jsx';

const RoundThree = ({round, updater, answers, scores, bonus}) => {
  let holder = {};
  for (let i = 0; i < scores.length; i++) {
    let thisVar = `q${i+1}`;
    if (parseInt(scores[i]) === 1) {
      holder[thisVar] = 'green';
    } else if (scores[i] === '') {
      holder[thisVar] = 'black';
    } else if (parseInt(scores[i]) === 0) {
      holder[thisVar] = 'red';
    }
  }

  if (bonus) {
    return (
      <div>
        <h4>Round {round}</h4>
        <strong>Question 1</strong><br />
        <span style={{color: holder.q1}}>First Answer</span>: <input className='answer' id={`round${round}answer q1a`} defaultValue={answers[0]}></input><input type="checkbox" id={`round${round} question1`}></input><label htmlFor="question1">Check if correct</label><br />
        <span style={{color: holder.q2}}>Second Answer</span>: <input className='answer' id={`round${round}answer q1b`} defaultValue={answers[1]}></input><input type="checkbox" id={`round${round} question1`}></input><label htmlFor="question1">Check if correct</label><br />
        <strong>Question 2</strong><br />
        <span style={{color: holder.q3}}>First Answer</span>: <input className='answer' id={`round${round}answer q2a`} defaultValue={answers[2]}></input><input type="checkbox" id={`round${round} question1`}></input><label htmlFor="question1">Check if correct</label><br />
        <span style={{color: holder.q4}}>Second Answer</span>: <input className='answer' id={`round${round}answer q2b`} defaultValue={answers[3]}></input><input type="checkbox" id={`round${round} question1`}></input><label htmlFor="question1">Check if correct</label><br />
        <strong>Question 3</strong><br />
        <span style={{color: holder.q5}}>First Answer</span>: <input className='answer' id={`round${round}answer q3a`} defaultValue={answers[4]}></input><input type="checkbox" id={`round${round} question1`}></input><label htmlFor="question1">Check if correct</label><br />
        <span style={{color: holder.q6}}>Second Answer</span>: <input className='answer' id={`round${round}answer q3b`} defaultValue={answers[5]}></input><input type="checkbox" id={`round${round} question1`}></input><label htmlFor="question1">Check if correct</label><br />
        <strong>Question 4</strong><br />
        <span style={{color: holder.q7}}>First Answer</span>: <input className='answer' id={`round${round}answer q4a`} defaultValue={answers[6]}></input><input type="checkbox" id={`round${round} question1`}></input><label htmlFor="question1">Check if correct</label><br />
        <span style={{color: holder.q8}}>Second Answer</span>: <input className='answer' id={`round${round}answer q4b`} defaultValue={answers[7]}></input><input type="checkbox" id={`round${round} question1`}></input><label htmlFor="question1">Check if correct</label><br />
        <strong>Question 5</strong><br />
        <span style={{color: holder.q9}}>First Answer</span>: <input className='answer' id={`round${round}answer q5a`} defaultValue={answers[8]}></input><input type="checkbox" id={`round${round} question1`}></input><label htmlFor="question1">Check if correct</label><br />
        <span style={{color: holder.q10}}>Second Answer</span>: <input className='answer' id={`round${round}answer q5b`} defaultValue={answers[9]}></input><input type="checkbox" id={`round${round} question1`}></input><label htmlFor="question1">Check if correct</label><br />
        <strong>Question 6</strong><br />
        <span style={{color: holder.q11}}>First Answer</span>: <input className='answer' id={`round${round}answer q6a`} defaultValue={answers[10]}></input><input type="checkbox" id={`round${round} question1`}></input><label htmlFor="question1">Check if correct</label><br />
        <span style={{color: holder.q12}}>Second Answer</span>: <input className='answer' id={`round${round}answer q6b`} defaultValue={answers[11]}></input><input type="checkbox" id={`round${round} question1`}></input><label htmlFor="question1">Check if correct</label><br />
        <strong>Question 7</strong><br />
        <span style={{color: holder.q13}}>First Answer</span>: <input className='answer' id={`round${round}answer q7a`} defaultValue={answers[12]}></input><input type="checkbox" id={`round${round} question1`}></input><label htmlFor="question1">Check if correct</label><br />
        <span style={{color: holder.q14}}>Second Answer</span>: <input className='answer' id={`round${round}answer q7b`} defaultValue={answers[13]}></input><input type="checkbox" id={`round${round} question1`}></input><label htmlFor="question1">Check if correct</label><br />
        <strong>Question 8</strong><br />
        <span style={{color: holder.q15}}>First Answer</span>: <input className='answer' id={`round${round}answer q8a`} defaultValue={answers[14]}></input><input type="checkbox" id={`round${round} question1`}></input><label htmlFor="question1">Check if correct</label><br />
        <span style={{color: holder.q16}}>Second Answer</span>: <input className='answer' id={`round${round}answer q8b`} defaultValue={answers[15]}></input><input type="checkbox" id={`round${round} question1`}></input><label htmlFor="question1">Check if correct</label><br />
        <br />
        <button value={round} onClick={updater}>CLICK TO UPDATE YOUR ROUND {round} ANSWERS AND SCORE</button>
      </div>
    )
  } else {
    return (
      <div>
        <h4>Round {round}</h4>
        <Question thisColor={holder.q1} round={round} answer={answers[0]} number={1}/>
        <Question thisColor={holder.q2} round={round} answer={answers[1]} number={2}/>
        <Question thisColor={holder.q3} round={round} answer={answers[2]} number={3}/>
        <Question thisColor={holder.q4} round={round} answer={answers[3]} number={4}/>
        <Question thisColor={holder.q5} round={round} answer={answers[4]} number={5}/>
        <Question thisColor={holder.q6} round={round} answer={answers[5]} number={6}/>
        <Question thisColor={holder.q7} round={round} answer={answers[6]} number={7}/>
        <Question thisColor={holder.q8} round={round} answer={answers[7]} number={8}/>
        <br />
        <button value={round} onClick={updater}>CLICK TO UPDATE YOUR ROUND {round} ANSWERS AND SCORE</button>
      </div>
    )
  }
}

export default RoundThree;
