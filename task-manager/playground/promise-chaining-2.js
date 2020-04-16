const mongoose = require('mongoose')
require('../src/db/mongoose')
const Task = require('../src/models/task')


// "5e90452ab09dfc2750f2529a"
Task.findByIdAndDelete("5e90452ab09dfc2750f2529a").then((result)=>{
    console.log(result)
    return Task.countDocuments({completed:false})    
}).then((result)=>{
    console.log(result)    
}).catch((e)=>{
    console.log(e)    
})