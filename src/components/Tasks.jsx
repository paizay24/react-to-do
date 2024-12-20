import React from "react";

const Tasks = ({ task, deleteTask }) => {
  return (
    <div className="flex justify-between items-center border border-black p-5 rounded-lg w-[400px]">
      <p>{task}</p>
      <button
        onClick={() => deleteTask(task)}
        className="border text-sm border-black p-3 bg-red-700 text-white rounded-md hover:bg-red-800"
      >
        Delete
      </button>
    </div>
  );
};

export default Tasks;

