import React, {Component} from 'react';

const RandomRound = function(props) {
    let holder = {};
    for (let i = 0; i < props.scores.length; i++) {
      let thisVar = `q${i+1}`;
      if (parseInt(props.scores[i]) === 1) {
        holder[thisVar] = 'green';
      } else if (props.scores[i] === '') {
        holder[thisVar] = 'black';
      } else if (parseInt(props.scores[i]) === 0) {
        holder[thisVar] = 'red';
      }
    }

    return (
      <div>
        <h4>Round {props.round}</h4>
        <strong>Question 1</strong><br />
        <span style={{color: holder.q1}}>Answer</span>: <input className='answer' id={`round${props.round}answer q1`} defaultValue={props.answers[0]}></input><input type="checkbox" id={`round${props.round} question1`}/><label htmlFor="question1">Check if correct</label><br />
        <strong>Question 2</strong><br />
        <span style={{color: holder.q2}}>Answer A</span>: <input className='answer' id={`round${props.round}answer q2a`} defaultValue={props.answers[1]}></input><input type="checkbox" id={`round${props.round} question2a`}></input><label htmlFor="question2">Check if correct</label><br />
        <span style={{color: holder.q3}}>Answer B</span>: <input className='answer' id={`round${props.round}answer q2b`} defaultValue={props.answers[2]}></input><input type="checkbox" id={`round${props.round} question2b`}></input><label htmlFor="question2">Check if correct</label><br />
        <strong>Sheer Quotient</strong><br />
        <span style={{color: holder.q4}}>Answer</span>: <input className='answer' id={`round${props.round}answer q3`} defaultValue={props.answers[3]}></input><input type="checkbox" id={`round${props.round} question3`}></input><label htmlFor="question3">Check if correct</label><br />
        <strong>Question 4</strong><br />
        <span style={{color: holder.q5}}>Answer A</span>: <input className='answer' id={`round${props.round}answer q4a`} defaultValue={props.answers[4]}></input><input type="checkbox" id={`round${props.round} question4a`}></input><label htmlFor="question4">Check if correct</label><br />
        <span style={{color: holder.q6}}>Answer B</span>: <input className='answer' id={`round${props.round}answer q4b`} defaultValue={props.answers[5]}></input><input type="checkbox" id={`round${props.round} question4b`}></input><label htmlFor="question4">Check if correct</label><br />
        <span style={{color: holder.q7}}>Answer C</span>: <input className='answer' id={`round${props.round}answer q4c`} defaultValue={props.answers[6]}></input><input type="checkbox" id={`round${props.round} question4c`}></input><label htmlFor="question4">Check if correct</label><br />
        <strong>Question 5</strong><br />
        <span style={{color: holder.q8}}>Answer</span>: <input className='answer' id={`round${props.round}answer q5`} defaultValue={props.answers[7]}></input><input type="checkbox" id={`round${props.round} question5`}></input><label htmlFor="question5">Check if correct</label><br />
        <strong>Question 6</strong><br />
        <span style={{color: holder.q9}}>Answer A</span>: <input className='answer' id={`round${props.round}answer q6a`} defaultValue={props.answers[8]}></input><input type="checkbox" id={`round${props.round} question6a`}></input><label htmlFor="question4">Check if correct</label><br />
        <span style={{color: holder.q10}}>Answer B</span>: <input className='answer' id={`round${props.round}answer q6b`} defaultValue={props.answers[9]}></input><input type="checkbox" id={`round${props.round} question6b`}></input><label htmlFor="question4">Check if correct</label><br />
        <span style={{color: holder.q11}}>Answer C</span>: <input className='answer' id={`round${props.round}answer q6c`} defaultValue={props.answers[10]}></input><input type="checkbox" id={`round${props.round} question6c`}></input><label htmlFor="question4">Check if correct</label><br />
        <strong>Question 7</strong><br />
        <span style={{color: holder.q12}}>Answer</span>: <input className='answer' id={`round${props.round}answer q7`} defaultValue={props.answers[11]}></input><input type="checkbox" id={`round${props.round} question7`}></input><label htmlFor="question7">Check if correct</label><br />
        <strong>Question 8</strong><br />
        <span style={{color: holder.q13}}>Answer A</span>: <input className='answer' id={`round${props.round}answer q8a`} defaultValue={props.answers[12]}></input><input type="checkbox" id={`round${props.round} question8a`}></input><label htmlFor="question4">Check if correct</label><br />
        <span style={{color: holder.q14}}>Answer B</span>: <input className='answer' id={`round${props.round}answer q8b`} defaultValue={props.answers[13]}></input><input type="checkbox" id={`round${props.round} question8b`}></input><label htmlFor="question4">Check if correct</label><br />
        <span style={{color: holder.q15}}>Answer C</span>: <input className='answer' id={`round${props.round}answer q8c`} defaultValue={props.answers[14]}></input><input type="checkbox" id={`round${props.round} question8c`}></input><label htmlFor="question4">Check if correct</label><br />
        <span style={{color: holder.q16}}>Answer D</span>: <input className='answer' id={`round${props.round}answer q8d`} defaultValue={props.answers[15]}></input><input type="checkbox" id={`round${props.round} question8d`}></input><label htmlFor="question8">Check if correct</label><br />
        <br />
        <button value={props.round} onClick={props.updater}>CLICK TO UPDATE YOUR ROUND {props.round} ANSWERS AND SCORE</button>
      </div>
    )
}

export default RandomRound;
