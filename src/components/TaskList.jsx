import { useContext } from "react"
import { TaskContext } from "./context/TaskContext";
import { TaskItem } from "./TaskItem"

export const TaskList = () => {
  
  const { tasks } = useContext( TaskContext );

  return (
    <ul className="list-group">
        {
            tasks.map( task => (
                <TaskItem 
                  key={ task.id } 
                  task={ task }
                />
            ))
        }
    </ul>
  )
}