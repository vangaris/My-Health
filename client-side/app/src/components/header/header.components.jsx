import React from 'react'
import './header.style.scss'

import { Link } from 'react-router-dom'

const Header = props => (
    <div className="header">

        <div className="options">
            <Link to="/">
                My Examinations
            </Link>
            <Link className="option" to='/sign-up-sign-in'> Sign in
            </Link>

        </div>

    </div>
)

export default Header