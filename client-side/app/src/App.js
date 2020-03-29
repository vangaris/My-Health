import React from 'react';
import './App.css';
import MyExaminations from './pages/my-examinations/my-examinations.component';
import SingInSignUp from './pages/sign-in-sing-up-page/sign-in-sing-up-page.component.jsx';
import Header from './components/header/header.components';
import { dummyData, getExaminations } from './database/utils'
import Examinations from './pages/examinations/examinations.compnent'
import HomePage from './pages/homapege/homepage.component'
import CreateExamination from './components/create-examination/create-examination.component'

import { Switch, Route } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentToken: null
    }
  }

  componentDidMount() {
    // const token = localStorage.getItem('token')
    // this.setState({
    //   currentToken: token
    // }, () => {
    //   console.log(this.state)
    // })


    getExaminations()

  }



  render() {
    const { currentToken } = this.state
    return (
      <div>
        <Header currentToken={currentToken} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/examinations' component={Examinations} />
          <Route path='/sign-up-sign-in' component={SingInSignUp} />
          <Route path='/createExamination' component={CreateExamination} />
        </Switch>
      </div>

    )
  }
}


export default App;
