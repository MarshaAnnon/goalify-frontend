import React from 'react';
import { connect } from 'react-redux'
//1. grab the action creator
import { updateTopicForm } from '../actions/topicForm'

//3. Redux gives back a prop called updateTopicForm which when invoked Redux will dispatch
const TopicForm = ({ 
    updateTopicForm, 
    topicFormData,  
    userId,
    history, 
    handleSubmit,
    editMode
    }) => {

    const handleChange = event => {
        const { name, value } = event.target
        updateTopicForm(name, value)
        //4. this is not an invocation of just the action creator
        // it's now redux dispatching the action by the action creator
        // with the appropriate arguments - VIDEO 9 GIVES AWESOME RUN THROUGH
    }

    return (
        <form onSubmit={event => {
            handleSubmit(event, topicFormData, history, userId)
        }}>
            <input 
                type="text"
                name="name" 
                value={topicFormData.name}
                onChange={handleChange} 
                placeholder="Topic Name" 
        />
            <input
                type="submit"
                value={editMode ? "Update Topic" : "Create Topic" }
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
export default connect(mapStateToProps, { updateTopicForm })(TopicForm);
