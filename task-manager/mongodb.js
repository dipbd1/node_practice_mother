// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {
    MongoClient,
    ObjectID
} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id);
// console.log(id.getTimestamp())



MongoClient.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)

    // db.collection('users').findOne({name:'Dip'}, (error, user)=> {
    //     if(error)
    //     {
    //         console.log('Unable to fetch')
    //     }
    //     console.log(user);

    // })

    // db.collection('users').find({age:27}).toArray((error, users)=>{
    //     console.log(users);

    // })

    // db.collection('users').find({age:27}).count((error, count)=>{
    //     console.log(count);

    // })

    // db.collection('tasks').findOne({_id : new ObjectID("5e8e6b57e53a3812d834af8c")}, (error, task)=> {
    //     if (error)
    //     {
    //         console.log("Unable to fetch data");
    //     }
    //     console.log(task)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5e8d3b5cc369a52ff055eb9c")
    // }, {
    //     $inc: {
    //         age: -1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('users').deleteMany({
        name: 'Jen'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})