import React from 'react'

const TopicCard = ({ topic }) => {
    return (
        <h3>{ topic.attributes.name }</h3>
    )
}

export default TopicCard