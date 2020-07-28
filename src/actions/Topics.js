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

export const addTopic = () => {
    return {
        type: "ADD_TOPIC",
        // topic
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

export const createTopic = topicData => {
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
            if (resp.error) {
                alert(resp.error)
            } else {
                console.log(resp.data)
                dispatch(addTopic(resp.data))
            }
        })
        .catch(console.log)
    }
}
