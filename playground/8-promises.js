const doWorkdPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('Unable to fectch data')
        // resolve([1,7,4,7])
    }, 2000)
})

doWorkdPromise.then((result)=>{
    console.log('Success',result)
    
}).catch((error)=>{
    console.log('Error:', error)
    
})