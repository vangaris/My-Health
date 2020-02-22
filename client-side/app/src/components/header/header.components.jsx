import React from 'react'
import './header.style.scss'

import { Link } from 'react-router-dom'

const Header = props => (
    <div className="header">

        <div className="options">
            <Link to="/">
                My Examinations
            </Link>

            {
                props.token == null ? (
                    <div className='option' onClick={() => localStorage.removeItem()}> SIGNG OUT </div>
                ) : (
                        <Link className='option' to='/sign-up-sign-in'> SIGN IN </Link>)
            }

        </div>

    </div>
)

export default Header