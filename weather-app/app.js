const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else(
    geocode.geocode(address, (error, data) => {
        if (error) {
            return console.log(error)
        }
        weather.weather(data.latitude, data.longitude, data.location, (error, forecastData) => {
            if (error) {
                return console.log(error)

            }
            console.log(data.location)
            console.log(forecastData)
        })
    })
)