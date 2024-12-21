import React, { useState } from "react";

const CreateTask = ({ addTask }) => {
  const [task, setTask] = useState("");
  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };

  const addingTask = () => {
    const newTask={
      id:Date.now(),
      taskName:task,
      isDone:false
    }
    if(task === "") return;
    addTask(newTask);
    setTask("");
  };
  const onKeyPressHandler = (e) => {
    if (e.key === "Enter") {
      addingTask();
    }
  };
  return (
    <div className="flex items-center justify-center gap-2 mt-4 max-w-sm mx-auto">
      <div>
        <input
          type="text"
          value={task}
          onChange={onChangeHandler}
          onKeyDown={onKeyPressHandler}
          placeholder="Enter to do lists"
          className="border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-900 py-2 px-3 rounded-md"
        />
      </div>
      <button
        onClick={addingTask}
        type="button"
        className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:outline-none"
      >
        ADD
      </button>
    </div>
  );
};

export default CreateTask;
