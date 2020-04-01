import React from 'react'
import './header.style.scss'
import { ReactComponent as Logo } from '../../assets/stethoscope.svg'

import { Link } from 'react-router-dom'

class Header extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            user: this.props.currentUser
        }
    }

    componentWillReceiveProps({ currentUser }) {
        this.setState({ ...this.state, currentUser })
    }


    render() {
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
                        this.props.currentUser != null ? (<Link className='option-top-right' to="/myprofile">
                            Λογαριασμός
                        </Link>) :
                            (
                                null
                            )
                    }

                    {
                        this.props.currentUser != null ? (
                            <div className='option-top-right' onClick={() => this.props.logOut()}> Έξοδος </div>
                        ) : (
                                <Link className='option-top-right' to='/sign-up-sign-in'> Είσοδος </Link>)
                    }
                </div>

            </div>
        )
    }


}



export default Header