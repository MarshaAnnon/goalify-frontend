//synchronous action creators
export const setTopics = topics => {
    return {
        type: "SET_TOPICS",
        topics
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
