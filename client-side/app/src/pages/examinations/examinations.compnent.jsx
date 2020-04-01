import React from 'react'
import { getExaminations } from '../../database/utils'
import ExaminationCard from '../../components/examinations-card/examinations-card.component'
import './examinations.style.scss'
import CustomButton from '../../components/custom-button/custom-button.component'


class Examinations extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            examinations: [{}],
            isLoading: true,
            completed: false
        }
    }

    geturrentUser = async () => {
        const userExaminations = await getExaminations()

        if (userExaminations) {
            this.setState({
                examinations: userExaminations,
                isLoading: false
            }, () => {
                console.log(this.state)
            })
        }
    }

    handleExaminationFilter = () => {
        this.setState({
            completed: !this.state.completed
        }, console.log(this.state))
    }

    componentDidMount() {
        this.geturrentUser()
    }

    render() {
        const { completed, examinations, isLoading } = this.state
        return (
            <div className='containerExaminations'> {completed ? (<div className='filter'><CustomButton onClick={() => this.handleExaminationFilter()}> Εκρεμμούν </CustomButton></div>)
                : (<div className='filter'> <CustomButton onClick={() => this.handleExaminationFilter()}> Ολοκληρωμένες </CustomButton></div>)}
                <div className='examinations'>
                    {completed ? (examinations.filter(({ completed }) => completed).map(({ _id, ...examinationsProps }, index) => {
                        return <ExaminationCard key={index} {...examinationsProps} id={_id} isLoading={isLoading} />
                    }))
                        : (
                            examinations.filter(item => !item.completed).map(({ _id, ...examinationsProps }, index) => {
                                return <ExaminationCard key={index} {...examinationsProps} id={_id} isLoading={isLoading} />
                            })
                        )}
                </div>
            </div>
        )
    }
}
export default Examinations