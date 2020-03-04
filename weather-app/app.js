const request = require('request')
const url = 'https://api.darksky.net/forecast/89373d218ce94a22b2f363ddb1d7e3d9/37.8267,-122.4233?units=si'
const mapBoxURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGlwYmQxIiwiYSI6ImNrN2Q3OTJscjA3aGMzZXFoZm4yc3pvaDQifQ.B_AOMXtDURxE0UNLm__J3g"
const mapBoxToken = "pk.eyJ1IjoiZGlwYmQxIiwiYSI6ImNrN2Q3OTJscjA3aGMzZXFoZm4yc3pvaDQifQ.B_AOMXtDURxE0UNLm__J3g"

request({
    url: url,
    json: true
}, (error, response) => {
    if (error) {
        console.log("Unable to connect ot Weather Service")
    } else if (response.body.error) {
        console.log(response.body.error)
    } else {
        console.log(response.body.daily.data[0].summary)
        console.log("Current temp: " + response.body.currently.temperature)
        console.log("Raining Probability: " + response.body.currently.precipProbability)
    }
    // console.log(response)
})

request({
    url: mapBoxURL,
    json: true
}, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longtitude = response.body.features[0].center[0]
    if (error) {
        console.log("Unable to Connect Geocoder Service")
    } else if (response.body.features.length===0) {
        console.log(response.body.error)
    } else {
        console.log(response.body.features[0].text)
        console.log(response.body.features[0].center[0])
        console.log(response.body.features[0].center[1])
    }
})