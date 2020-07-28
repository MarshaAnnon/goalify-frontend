import React from 'react';
import { connect } from 'react-redux'
//1. grab the action creator
import { updateTopicForm } from '../actions/topicForm'
import { createTopic } from '../actions/topics'


//3. Redux gives back a prop called updateTopicForm which when invoked Redux will dispatch
const TopicForm = ({ updateTopicForm, topicFormData, createTopic, userId }) => {
    const handleChange = event => {
        const { name, value } = event.target
        updateTopicForm(name, value)
        //4. this is not an invocation of just the action creator
        // it's now redux dispatching the action by the action creator
        // with the appropriate arguments - VIDEO 9 GIVES AWESOME RUN THROUGH
    }

    const handleSubmit = event => { 
        event.preventDefault()
        createTopic({
            ...topicFormData,
            userId
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="name" 
                value={topicFormData.name}
                onChange={handleChange} 
                placeholder="Topic Name" 
        />
            <input
                type="submit" 
                value="Create Topic" 
            />
        </form>
    );
};

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        topicFormData: state.topicForm,
        userId
    }
}
//2. pass the action creator to redux's connect function using mapDispatchToProps or the
// shorthand object syntax 
export default connect(mapStateToProps, { updateTopicForm, createTopic })(TopicForm);
