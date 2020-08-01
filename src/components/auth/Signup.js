import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { updateSignupForm } from '../../actions/signupForm';
import { signup } from '../../actions/currentUser';

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData, history)
    }
    
    return (
        <Container className="form-container">
            <h5><strong>Sign Up</strong></h5>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={signupFormData.username} 
                        onChange={handleInputChange} 
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                    type="text" 
                    name="email" 
                    placeholder="Email" 
                    value={signupFormData.email} 
                    onChange={handleInputChange} 
                />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        type="text" 
                        name="password" 
                        value={signupFormData.password} 
                        placeholder="Password" 
                        onChange={handleInputChange} 
                    />
                </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
            </Form>
        </Container>
        
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)