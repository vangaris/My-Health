import React from 'react';
import { getToken } from '../helper/jwt'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const jwt = getToken()
        console.log(jwt)
        if (!jwt) {
            return alert('no')
        }

        alert('Yes')
    }

    render() {
        return (
            <div>
                <p>Home</p>
            </div>

        );
    }
}

export default Home;