export default (state = [], action) => {
    switch (action.type) {
        case "SET_TOPICS":
            return action.topics
        case "ADD_TOPIC":
            return state.concat(action.topic)
        case "CLEAR_TOPICS":
            return []
        default:
            return state
    }
}