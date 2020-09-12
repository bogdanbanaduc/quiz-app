import React from 'react';
import './Question.css';

function Question(props) {
  if (props.image)
    return (
          <div>
          <p>{props.text}</p>
            <img alt="questionPhoto" className='questionImage' style={{maxWidth: '85%'}} src={props.image}></img>
          </div>
    );
  else
    return (
          <div>
          <p>{props.text}</p>
          </div>
    );
}


export default Question;