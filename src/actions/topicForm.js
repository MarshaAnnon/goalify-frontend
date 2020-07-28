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