import React from 'react'
import { Link } from 'react-router-dom'
import Goals from './Goals'


const TopicCard = ({ topic }) => {
    return (
        <div>
            {topic ?
            <div>
                <h3>{ topic.attributes.name }</h3>
            <Link to={`/topics/${topic.id}/edit`}>Edit this Topic</Link>
        </div>
        : null}
        <Goals goals={topic.attributes.goals} topicId={topic.id} />
        </div>
    )
}

export default TopicCard