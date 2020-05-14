import React from 'react';

function QuestionCount(props) {
    return (
        <div className="questionCount">
            Question <span>{props.counter}</span> / <span>{props.total}</span>
            {props.counter === 5 ? (
                <button className="btn-wrap result-link" onClick={props.viewreults}>
                    <i className="fa fa-dot-circle-o"></i>Submit
                </button>) : (<div></div>)}
        </div>
    );
}

export default QuestionCount;