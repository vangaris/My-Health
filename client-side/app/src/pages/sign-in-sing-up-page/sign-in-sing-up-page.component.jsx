import React from 'react'
import './sign-in-sing-up-page.style.scss'
import Singin from '../../components/sign-in/sign-in.component'
import SingUp from '../../components/sing-up/sing-up.compnent'



const SignInAndSingUpPage = () => (
    <div className="sing-in-sign-up-page">
        <Singin />
        <SingUp />
    </div>
)

export default SignInAndSingUpPage