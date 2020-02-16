
import axios from 'axios'

export const login = async (url, user) => {
    const userData = await axios.post(url, user)

    return userData.data.token
}





// export const dummyData = () => {
    //     axios.get('http://localhost:3000/test')
    //         .then(response => { console.log(response) })

    // }
