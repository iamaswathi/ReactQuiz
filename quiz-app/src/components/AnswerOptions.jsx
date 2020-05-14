import React from 'react';

function AnswerOptions(props) {
    return (
      
      <li className="col-xs-12 col-sm-6 col-md-6">
        {props.answerContent ? (<button 
          type="button"
          id={props.answerType}
          value={props.index}
          className={(props.selectedAnswer === props.index) ? 'answerOption selected-btn' : 'answerOption' }
          onClick={props.onAnswerSelected}>
          <i className={(props.selectedAnswer === props.index) ? 'fa fa-check-circle' : 'fa' }></i>
          {props.answerContent}
        </button>) : (<span></span>)}
      </li> 
    );
}

export default AnswerOptions;