import React from 'react';
import axios from "axios"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            loginError: '',
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

    loginValidation = async () => {
        let isError = false
        const loginUser = 'http://localhost:3000/users/login'

        const errors = {
            loginError: ''
        }

        const LoingCredentials = {
            email: this.state.email,
            password: this.state.password,
        }

        await axios.post(loginUser, LoingCredentials)
            .then((res) => {
                localStorage.setItem('jwt', res.data.token)
            })
            .catch((error) => {
                console.log(error.data)
                isError = true
                errors.loginError = 'invalid email or password'
                console.log(errors)
                if (isError) {
                    this.setState({
                        ...this.state,
                        ...errors
                    })

                    console.log(this.state)
                }
            })

        return isError
    }

    onSubmit(event) {
        event.preventDefault()

        this.loginValidation().then((isError) => {
            if (isError) {
                return false
            }
            this.setState({
                email: '',
                password: '',
                loginError: '',
            })
        })
    }

    render() {
        return (
            <div className="container">
                <form method="post" name="form" onSubmit={this.onSubmit} >
                    <TextField
                        required
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Email" /> <br />
                    <TextField
                        required
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="Password"
                        helperText={this.state.loginError} /> <br /><br />
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