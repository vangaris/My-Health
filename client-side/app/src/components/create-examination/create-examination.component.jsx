import React from 'react'
import FormInput from '../form-input/form-input.component'
import './create-examination.style.scss'
import CustomButton from '../custom-button/custom-button.component'
import { submitExamination } from './utils.create-examination'

class CreateExamination extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            medical_examination: "",
            doctor: "",
            user: "",
            description: "",
            doc_for_receipe: "",
            doc_for_delivery: "",
            tokem: ''

        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const accesToken = await submitExamination(this.state)

        if (accesToken) {
            this.setState({
                medical_examination: this.state.medical_examination,
                doctor: this.state.doctor,
                user: this.state.user,
                description: this.state.description,
                doc_for_receipe: this.state.doc_for_receipe,
                doc_for_delivery: this.state.doc_for_delivery,
                token: localStorage.getItem('token')
            }, () => {
                console.log(this.state)
            })
        }

    }

    handleChange = event => {

        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        const { medical_examination, doctor, user, description, doc_for_receipe, doc_for_delivery, token } = this.state

        return (
            <div className="sign-in">
                <h2> Create an Examination </h2>
                <span>Please fill out the fields bellow </span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput type='test' name='medical_examination' value={medical_examination} onChange={this.handleChange} label={'Εξέταση'} required />
                    <FormInput type='text' name='doctor' value={doctor} handleChange={this.handleChange} label={'Γιατρός'} required />
                    <div className='buttons'>
                        <CustomButton type='submit'> Submit </CustomButton>
                    </div>
                </form>
            </div>

        )
    }
}

export default CreateExamination