import React from 'react';
import Badge from 'react-bootstrap/Badge'
import { connect } from 'react-redux'
import { deleteGoal } from '../../actions/goals'

const GoalCard = ({ goal, topic, history, deleteGoal }) => {
    return (
        <div>
            <br />
            <br />
            <div className="goal-circle">
                <h2>{ topic.attributes.name }</h2>
                <br />
                <h5>Goal Name:<p> { goal.goal_name }</p></h5>
                <h5>Goal Description:<p> { goal.goal_description }</p></h5> 
                <h5>Goal Timeline:<p> { goal.goal_timeline }</p></h5>
                <br />
                <br />
                <br />
                <div className="goal-button">
                    <Badge variant="light" onClick={() => deleteGoal(goal.id, topic.id,  history)}>Delete this goal</Badge>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { deleteGoal })(GoalCard);
