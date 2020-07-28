const initialState = {
    name: ""
  }
  
  export default (state=initialState, action) => {
    switch (action.type) {
      case "UPDATE_TOPIC_FORM":
        const returnVal = {
          ...state,
          [action.formData.name]: action.formData.value
        }
        return returnVal
      case "RESET_TOPIC_FORM":
        return initialState
      case "SET_FORM_DATA_FOR_EDIT":
        return action.topicFormData
      default:
        return state
    }
  }