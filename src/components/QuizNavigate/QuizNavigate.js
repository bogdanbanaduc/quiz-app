import React from 'react';
import './QuizNavigate.css'



function QuizNavigate({changeQuestion}) {
  return (
        <div>
          <button onClick={() => changeQuestion('-')} className="buttonChangeQuestion"/>
          <button>Submit</button>
          <button onClick={() => changeQuestion('+')} className="buttonChangeQuestion"/>
        </div>
  );
}

export default QuizNavigate;