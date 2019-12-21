import React from 'react';
import axios from "axios"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            usernameError: '',
            password: '',
            passError: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }

    serverSideValidationCreateAcount = async () => {
        let isError = false
        const accounts = 'http://localhost:3000/users'

        const serverError = {
            emailError: ''
        }

        const user = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            age: this.state.age,
            username: this.state.username,
            password: this.state.password,
        }

        await axios.post(accounts, user)
            .then((user) => { console.log(user) })
            .catch((error) => {
                console.log(error.response.data.errmsg)
                if (error.response.data.errmsg) {
                    isError = true
                    console.log(isError)
                    serverError.emailError = 'email exists'
                }

                if (isError) {
                    this.setState({
                        ...this.state,
                        ...serverError
                    })
                }
            })
        return isError
    }

    clientSidevalidationCreateAccount = () => {
        let isError = false
        const errors = {
            usernameError: '',
            passError: '',
        }
        if (this.state.phone.length != 10) {
            isError = true
            errors.phoneError = 'Phone number must be 10 digit'
        }

        if (!this.state.email.includes('@')) { // να το αλλάξω!!!!!
            isError = true
            errors.emailError = 'requires valid email'
        }

        if (isError) {
            this.setState({
                ...this.state,
                ...errors
            })
        }
        return isError
    }

    onSubmit(event) {
        event.preventDefault()
        let clientSideError = this.clientSidevalidationCreateAccount()

        if (clientSideError) {
            return false
        }
        this.serverSideValidationCreateAcount().then((isError) => {
            if (isError) {
                return false
            }
            this.setState({
                username: '',
                usernameError: '',
                password: '',
                passError: '',
            })
        })
    }

    render() {
        return (
            <div className="container">
                <form method="post" name="form" onSubmit={this.onSubmit} >
                    <TextField
                        required name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        placeholder="Username"
                        helperText={this.state.usernameError} /> <br />
                    <TextField
                        required name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="Password"
                        helperText={this.state.passError} /> <br /><br />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        value="Submit"> Submit
                    </Button>
                </form>
            </div>
        );
    }
}

export default Login;