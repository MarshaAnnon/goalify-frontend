import React from 'react';
import { Link } from 'react-router-dom'


const GoalCard = ({ goal, topic}) => {
    return (
        <div>
            <h2>{ topic }</h2>
            <h4>Goal Name: { goal.goal_name }</h4>
            <p>Goal Description: { goal.goal_description }</p> 
            <h5>Goal Timeline: { goal.goal_timeline }</h5> 
            <Link
                to={`/topics/${goal.topic_id}/goals/${goal.id}/edit`} > Edit Goal
            </Link>
        </div>
    );
};

export default GoalCard;