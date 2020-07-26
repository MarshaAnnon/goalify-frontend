import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'


const Login = ({ loginFormData, updateLoginForm, login }) => {
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
        login(loginFormData)
    }
    return (
        <form onSubmit={handleSubmit} >
            <input type="text" name="email" placeholder="Email" value={loginFormData.email} onChange={handleInputChange} />
            <input type="text" name="password" value={loginFormData.password} placeholder="Password" onChange={handleInputChange} />
            <input type="submit" value="Log In" />

        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)