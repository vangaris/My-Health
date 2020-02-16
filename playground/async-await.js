const add = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a < 0 || b < b) {
            return reject('Numbers must be non-Negatives')
        }
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () => {
    const sum = await add(1, 9)
    const sum2 = await add(sum, -90)
    const sum3 = await add(sum2, 900)
    return sum3
}

doWork().then((result) => {
    console.log(result)
}).catch((e) => {
    console.log('Error: ' + e)
})