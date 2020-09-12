import React, {useState} from 'react';
import './Quiz.css';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';
import QuizStatus from '../QuizStatus/QuizStatus';
import QuizNavigate from '../QuizNavigate/QuizNavigate';

let progress = 1
const questions = [
  {question: 'what is 2+2?',
  image: '',
  options: [4, 5, 6, 22],
  answer: [4],
  completed: false},

  {question: 'what is 3+3?',
  image: '',
  options: [2, 3, 4, 6, 5],
  answer: [6],
  completed: false},

  {question: 'what is 4+4?',
  image: '',
  options: [19, 38, 47, 8],
  answer: [8],
  completed: true},

  {question: 'what is 5+5?',
  image: '',
  options: [28, 9, 3, 6],
  answer: [10],
  completed: true}
]

function Quiz() {
  let [progress, changeQuestion] = useState(1);

  function findNextUnanswered () {
    while (questions[progress].completed === true && progress<(questions.length-1))
      {progress++;
       if (questions[progress].completed === false)
          return ++progress}
      return -1;}
  function findPreviousUnanswered () {
    while (questions[--progress].completed === true && progress>1)
      {
       if (questions[progress].completed === false)
          return --progress}
      return -1;}

  return (
        <div className="quiz">
          <QuizStatus progress={progress}/>
          <Question text={questions[progress-1].question} 
                    image={questions[progress-1].image}/>
          <Answer options={questions[progress-1].options}
                  answer={questions[progress-1].answer}/>
          <QuizNavigate changeQuestion={(e) => {
            if(e==='-')
              {if (progress>1)
                if (questions[(progress-2)].completed===false)
                  changeQuestion(--progress);
                else{
                  {let previousIndex = progress;
                  const nextIndex = findPreviousUnanswered()
                  if (nextIndex !== -1)
                    changeQuestion(nextIndex);
                  else
                    progress = previousIndex}}
                }
            else
              {if (progress<questions.length){
                  if (questions[progress].completed===false)
                      changeQuestion(++progress);
                  else{
                    let previousIndex = progress;
                    const nextIndex = findNextUnanswered()
                    if (nextIndex !== -1)
                      changeQuestion(nextIndex);
                    else
                      progress = previousIndex}}}}}
            />
        </div>
  );
}


export default Quiz;