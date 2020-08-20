import React, { Component } from 'react'

class TopicsIncrementor extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        } 
    }

    handleOnClick = () => {
        this.setState ( (state) => {
            return { count: state.count +1 }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOnClick}>{this.state.count}</button>
            </div>
        )
    }
}

export default TopicsIncrementor
