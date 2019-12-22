import React from 'react';
import { checkAuth } from '../Helper/jwt'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!checkAuth()) {
            return (
                <Login />
            )
        }
        return (
            <Login />
        );
    }
}

export default Home;