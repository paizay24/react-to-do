import React, { useContext } from "react";
import Tasks from "./Tasks";
import TodoContext from "../context/TodoContext";

const TaskSection = () => {
  const { tasks, deleteTask, doneTask } = useContext(TodoContext);
  return (
    <>
      
      <div className=" flex flex-col gap-2 justify-center items-center mt-6">
      <div className=" flex justify-between gap-2">
        <h1 className="">Task List -{tasks.length}</h1>
        <h1>Done List -{tasks.filter((t) => t.isDone).length}</h1>
      </div>
        {tasks.map((task) => {
          return <Tasks key={task.id} task={task}  />;
        })}
      </div>
    </>
  );
};

export default TaskSection;
