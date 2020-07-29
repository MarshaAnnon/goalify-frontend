export default (state = [], action) => {
    switch (action.type) {
        case "SET_TOPICS":
            return action.topics
        case "ADD_TOPIC":
            return state.concat(action.topic)
        case "UPDATE_TOPIC":
            return state.map(topic => topic.id === action.topic.id ? action.topic : topic)
        case "DELETE_TOPIC":
            return state.filter(topic => topic.id === action.topicId ? false : true)
        case "CLEAR_TOPICS":
            return []
        default:
            return state
    }
}