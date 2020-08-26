import React from 'react'
import { Link } from 'react-router-dom'
import Goals from '../goals/Goals'
import GoalForm from '../goals/GoalForm'

const TopicCard = ({ topic }) => {
    return (
        <div>
            <br /><br />
            {topic ?
            <div>
                <h4>{ topic.attributes.name }</h4>
                <Link className="home-link" to={`/topics/${topic.id}/edit`}>Edit this Topic</Link>
                <br />
                <Goals goals={topic.attributes.goals} topicId={topic.id} />
                <GoalForm topicId={topic.id} />
            </div>
        : null}  
        </div>
    )
}

export default TopicCard