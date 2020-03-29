import axios from 'axios'

export const submitExamination = async (examination) => {

    const url = 'http://localhost:3000/examinations'

    const token = localStorage.getItem('token');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const newExamination = await axios.posts(url, config, examination)

    return newExamination

}
