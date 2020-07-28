// synchronous actions
export const updateNewTopicForm = (name, value) => {
    const formData = { name, value }
    return {
      type: "UPDATE_NEW_TOPIC_FORM",
      formData
    }
  }
  
  export const resetNewTopicForm = () => {
    return {
      type: "RESET_NEW_TOPIC_FORM",
    }
  }