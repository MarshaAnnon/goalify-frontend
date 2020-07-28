export default (state = [], action) => {
    switch (action.type) {
        case "SET_TOPICS":
            return action.topics
        case "ADD_TOPIC":
            return state.concat(action.topic)
        case "UPDATE_TOPIC":
            console.log("in UPDATE_TOPIC action is", action)
            return state
        case "CLEAR_TOPICS":
            return []
        default:
            return state
    }
}