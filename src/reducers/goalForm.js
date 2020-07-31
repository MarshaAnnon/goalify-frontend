const initialState = {
    goalName: "",
    goalDescription: "",
    goalTimeline: ""
}

export default (state=initialState, action) => {
    console.log("the incoming action is", action)
    debugger
    switch (action.type) {
        case "UPDATE_GOAL_FORM":
            const returnVal = {
            ...state,
            [action.formData.name]: action.formData.value
        }
        console.log("returnVal in the reducer", returnVal)
            return returnVal

        case "RESET_GOAL_FORM":
            debugger
            return initialState
    default:
        return state
    }
}
