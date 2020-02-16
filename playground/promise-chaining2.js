require('../src/db/mongoose')

const Task = require('../src/models/task')


// Task.findByIdAndRemove('5da2f88326559610f8d43f6c').then((task) => {

//         if (!task) {
//             console.log('no task')
//         }

//         //console.log(task)

//         return Task.find({
//             completed: false
//         })

//     }).then((result) => {
//         console.log(result)
//         return Task.countDocuments({
//             completed: false
//         })
//     }).then((count) => {
//         console.log(count)
//     })

//     .catch((e) => {
//         console.log(e)
//     })

const deleteTaskAndCount = async (id, completed) => {

    const task = await Task.findByIdAndDelete(id)
    const incopleteTask = await Task.countDocuments({
        completed
    })

    return ({
        task,
        incopleteTask
    })
}

deleteTaskAndCount('5da23773dc575903bc93fd69', false).then((result) => {
    console.log("task: " + result.task)
    console.log("count: " + result.incopleteTask)
}).catch((e) => {
    console.log("e: " + e)
})