export default (state = [], action) => {
    switch (action.type) {
        case "SET_TOPICS":
            return action.topics
        default:
            return state
    }
}