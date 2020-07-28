// synchronous actions
export const updateTopicForm = (name, value) => {
    const formData = { name, value }
    return {
      type: "UPDATE_TOPIC_FORM",
      formData
    }
  }
  
  export const resetTopicForm = () => {
    return {
      type: "RESET_TOPIC_FORM",
    }
  }

  export const setFormDataForEdit = topics => {
    const topicFormData = {
      name: topics.attributes.name
    }
    return {
      type: "SET_FORM_DATA_FOR_EDIT",
      topicFormData
    }
  }