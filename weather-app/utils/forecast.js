const request = require('request')
const geocode = require('./geocode')
const weather = require('./weather')



const forecast = (address, callback)=>{
    geocode.geocode(address, (error, data) => {
        // console.log("Error: ",error)
        // console.log("Data: ",data)
        weather.weather(data.latitude, data.longitude, data.location, (error, data)=>{
            callback(error,data)
        })
    })
}


module.exports = {
    forecast: forecast
}