"use strict"

const prompt = require('prompt-sync')()

class Task {
  constructor(title, description){
    this.title = title;
    this.description = description;
  }
  
}
  
const taskList = [];

// View Items
const viewTask = () => {
    console.log(`\n Todo List \n`)
  for (let i = 0; i < taskList.length; i++) {
    console.log(`${i + 1}  ${taskList[i].title} : ${taskList[i].description}`)
  }
  console.log(`\n`)
}

// Add Items 
const addTask = (title, description) => {
    title = prompt('Enter your task title : ');
    description = prompt('Enter your task description : ');
    console.log(taskList.push(new Task(title, description)))
    console.log(`Added Succesfully! \n`)

    viewTask()
}

// Remove Items
const removeTask = (title) => {
    viewTask()

    title = prompt('Enter title of task you would like to delete : ')

    const findTodo = (myTodo, title) =>{
        const index = myTodo.findIndex((todo, index) => {
            return todo.title.toLowerCase() === title.toLowerCase()
        })
        return index
    }

    const getId = findTodo(taskList, title)

    let ask = prompt('Are you sure ? ')
    ask = ask.toLowerCase()

    if (ask == 'yes' || ask == 'y') {
        console.log(taskList.splice(getId,1))
        console.log('Task Successfully Deleted! \n');
    }else {
        console.log('Cancelled! \n')
    }

    
    viewTask();
}

// Edit Items
const editTask = (title) => {
    viewTask()

    title = prompt('What would you like to change here : ')

    const findTodo = (myTodo, title) =>{
        const index = myTodo.findIndex((todo, index) => {
            return todo.title.toLowerCase() === title.toLowerCase()
        })
        return index
    }

    const getId = findTodo(taskList, title)

    let replaceTitle = prompt(`What would you like to replace ${title} with ? `)
    let replaceDescription = prompt(`Enter your new description : `)

    let replace = new Task(replaceTitle, replaceDescription)

    console.log(taskList.splice(getId,1,replace))
    console.log(`\n Update Successful! \n`)

    viewTask()
}

// Main

let main = () =>{
    console.log(`\nView \nAdd \nEdit \nDelete \nExit \n`)
    let askUser = prompt('What would you like to do ? ')
    askUser = askUser.toLowerCase();

    if(askUser == 'view'){
        viewTask()
        main()
    }
    else if(askUser == 'add') {
        addTask()
        main()
    }
    else if(askUser == 'delete') {
        removeTask()
        main()
    }
    else if(askUser == 'edit'){
        editTask()
        main()
    }
    else if(askUser == 'exit'){
        return
    }
    else {
        console.log('Invalid Input')
        main()
    }
}

main()