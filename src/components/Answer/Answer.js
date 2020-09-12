import React from 'react';
import AnswerOption from '../AnswerOption/AnswerOption';

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function Answer(props) {
  let letterIndex=97
  shuffleArray(props.options)
  const options = props.options.map((option) =>
        <AnswerOption letter={String.fromCharCode(letterIndex++)} key={option} content={option} correct={props.answer.includes(option)}/>
    );

  return (
        <div style={{backgroundColor:'brown', display:'flex', flexDirection:'column', justifyContent:'center'}}>
        {options}
        </div>
  );
}


export default Answer;