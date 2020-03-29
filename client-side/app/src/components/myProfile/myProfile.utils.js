import axios from 'axios'

export const getProfile = async () => {

    const url = 'http://localhost:3000/users/me'

    const token = localStorage.getItem('token');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const profile = await axios.get(url, config)

    return profile

}
