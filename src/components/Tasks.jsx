import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

const Tasks = ({ task:{id,taskName,isDone}}) => {
  const {deleteTask,doneTask} = useContext(TodoContext) ;
  const handleDone = () => {
    doneTask(id);
  }
  return (
    <div className="flex justify-between items-center border border-black p-5 rounded-lg w-[400px]">
      <div className=" flex items-center gap-2">  
        <input onChange={handleDone} type="checkbox" className=" size-4" />
      <p className={`${isDone && "line-through"}`}>{taskName}</p>
      </div>
      <button
        onClick={() => deleteTask(id)}
        className="border text-sm border-black p-3 bg-red-700 text-white rounded-md hover:bg-red-800"
      >
        Delete
      </button>
    </div>
  );
};

export default Tasks;

