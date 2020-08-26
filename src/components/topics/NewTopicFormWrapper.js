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
        <>
        <br /><br />
        <h4><strong>Create a New Topic</strong></h4>
        <TopicForm history={history} handleSubmit={handleSubmit} />
        </>
    )
};

export default connect(null, { createTopic })(NewTopicFormWrapper);