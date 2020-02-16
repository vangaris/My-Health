require('../src/db/mongoose')
const User = require('../src/models/user')


// User.findByIdAndUpdate('5da219de456476085095f815', {
//     age: 32
// }).then((user) => {
//     console.log(user)
//     return User.countDocuments({
//         age: 32
//     })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAndCount = async (id, age) => {

    const update = await User.findByIdAndUpdate(id, {
        age
    })

    const count = await User.countDocuments({
        age
    })

    return ({
        update,
        count
    })

}

updateAndCount('5da219de456476085095f815', 45).then((result) => {
    console.log("Update: " + result['update'])
    console.log("Count: " + result['count'])
}).catch((e) => {
    console.log("error: " + e)
})