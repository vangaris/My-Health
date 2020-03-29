import React from 'react'
import { getExaminations } from '../../database/utils'
import ExaminationCard from '../../components/examinations-card/examinations-card.component'


class Examinations extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            examinations: [{}],
            isLoading: true
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

    componentDidMount() {
        this.geturrentUser()
    }

    render() {
        const { examinations, isLoading } = this.state
        return (
            <div className='examinations'>
                <h3> Εξετάσεις σας για το επόμενο χρονικό διάστημα: </h3>
                {examinations.map(({ _id, ...examinationsProps }, index) => {
                    return <ExaminationCard key={index} {...examinationsProps} id={_id} isLoading={isLoading} />
                })}
            </div>
        )
    }
}
export default Examinations