import React from 'react';
import './App.css';
import MyExaminations from './pages/my-examinations/my-examinations.component';
import SingInSignUp from './pages/sign-in-sing-up-page/sign-in-sing-up-page.component.jsx';
import Header from './components/header/header.components'

import { Switch, Route } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={MyExaminations} />
          <Route path='/sign-up-sign-in' component={SingInSignUp} />
        </Switch>
      </div>

    )
  }
}


export default App;
