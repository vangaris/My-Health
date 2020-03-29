import React from 'react'
import './header.style.scss'

import { Link } from 'react-router-dom'

const Header = ({ currentToken }) => (
    <div className="header">
        <div className="options">

            <Link className='option' to="/">
                Home
            </Link>

            <Link className='option' to="/examinations">
                Examinations
            </Link>

            <Link className='option' to="/createExamination">
                Add Exam
            </Link>

            {
                currentToken == null ? (
                    <Link className='option' to='/sign-up-sign-in'> Sign in </Link>
                ) : (
                        <div className='option' onClick={() => localStorage.removeItem('token')} to='/sign-up-sign-in'> log out</div>)
            }

        </div>

    </div>
)

export default Header