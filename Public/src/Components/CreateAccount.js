import React from 'react';
import axios from "axios"
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class CreateAccount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            nameError: '',
            phone: '',
            phoneError: '',
            email: '',
            emailError: '',
            age: 0,
            ageError: '',
            // username: '',
            // usernameError: '',
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
            // username: this.state.username,
            password: this.state.password,
        }

        await axios.post(accounts, user)
            .then((user) => { console.log(user) })
            .catch((error) => {

                if (error.response.data.errmsg) {
                    isError = true
                    console.log(isError)
                    serverError.emailError = 'email exists'
                }
                console.log(error.response.data.errmsg)
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
            nameError: '',
            phoneError: '',
            emailError: '',
            ageError: '',
            // usernameError: '',
            passError: '',
        }
        if (this.state.phone.length != 10) {
            isError = true
            errors.phoneError = 'Phone number must be 10 digit'
        }

        if (!this.state.email.includes('@')) { // να το αλλάξω!!!!!
            isError = true
            errors.emailError = 'invalid email'
        }

        if (this.state.age < 0) {
            isError = true
            errors.ageError = "Invalid age"
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
                name: '',
                nameError: '',
                phone: '',
                phoneError: '',
                email: '',
                emailError: '',
                age: 0,
                ageError: '',
                // username: '',
                // usernameError: '',
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
                        required
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Name"
                        helperText={this.state.nameError} /> <br />
                    <TextField
                        required
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        placeholder="Phone"
                        helperText={this.state.phoneError} /> <br />
                    <TextField
                        required
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Email"
                        helperText={this.state.emailError} /> <br />
                    <TextField
                        type="number"
                        required name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="Age"
                        helperText={this.state.ageError} /> <br />
                    {/* <TextField
                        required name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        placeholder="Username"
                        helperText={this.state.usernameError} /> <br /> */}
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

export default CreateAccount;