import React from 'react'
import './header.style.scss'
import { ReactComponent as Logo } from '../../assets/stethoscope.svg'

import { Link } from 'react-router-dom'

const Header = ({ currentToken }) => (
    <div className="header">
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className='option' to="/examinations">
                Examinations
            </Link>
            <Link className='option' to="/createExamination">
                Add Exam
            </Link>
            <Link className='option' to="/myprofile">
                My Profile
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