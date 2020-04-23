const number = 2

var numberRange = []
const powerNumber = function (a, b) {
    const ansNumber = Math.pow(a, b)
    return new Promise((resolve, reject) => {
        resolve(ansNumber)
    })
}

const ansFunction = async function (a, b){
    const ans = await powerNumber(a, b)
    return ans
}

for(i=1; i<=40; i++){
    numberRange.push(i)
}

numberRange.forEach( async (element) => {
    console.log( await ansFunction(number, element))
})
