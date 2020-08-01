import React from 'react'
import { Link } from 'react-router-dom'

const Goals = ({ goals, topicId }) => {

    const goalCards = goals.length > 0 ?
        goals.map(goal => (
            <p key={goal.id}>
                <Link to={`/topics/${topicId}/goals/${goal.id}`}>
                    {goal.goal_name}
                </Link>
            </p>)) 
        : null

    return goalCards 
}

export default Goals;