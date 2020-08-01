import React from 'react';
import { connect } from 'react-redux'
import { createTopic } from '../../actions/topics'
import TopicForm from './TopicForm';

const NewTopicFormWrapper = ({ history, createTopic }) => {

    const handleSubmit = (topicFormData, userId) => { 
        
        createTopic({
            ...topicFormData,
            userId,
        }, history)
    }
    return (
        <TopicForm history={history} handleSubmit={handleSubmit} />
    )
};


export default connect(null, { createTopic })(NewTopicFormWrapper);