import React from 'react'
import './header.style.scss'
import { ReactComponent as Logo } from '../../assets/stethoscope.svg'

import { Link } from 'react-router-dom'

const Header = ({ currentUser }) => {
    console.log(currentUser)
    return (
        <div className="header">
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link className='option' to="/examinations">
                    Οι εξετάσεις μου
            </Link>
                <Link className='option' to="/createExamination">
                    Προσθήκη
            </Link>
            </div>
            <div className="top-right-menu">
                {
                    currentUser != null ? (<Link className='option-top-right' to="/myprofile">
                        Ο λογαρισμός μου
                    </Link>) :
                        (
                            null
                        )
                }

                {
                    currentUser != null ? (
                        <div className='option-top-right' onClick={() => localStorage.removeItem('token')}> Έξοδος </div>
                    ) : (

                            <Link className='option-top-right' to='/sign-up-sign-in'> Είσοδος </Link>)
                }
            </div>

        </div>
    )

}



export default Header