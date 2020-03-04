const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo(){
        this.tasks.forEach(function(x){
            console.log(x.completed)
            if(x.completed == false)
            {
                console.log(x.text + " need to do")
            }
        })
    }
}

console.log(tasks.getTasksToDo())