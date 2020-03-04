const fs = require('fs')
// const book = {
//     title: "Ego is a enemy",
//     author: "Ryan Holiday",
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)
// console.log(data.author)

const dataBuffer = fs.readFileSync('1-json.json')
const dataString = dataBuffer.toString()
const dataJSON = JSON.parse(dataString)

dataJSON.name =  'Dip'
dataJSON.age = '27'

console.log("Name: "+ dataJSON.name + "\nAge: "+ dataJSON.age+"\nPlanet: "+ dataJSON.planet)