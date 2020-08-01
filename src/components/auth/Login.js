import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/currentUser';
import { updateLoginForm } from '../../actions/loginForm';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Login = ({ loginFormData, updateLoginForm, login, history }) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData, history)
    }
    return (
        <Container className="form-container">
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email" 
                        name="email" 
                        value={loginFormData.email}
                        placeholder="Enter email"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        name="password" 
                        value={loginFormData.password}  
                        placeholder="Password" 
                        onChange={handleInputChange} />
                </Form.Group>
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
            </Form>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)