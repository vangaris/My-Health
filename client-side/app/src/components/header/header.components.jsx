import React from 'react'
import './header.style.scss'

import { Link } from 'react-router-dom'

const Header = ({ currentToken }) => (
    <div className="header">

        <div className="options">
            <Link to="/">
                My Examinations
            </Link>

            {
                currentToken == null ? (
                    <div className='option'> Sign in </div>
                ) : (
                        <Link className='option' onClick={() => localStorage.removeItem('token')} to='/sign-up-sign-in'> log out</Link>)
            }

        </div>

    </div>
)

export default Header