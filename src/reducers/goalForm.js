const initialState = {
    goalName: "",
    goalDescription: "",
    goalTimeline: ""
}

export default (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_GOAL_FORM":
            const returnVal = {
            ...state,
            [action.formData.name]: action.formData.value
        }
            return returnVal

        case "RESET_GOAL_FORM":
            return initialState
    default:
        return state
    }
}
