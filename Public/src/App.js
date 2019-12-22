import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CreateAccount from './Components/CreateAccount'
import Login from './Components/Login'
import Examinations from './Components/Examinations'
import Navbar from './Components/Navbar'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      person: {
        name: '',
        lastname: 'a',
      }
    }
  }

  componentDidMount() {

    fetch("http://localhost:3000/test")
      .then(response => response.json())
      .then(res => {
        console.log(res)
        this.setState({ person: { name: 'giannis', lastname: 'takis' } })


      });

  }

  render() {
    return (

      <Router>
        <br />
        <Navbar />
        <Route path="/users" exact component={CreateAccount} />
        <Route path="/users/login" component={Login} />
        <Route path="/examinations" component={Examinations} />
      </Router>

    );
  }
}

export default App;
