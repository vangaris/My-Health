import axios from 'axios'

export const updateExamination = async (examination, id) => {

    const url = `http://localhost:3000/examinations/${id}`
    console.log(url)

    const token = localStorage.getItem('token');

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json; charset=utf-8'
        }
    }
    console.log(config)
    const data = await axios.patch(url, { completed: examination }, config)
    console.log(data)
}

export const deleteExamination = async (id) => {

    const url = `http://localhost:3000/examinations/${id}`

    const token = localStorage.getItem('token');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    await axios.delete(url, config)




}
