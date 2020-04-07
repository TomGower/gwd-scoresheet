import React from 'react';

const Question = ({thisColor, round, answer, number}) => (
  <div>
    <strong>Question 1</strong><br />
    <span style={{color: thisColor}}>Answer</span>: <input className='answer' id={`round${round}answer q${number}`} defaultValue={answer}></input><input type="checkbox" id={`round${round} question${number}`}></input><label htmlFor={`question${number}`}>Check if correct</label><br />
  </div>
)

export default Question;
