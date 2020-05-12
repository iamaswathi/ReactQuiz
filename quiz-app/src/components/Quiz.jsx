import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Question from './Question';
import QuestionCount from './QuestionCount';
import Answers from './Answers';

function Quiz(props) {
    function renderAnswers(key){
        return (
            <Answers key={key.content} answerContent={key.content}
            answerType={key.type} answer={props.answer}
            questionId={props.questionId} nAnswerSelected={props.onAnswerSelected}></Answers>
        );
    }

    return (
        <CSSTransitionGroup className="container" component="div"
            transitionName="fade" transitionEnterTimeout={800}
            transitionLeaveTimeout={500} transitionAppear
            transitionAppearTimeout={500}>
                <div key={props.questionId}>
                    <QuestionCount counter={props.questionId} total={props.questionTotal} />
                    <Question content={props.question} />
                    <ul className="answers">
                    {props.answers.map(renderAnswers)}
                    </ul>
                </div>
        </CSSTransitionGroup>
    );
}

Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

  
export default Quiz;
