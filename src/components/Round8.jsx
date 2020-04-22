import React, {Component} from 'react';
import Question from './Question.jsx';

const RandomRound = function({updater, round, answers, scores}) {
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
        <Question thisColor={holder.q1} round={round} answer={answers[0]} number={1}/>
        <strong>Question 2</strong><br />
        <span style={{color: holder.q2}}>Answer A</span>: <input className='answer' id={`round${round}answer q2a`} defaultValue={answers[1]}></input><input type="checkbox" id={`round${round} question2a`}></input><label htmlFor="question2">Check if correct</label><br />
        <span style={{color: holder.q3}}>Answer B</span>: <input className='answer' id={`round${round}answer q2b`} defaultValue={answers[2]}></input><input type="checkbox" id={`round${round} question2b`}></input><label htmlFor="question2">Check if correct</label><br />
        <strong>Sheer Quotient</strong><br />
        <span style={{color: holder.q4}}>Answer</span>: <input className='answer' id={`round${round}answer q3`} defaultValue={answers[3]}></input><input type="checkbox" id={`round${round} question3`}></input><label htmlFor="question3">Check if correct</label><br />
        <strong>Question 4</strong><br />
        <span style={{color: holder.q5}}>Answer A</span>: <input className='answer' id={`round${round}answer q4a`} defaultValue={answers[4]}></input><input type="checkbox" id={`round${round} question4a`}></input><label htmlFor="question4">Check if correct</label><br />
        <span style={{color: holder.q6}}>Answer B</span>: <input className='answer' id={`round${round}answer q4b`} defaultValue={answers[5]}></input><input type="checkbox" id={`round${round} question4b`}></input><label htmlFor="question4">Check if correct</label><br />
        <span style={{color: holder.q7}}>Answer C</span>: <input className='answer' id={`round${round}answer q4c`} defaultValue={answers[6]}></input><input type="checkbox" id={`round${round} question4c`}></input><label htmlFor="question4">Check if correct</label><br />
        <Question thisColor={holder.q8} round={round} answer={answers[7]} number={5}/>
        <strong>Question 6</strong><br />
        <span style={{color: holder.q9}}>Answer A</span>: <input className='answer' id={`round${round}answer q6a`} defaultValue={answers[8]}></input><input type="checkbox" id={`round${round} question6a`}></input><label htmlFor="question4">Check if correct</label><br />
        <span style={{color: holder.q10}}>Answer B</span>: <input className='answer' id={`round${round}answer q6b`} defaultValue={answers[9]}></input><input type="checkbox" id={`round${round} question6b`}></input><label htmlFor="question4">Check if correct</label><br />
        <span style={{color: holder.q11}}>Answer C</span>: <input className='answer' id={`round${round}answer q6c`} defaultValue={answers[10]}></input><input type="checkbox" id={`round${round} question6c`}></input><label htmlFor="question4">Check if correct</label><br />
        <Question thisColor={holder.q12} round={round} answer={answers[11]} number={7}/>
        <strong>Question 8</strong><br />
        <span style={{color: holder.q13}}>Answer A</span>: <input className='answer' id={`round${round}answer q8a`} defaultValue={answers[12]}></input><input type="checkbox" id={`round${round} question8a`}></input><label htmlFor="question4">Check if correct</label><br />
        <span style={{color: holder.q14}}>Answer B</span>: <input className='answer' id={`round${round}answer q8b`} defaultValue={answers[13]}></input><input type="checkbox" id={`round${round} question8b`}></input><label htmlFor="question4">Check if correct</label><br />
        <span style={{color: holder.q15}}>Answer C</span>: <input className='answer' id={`round${round}answer q8c`} defaultValue={answers[14]}></input><input type="checkbox" id={`round${round} question8c`}></input><label htmlFor="question4">Check if correct</label><br />
        <span style={{color: holder.q16}}>Answer D</span>: <input className='answer' id={`round${round}answer q8d`} defaultValue={answers[15]}></input><input type="checkbox" id={`round${round} question8d`}></input><label htmlFor="question8">Check if correct</label><br />
        <br />
        <button value={round} onClick={updater}>CLICK TO UPDATE YOUR ROUND {round} ANSWERS AND SCORE</button>
      </div>
    )
}

export default RandomRound;
