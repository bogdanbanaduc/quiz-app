import React from 'react';
import Timer from 'react-compound-timer'

function QuizStatus(props) {
  return (
        <div style={{
                     padding:'1rem 0', 
                     display:'flex', 
                     flexDirection: 'row',
                     justifyContent: 'space-around'}}>
          <div style={{textAlign: 'left'}}>
            <label style={{color:'green', marginRight: '1em'}}>0</label>
            <label style={{color:'red'}}>0</label>
          </div>
          <div style={{fontSize: '1.2rem', letterSpacing:'0.1rem'}}><strong>QUESTION {props.progress}</strong></div>
          <div style={{width:'3%', textAlign: 'right', marginRight: '0'}}>
            <Timer formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}><Timer.Minutes />:<Timer.Seconds /></Timer>
          </div>
        </div>
  );
}


export default QuizStatus;