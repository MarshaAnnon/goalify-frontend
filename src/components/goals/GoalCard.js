import React from 'react';
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { deleteGoal } from '../../actions/goals'

const GoalCard = ({ goal, topic, history, deleteGoal }) => {
    return (
        <div>
            <br />
            <br />
            < div className="goal-circle">
                <h3>{ topic.attributes.name }</h3>
                <br />
                { goal ? <>
                <h5>Goal Name:<br />
                    <p>{ goal.goal_name }</p>
                </h5>
                <h5>Goal Description:<br />
                    <p>{ goal.goal_description }</p>
                </h5> 
                <h5>Goal Timeline:<br />
                    <p>{ goal.goal_timeline }</p>
                </h5>
                </> : null }
                <br />
                <br />
                <br />
                <div className="goal-button">
                    <Button 
                        variant="light" 
                        onClick={() => deleteGoal(goal.id, topic.id,  history)}
                        >Delete this goal
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { deleteGoal })(GoalCard);
