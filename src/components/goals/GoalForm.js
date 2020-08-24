import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { updateGoalForm } from '../../actions/goalForm';
import { createGoal } from '../../actions/goals';

const GoalForm = ({ goalFormData, history, updateGoalForm, topicId, createGoal }) => {
    
    const handleChange = event => {
        const { name, value } = event.target
        updateGoalForm(name, value)
    }

    const handleSubmit = event => {
        debugger
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

export default withRouter(connect(mapStateToProps, { updateGoalForm, createGoal })(GoalForm));
