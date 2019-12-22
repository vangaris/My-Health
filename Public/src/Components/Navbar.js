import React from 'react';
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand" > My Health </Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item" >
                            <Link className="nav-link" to='/users/login'>Login</Link>
                        </li>
                        <li className="navbar-item" >
                            <Link className="nav-link" to='/examinations'>Examinations</Link>
                        </li>
                        <li className="navbar-item" >
                            <Link className="nav-link" to='/users'>create Account</Link>
                        </li>
                    </ul>
                </div>
            </nav>


        );
    }
}

export default Navbar;
