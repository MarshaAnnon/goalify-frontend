import React from 'react';
import { connect } from 'react-redux'
import { updateNewTopicForm } from '../actions/newTopicForm'

const NewTopicForm = ({ updateNewTopicForm, newTopicFormData, history }) => {
    const handleChange = event => {
        const { name, value } = event.target
        updateNewTopicForm(name, value)
    }

    const handleSubmit = event => event.preventDefault()

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="name" 
                value={newTopicFormData.name}
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

// const mapStateToProps = ({ newTopicForm }) => {
//     const { name } = newTopicForm
//     return {
//         name
//     }
// }

export default connect(state => ({newTopicFormData: state.newTopicForm}), { updateNewTopicForm })(NewTopicForm);
