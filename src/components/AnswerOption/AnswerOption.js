import React, {useState} from 'react';
import './AnswerOption.css';

function AnswerOption(props) {
    const [selected, changeSelected] = useState(0);

  if(!selected){
    return (
            <button onClick={() => changeSelected(!selected)} className="answerContainer">
                <div className="answerCheckbox">
                    <label>{props.letter})</label>
                    <label className="answerText">{props.content}
                    </label>
                </div>
            </button>
      );
    }
  else {
      return (
            <button onClick={() => changeSelected(!selected)} className="answerContainer selected">
                <div className="answerCheckbox">
                    <label>{props.letter})</label>
                    <label className="answerText">{props.content}
                    </label>
                </div>
            </button>
      );
  }
}

export default AnswerOption;