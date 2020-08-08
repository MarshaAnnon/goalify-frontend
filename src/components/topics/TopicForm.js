import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { updateTopicForm } from '../../actions/topicForm';

const TopicForm = ({ 
    updateTopicForm, 
    topicFormData,  
    handleSubmit,
    editMode
    }) => {

    const handleChange = event => {
        const { name, value } = event.target
        updateTopicForm(name, value)
    }

    return (
        <Container className="form-container">
            <Form 
                onSubmit={event => {
                    event.preventDefault()
                    handleSubmit(topicFormData)
                }}
            >
                <Form.Group>
                    <Form.Control 
                    type="text" 
                    name="name" 
                    value={topicFormData.name}
                    onChange={handleChange} 
                    placeholder="Topic Name" 
                />
                </Form.Group>
                    <Button 
                        variant="primary" 
                        type="submit" 
                        value={editMode ? "Update Topic" : "Create Topic" }
                    > Submit
                    </Button>
            </Form>
        </Container>
    );
};

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        topicFormData: state.topicForm,
        userId
    }
}

export default connect(mapStateToProps, { updateTopicForm })(TopicForm);
