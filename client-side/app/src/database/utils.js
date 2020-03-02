
import axios from 'axios'

export const login = async (url, user) => {
    const userData = await axios.post(url, user)

    return userData.data.token
}

//examinations?sortBy=createdAt:desc

export const getExaminations = async () => {

    const url = 'http://localhost:3000/examinations?sortBy=createdAt:desc'

    const token = localStorage.getItem('token');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const examinations = await axios.get(url, config).then(response => {
        return response.data
    })

    return examinations
}





// export const dummyData = () => {
    //     axios.get('http://localhost:3000/test')
    //         .then(response => { console.log(response) })

    // }
