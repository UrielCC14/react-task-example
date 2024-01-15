import { createContext,useState,useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  
  const [tasks, setTask] = useState([]); // Task List

  useEffect(() => {
    setTask(data);
  }, []);

  const createTask= (task)=>{
    setTask([...tasks,{
      id:tasks.length,
      tittle :task.tittle,
      description: task.description
    }])
  }

  const deleteTask = (taskId)=>{
    setTask(tasks.filter(task => task.id !== taskId))
  }

  return (

    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>
        {props.children}
    </TaskContext.Provider>

  )
}