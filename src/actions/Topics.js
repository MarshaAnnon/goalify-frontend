import { resetTopicForm } from './topicForm'

//synchronous action creators
export const setTopics = topics => {
    return {
        type: "SET_TOPICS",
        topics
    }
}

export const clearTopics = () => {
    return {
        type: "CLEAR_TOPICS",
    }
}

export const addTopic = topic => {
    return {
        type: "ADD_TOPIC",
        topic
    }
}

export const updateTopicSuccess = topic => {
    return {
        type: "UPDATE_TOPIC",
        topic
    }
}

//asynchronous action creators
export const getTopics = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/topics", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"   
            },
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                console.log(resp.data)
                dispatch(setTopics(resp.data))
            }
        })
        .catch(console.log)
    }
}

export const createTopic = (topicData, history) => {
    return dispatch => {
        const sendableTripData = {
            name: topicData.name,
            user_id: topicData.userId
        }
        return fetch("http://localhost:3000/api/v1/topics", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"   
            },
            body: JSON.stringify(sendableTripData)
        })
        .then(resp => resp.json())
        .then(resp => {
            dispatch(addTopic(resp.data))
            dispatch(resetTopicForm())
            history.push(`/topics/${resp.data.id}`)
            if (resp.error) {
                alert(resp.error)
            } else {
                console.log(resp.data)
            }
        })
        .catch(console.log)
    }
}

export const updateTopic = (topicData, history) => {
    return dispatch => {
        const sendableTripData = {
            name: topicData.name,
            user_id: topicData.userId
        }
        return fetch(`http://localhost:3000/api/v1/topics/${topicData.topicId}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"   
            },
            body: JSON.stringify(sendableTripData)
        })
        .then(resp => resp.json())
        .then(resp => {
            dispatch(updateTopicSuccess(resp.data))
            dispatch(resetTopicForm())
            history.push(`/topics/${resp.data.id}`)
            if (resp.error) {
                alert(resp.error)
            } else {
                console.log(resp.data)
            }
        })
        .catch(console.log)
    }
}
