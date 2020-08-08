import React from 'react'
import { Link } from 'react-router-dom'
import Goals from '../goals/Goals'
import GoalForm from '../goals/GoalForm'

const TopicCard = ({ topic }) => {
    return (
        <div>
            {topic ?
            <div>
                <h3>{ topic.attributes.name }</h3>
                <Link to={`/topics/${topic.id}/edit`}>Edit this Topic</Link>
                <Goals goals={topic.attributes.goals} topicId={topic.id} />
                <GoalForm topicId={topic.id} />
            </div>
        : null}  
        </div>
    )
}

export default TopicCard