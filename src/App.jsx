import React, { useState } from 'react'
import Header from './components/Header'
import CreateTask from './components/CreateTask'
import TaskSection from './components/TaskSection'


const App = () => {
  const [tasks,setTasks] =useState([
    {
      id : 1,
      taskName : "Complete the report by Monday",
      isDone: false
    },{
      id: 2,
      taskName: "Prepare slides for the presentation",
      isDone: false
    },
    {
      id: 3,
      taskName: "Attend the team meeting at 3 PM",
      isDone: false
    },
    {
      id: 4,
      taskName: "Submit the project proposal",
      isDone: false
    },
    {
      id: 5,
      taskName: "Review the new design mockups",
      isDone: false
    }
    
  ]) ;

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => { 
    setTasks(tasks.filter((t) => t.id !== id));
  }

  const doneTask = (id) => { 
    setTasks(tasks.map((t)=>t.id === id ? {...t,isDone:!t.isDone}:t));
  }
  
  return (
    <>
    <Header/>
    <CreateTask addTask={addTask}/>
    <TaskSection tasks={tasks} deleteTask={deleteTask} doneTask={doneTask}/>
    </>
  )
}

export default App