import React from 'react';
import { checkAuth } from '../Helper/jwt'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }



    componentDidMount() {

    }

    render() {

        if (checkAuth()) {
            return (
                <div>
                    you have to login
                </div>
            )
        }
        return (
            <div>
                <p>Home</p>
            </div>

        );
    }
}

export default Home;