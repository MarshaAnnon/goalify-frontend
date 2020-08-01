import React from 'react';
import { connect } from 'react-redux'
import { deleteGoal } from '../../actions/goals'

const GoalCard = ({ goal, topic, history, deleteGoal }) => {
    return (
        <div>
            <h2>{ topic.attributes.name }</h2>
            <h4>Goal Name: { goal.goal_name }</h4>
            <p>Goal Description: { goal.goal_description }</p> 
            <h5>Goal Timeline: { goal.goal_timeline }</h5> 
            <button style={{color: "red" }} onClick={() => deleteGoal(goal.id, topic.id, history)}>Delete this goal</button>
        </div>
    );
};

export default connect(null, { deleteGoal })(GoalCard);
