import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Topics = props => {
    const topicCards = props.topics.length > 0 ?
        props.topics.map(t => (
            <div className="topics-container">
                <div className="topics">
                    <p key={t.id}>
                        <Link className="link" to={`/topics/${t.id}`}> 
                            { t.attributes.name }
                        </Link>
                    </p>
                </div>
                <br />
            </div>
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
