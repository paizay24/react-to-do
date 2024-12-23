import React, { useState } from "react";
import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import TaskSection from "./components/TaskSection";
import TodoProvider from "./context/TodoProvider";
import Counting from "./components/Counting";

const App = () => {
  return (
    // <TodoProvider>
    //   <Header />
    //   <CreateTask />
    //   <TaskSection />
    // </TodoProvider>
    <Counting/>
  );
};

export default App;
