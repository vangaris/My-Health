const add = (a, b) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(1, 4).then((sum => {
//     console.log(sum)

//     add(sum, 10).then((sum2) => {
//         console.log(sum2)
//     })
// })).catch((e) => {
//     console.log(e)
// })

add(10, 10).then((sum) => {
    console.log(sum)

    return add(sum, 10)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})