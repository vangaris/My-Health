import React from 'react'
import './header.style.scss'
import { ReactComponent as Logo } from '../../assets/stethoscope.svg'

import { Link, withRouter } from 'react-router-dom'


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
        console.log(this.props.currentUser)
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
                    {
                        this.props.currentUser != null ? (<Link className='option' to="/myprofile">
                            {this.props.currentUser.name}
                        </Link>) :
                            (
                                null
                            )
                    }

                    {
                        this.props.currentUser != null ? (
                            <div className='option' onClick={() => {
                                this.props.logOut()


                            }}> Εξοδος </div>
                        ) : (
                                <Link className='option' to='/sign-up-sign-in'> Είσοδος </Link>)
                    }
                </div>
            </div>
        )
    }


}



export default Header