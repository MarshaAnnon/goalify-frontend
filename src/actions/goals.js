import { resetGoalForm } from './goalForm'
import { getTopics } from './topics'
//synchronous action creators
export const clearGoals = () => {
    return {
        type: "CLEAR_GOALS",
    }
}

//asynchronous action creators
export const createGoal = (goalData, history) => {
    return dispatch => {
        const sendableGoalData = {
            goal_name: goalData.goalName,
            goal_description: goalData.goalDescription,
            goal_timeline: goalData.goalTimeline,
            topic_id: goalData.topicId
        }
        return fetch("http://localhost:3000/api/v1/goals", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"   
            },
            body: JSON.stringify(sendableGoalData)
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(resetGoalForm())
                dispatch(getTopics())
                history.push(`/topics/${goalData.topicId}/goals/${resp.data.id}`)
            }
        })  
    }
}

export const deleteGoal = (goalId, topicId, history) => {
    return dispatch => {
        return fetch(`http://localhost:3000/api/v1/goals/${goalId}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"   
            }
        })
            .then(resp => resp.json())
            .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(getTopics())
                history.push(`/topics/${topicId}`)
            }
        })
    }
}
