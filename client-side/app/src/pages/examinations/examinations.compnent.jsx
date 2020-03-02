import React from 'react'
import { getExaminations } from '../../database/utils'
import ExaminationCard from '../../components/examinations-card/examinations-card.component'


class Examinations extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            examinations: [{}]
        }
    }

    geturrentUser = async () => {
        const userExaminations = await getExaminations()

        if (userExaminations) {
            this.setState({
                examinations: userExaminations
            }, () => {
                console.log(this.state)
            })
        }
    }

    componentDidMount() {
        this.geturrentUser()
    }

    render() {
        const { examinations } = this.state

        return (
            <div>
                {examinations.map(({ _id, ...examinationsProps }) => {
                    return <ExaminationCard key={_id} {...examinationsProps} />
                })}
            </div>
        )
    }
}
export default Examinations