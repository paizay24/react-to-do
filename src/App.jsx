import React, { useState } from 'react'
import Header from './components/Header'
import CreateTask from './components/CreateTask'
import TaskSection from './components/TaskSection'


const App = () => {
  const [tasks,setTasks] =useState([
    "Complete the report by Monday",
    "Attend the team meeting at 10 AM",
    "Update the project documentation",
    "Review the pull requests on GitHub",
    "Prepare slides for the presentation"
  ]) ;

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (task) => { 
    setTasks(tasks.filter((t) => t !== task));
  }
  
  return (
    <>
    <Header/>
    <CreateTask addTask={addTask}/>
    <TaskSection tasks={tasks} deleteTask={deleteTask}/>
    </>
  )
}

export default App