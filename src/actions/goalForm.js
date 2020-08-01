// synchronous actions
export const updateGoalForm = (name, value) => {
    const formData = { name, value }
    return(dispatch) => {
        dispatch(
            {type: "UPDATE_GOAL_FORM", 
            formData})
    }
       
}
  
export const resetGoalForm = () => {
    return {
      type: "RESET_GOAL_FORM",

    }
}
