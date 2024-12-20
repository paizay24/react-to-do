import React from 'react'
import Tasks from './Tasks'

const TaskSection = ({tasks,deleteTask}) => {
  return (
    <div className=' flex flex-col gap-2 justify-center items-center mt-6'>
        {tasks.map((task, index) => {
          return <Tasks key={index} task={task} deleteTask={deleteTask}/>
        })}
        
    </div>
  )
}

export default TaskSection