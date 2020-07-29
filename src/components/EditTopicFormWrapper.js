import React from 'react';
import { connect } from 'react-redux'
import { updateTopic, deleteTopic } from '../actions/topics'
import { setFormDataForEdit, resetTopicForm } from '../actions/topicForm'
import TopicForm from './TopicForm';

class EditTopicFormWrapper extends React.Component {

    componentDidMount() {
        this.props.topic && this.props.setFormDataForEdit(this.props.topic)
    }

    componentDidUpdate(prevProps) {
        this.props.topic && !prevProps.topic && this.props.setFormDataForEdit(this.props.topic)
    }

    componentWillUnmount() {
        this.props.resetTopicForm()
    }

    handleSubmit = (topicFormData) => {
        const { updateTopic, topic, history } = this.props 
        
        updateTopic({
            ...topicFormData,
            topicId: topic.id
        }, history)
    }
    render() {
        const { history, topic, deleteTopic } = this.props
        const topicId = topic ? topic.id : null
        return (
            <>
                <TopicForm editMode handleSubmit={this.handleSubmit} />
                <br />
                <button style={{color: "red" }} onClick={() => deleteTopic(topicId, history)}>Delete this topic</button>
            </>
        )
    }
};


export default connect(null, { updateTopic, setFormDataForEdit, resetTopicForm, deleteTopic })(EditTopicFormWrapper);