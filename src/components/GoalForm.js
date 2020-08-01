import React from 'react';
import { connect } from 'react-redux'
//1. grab the action creator
import { updateGoalForm } from '../actions/goalForm'
import { createGoal } from '../actions/goals';

//3. Redux gives back a prop called updateTopicForm which when invoked Redux will dispatch
const GoalForm = ({ goalFormData, history, updateGoalForm, topicId, createGoal }) => {
    
    const handleChange = event => {
        const { name, value } = event.target
        updateGoalForm(name, value)
        //4. this is not an invocation of just the action creator
        // it's now redux dispatching the action by the action creator
        // with the appropriate arguments - VIDEO 9 GIVES AWESOME RUN THROUGH
    }

    const handleSubmit = event => {
        event.preventDefault()
        createGoal({
            ...goalFormData,
            topicId
        }, history)
    }

    return (
        <form onSubmit={handleSubmit} >
            <input 
                type="text"
                name="goalName" 
                value={goalFormData.name}
                onChange={handleChange} 
                placeholder="Goal Name" 
            />
            <br/>
            <br/>
            <input 
                type="text"
                name="goalDescription" 
                value={goalFormData.description}
                onChange={handleChange} 
                placeholder="Goal Description" 
            />
            <br/>
            <br/>
            <input 
                type="text"
                name="goalTimeline"
                value={goalFormData.timeline}
                onChange={handleChange} 
                placeholder="Goal Timeline" 
            />
            <br/>
            <br/>
            <input
                type="submit"
                value={ "Create Goal" }
            />
        </form>
    );
};

const mapStateToProps = state => {
    return {
        goalFormData: state.goalForm
        
    }
}

//2. pass the action creator to redux's connect function using mapDispatchToProps or the
// shorthand object syntax 
export default connect(mapStateToProps, { updateGoalForm, createGoal })(GoalForm);
