import React from 'react';
import { connect } from 'react-redux'
import { updateTopic } from '../actions/topics'
import { setFormDataForEdit } from '../actions/topicForm'
import TopicForm from './TopicForm';

class EditTopicFormWrapper extends React.Component {

    componentDidMount() {
        this.props.topic && this.props.setFormDataForEdit(this.props.topic)
    }
    handleSubmit = (event, topicFormData, history, userId) => {
        const { updateTopic, topic } = this.props 
        event.preventDefault()
        updateTopic({
            ...topicFormData,
            topicId: topic.id,
            userId,
        }, history)
    }
    render() {
        const { history, handleSubmit } = this.props
        return (
            <TopicForm editMode history={history} handleSubmit={handleSubmit} />
        )
    }
};


export default connect(null, { updateTopic, setFormDataForEdit })(EditTopicFormWrapper);