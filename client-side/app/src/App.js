import React from 'react';
import './App.css';
import MyExaminations from './pages/my-examinations/my-examinations.component';
import SingInSignUp from './pages/sign-in-sing-up-page/sign-in-sing-up-page.component.jsx';
import Header from './components/header/header.components';
import { dummyData, getExaminations } from './database/utils'
import Examinations from './pages/examinations/examinations.compnent'
import HomePage from './pages/homapege/homepage.component'
import CreateExamination from './components/create-examination/create-examination.component'
import MyProfile from './components/myProfile/myProfile.component'
import axios from 'axios'


import { Switch, Route } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  getLoggedInUserDetails = async () => {
    const url = 'http://localhost:3000/users/me'

    const token = localStorage.getItem('token');

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const profile = await axios.get(url, config)

    this.setState({
      currentUser: profile.data
    }, () => {
      console.log(this.state)
    })

  }

  logOut = () => {

    localStorage.removeItem('token')

    this.setState({
      currentUser: null
    })
  }

  componentDidMount() {

    this.getLoggedInUserDetails()


    getExaminations()

  }



  render() {
    const { currentUser } = this.state
    return (
      <div className='App'>
        <Header logOut={this.logOut} currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/examinations' component={Examinations} />
          <Route path='/sign-up-sign-in' component={SingInSignUp} />
          <Route path='/createExamination' component={CreateExamination} />
          <Route path='/myprofile' component={MyProfile} />
        </Switch>
      </div>

    )
  }
}


export default App;
