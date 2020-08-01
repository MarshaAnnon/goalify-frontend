import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//1. grab the action creator
import { updateGoalForm } from '../../actions/goalForm';
import { createGoal } from '../../actions/goals';

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
        <Container className="form-container">
            <h5><strong>Create a New Goal</strong></h5>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type="text" 
                        name="goalName" 
                        value={goalFormData.name}
                        placeholder="Enter Goal Name"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        as="textarea" 
                        rows="5" 
                        type="text" 
                        name="goalDescription" 
                        value={goalFormData.description}   
                        placeholder="Enter Goal Description" 
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        type="text" 
                        name="goalTimeline" 
                        value={goalFormData.timeline}  
                        placeholder="Goal Timeline" 
                        onChange={handleChange} 
                />
                </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
            </Form>
        </Container>
        
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
