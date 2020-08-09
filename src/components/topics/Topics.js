import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TopicsIncrementor from './TopicsIncrementor'

const Topics = props => {
    const topicCards = props.topics.length > 0 ?
        props.topics.map(t => (
            <p key={t.id}>
                <Link to={`/topics/${t.id}`}> 
                    {t.attributes.name}
                </Link>
                <TopicsIncrementor />
            </p>
            )) 
        : null
    return topicCards  
}

const mapStateToProps = ({ topics }) => {
    return {
        topics
    }
}

export default connect(mapStateToProps)(Topics)