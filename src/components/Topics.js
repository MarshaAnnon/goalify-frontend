import React from 'react'
import TopicCard from './TopicCard.js'
import { connect } from 'react-redux'


const Topics = props => {
    const topicCards = props.topics.length > 0 ? props.topics.map(t => <TopicCard topic={t} key={t.id} />) : []
    return (
         topicCards 
    )
}

const mapStateToProps = ({ topics }) => {
    return {
        topics
    }
}

export default connect(mapStateToProps)(Topics)