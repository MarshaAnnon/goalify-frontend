import React from 'react';
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import { getCurrentUser } from './actions/currentUser'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import Topics from './components/topics/Topics'
import TopicCard from './components/topics/TopicCard'
import GoalCard from './components/goals/GoalCard'
import NewTopicFormWrapper from './components/topics/NewTopicFormWrapper'
import EditTopicFormWrapper from './components/topics/EditTopicFormWrapper'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render (){
    const { loggedIn, topics} = this.props
    return (
      <div className="App">
        { loggedIn ? <NavBar location={this.props.location} /> : null }
        <Switch>
          <Route exact path='/' render={() => loggedIn ? <Topics /> : <Home />} />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/logout' component={ Logout } />
          <Route exact path='/signup' component={ Signup } />
          <Route exact path='/topics' component={ Topics } />
          <Route exact path='/topics/new' component={ NewTopicFormWrapper } />

          <Route 
            exact path='/topics/:id' 
            render={ props => {
            const topic = topics.find(topic => topic.id === props.match.params.id)
            return <TopicCard topic={topic}{...props} />
          }} />

          <Route 
            exact path='/topics/:id/edit' 
            render={ props => {
            const topic = topics.find(topic => topic.id === props.match.params.id)
            return <EditTopicFormWrapper topic={topic}{...props} />
          }} />
        
          <Route 
            exact path='/topics/:topicId/goals/:id'
            render={ props => { 
            const topic = topics.find(topic => topic.id === props.match.params.topicId)
            const goal = topic.attributes.goals.find(goal => goal.id.toString() === props.match.params.id)
            return <GoalCard goal={goal}{...props} topic={topic}/>
           
          }} />

          {/* <Route exact path='/topics/:topicId/goals/:id/edit' 
            render={ props => {
            const topic = topics.find(topic => topic.id === props.match.params.topicId)
            const goal = topic.attributes.goals.find(goal => goal.id.toString() === props.match.params.id)
            return <></>
          }} /> */}
        </Switch>
      </div>
    );
  }
}
  
const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser,
    topics: state.topics  
  }
}
  

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
