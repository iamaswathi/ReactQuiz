import React from 'react';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOptions from './AnswerOptions';

function Quiz(props) {
    function renderAnswerOptions(key,index) {
        return (
          <AnswerOptions
            index ={index}
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={props.answer}
            questionId={props.questionId}
            selectedAnswer={props.selectedAnswer}
            onAnswerSelected={props.onAnswerSelected}
          />
        );
      }
    
    
      return (
          <div className="container">
              <div className="row">
                <div key={props.questionId} className="col-xs-12 quiz-story">
                    <QuestionCount viewreults={props.viewreults}
                    counter={props.questionId}
                    total={props.questionTotal}
                    />
                    <Question  content={props.question} />
                    <ul className="answerOptions">
                    {props.answerOptions.map(renderAnswerOptions)}
                    </ul>
                    <div className="bottom-footer" >
                        {props.counter > 0 ? (
                            <div className="button_cont" onClick={props.setPreviousQuestion} >
                                <button className="btn-wrap btn-previous" >
                                    <span>Previous</span>
                                </button>
                            </div>) : (<span></span>)}
                
                        {props.counter < 4 ? (
                            <div className="button_cont" onClick={props.setNextQuestion} >
                                <button className="btn-wrap btn-next" >
                                    <span>Next</span>
                                </button>
                            </div>) : (<span></span>)}

                        {props.counter === 4 ? (
                            <div className="button_cont result-link" onClick={props.viewreults}>
                                <button className="btn-wrap btn-next" >
                                    <span>Submit</span>
                                </button>
                            </div>) : (<span></span>)}
                    </div>
                </div>
            </div>
          </div>
      );
}

  
export default Quiz;
