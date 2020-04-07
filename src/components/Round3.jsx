import React from 'react';

const RoundThree = ({round, updater, answers, scores}) => {
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

  return (
    <div>
      <h4>Round {round}</h4>
      <strong>Question 1</strong><br />
      <span style={{color: holder.q1}}>Answer</span>: <input className='answer' id={`round${round}answer q1`} defaultValue={answers[0]}></input><input type="checkbox" id={`round${round} question2`}></input><label htmlFor="question1">Check if correct</label><br />
      <strong>Question 2</strong><br />
      <span style={{color: holder.q2}}>Answer</span>: <input className='answer' id={`round${round}answer q2`} defaultValue={answers[1]}></input><input type="checkbox" id={`round${round} question2`}></input><label htmlFor="question2">Check if correct</label><br />
      <strong>Question 3</strong><br />
      <span style={{color: holder.q3}}>Answer</span>: <input className='answer' id={`round${round}answer q3`} defaultValue={answers[2]}></input><input type="checkbox" id={`round${round} question3`}></input><label htmlFor="question3">Check if correct</label><br />
      <strong>Question 4</strong><br />
      <span style={{color: holder.q4}}>Answer</span>: <input className='answer' id={`round${round}answer q4`} defaultValue={answers[3]}></input><input type="checkbox" id={`round${round} question4`}></input><label htmlFor="question4">Check if correct</label><br />
      <strong>Question 5</strong><br />
      <span style={{color: holder.q5}}>Answer</span>: <input className='answer' id={`round${round}answer q5`} defaultValue={answers[4]}></input><input type="checkbox" id={`round${round} question5`}></input><label htmlFor="question5">Check if correct</label><br />
      <strong>Question 6</strong><br />
      <span style={{color: holder.q6}}>Answer</span>: <input className='answer' id={`round${round}answer q6`} defaultValue={answers[5]}></input><input type="checkbox" id={`round${round} question6`}></input><label htmlFor="question6">Check if correct</label><br />
      <strong>Question 7</strong><br />
      <span style={{color: holder.q7}}>Answer</span>: <input className='answer' id={`round${round}answer q7`} defaultValue={answers[6]}></input><input type="checkbox" id={`round${round} question7`}></input><label htmlFor="question7">Check if correct</label><br />
      <strong>Question 8</strong><br />
      <span style={{color: holder.q8}}>Answer</span>: <input className='answer' id={`round${round}answer q8`} defaultValue={answers[7]}></input><input type="checkbox" id={`round${round} question8`}></input><label htmlFor="question8">Check if correct</label><br />
      <br />
      <button value={round} onClick={updater}>CLICK TO UPDATE YOUR ROUND {round} ANSWERS AND SCORE</button>
    </div>
  )
}

export default RoundThree;
