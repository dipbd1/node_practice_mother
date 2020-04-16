const mongoose = require('mongoose')
require('../src/db/mongoose')

const User = require('../src/models/user')

// ObjectId("5e959675813ff60cb8e014a8")


User.findByIdAndUpdate("5e96c05cbe7ac2031029b318", {age: 1}).then((user)=>{
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result)=>{console.log(result)
}).catch((e)=>{
    console.log(e)
    
})