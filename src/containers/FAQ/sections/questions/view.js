import React from 'react';
import './styles.css';
import Collapsible from 'react-collapsible';

var view = function () {
    let {translate} = this.props;


    return (
        <div className="questions background">
          <div className="responsive">
            <div className="accordion">
                {this.props.questions.map(function (question, i) {
                    return (
                        <Collapsible className="clickable" trigger={translate(question.question)} key={i}>
                            <p>{translate(question.answer)}</p>
                        </Collapsible>
                    )
                })}
            </div>
          </div>
        </div>
    )
}
export default view;
