import React from 'react'
import { Link } from 'react-router-dom'


const TopicCard = ({ topic }) => {
    return (
        topic ?
        <div>
            <h3>{ topic.attributes.name }</h3>
            <Link to={`/topics/${topic.id}/edit`}>Edit this Topic</Link>
        </div>
        : null
    )
}

export default TopicCard