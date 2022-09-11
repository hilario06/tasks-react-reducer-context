import { useContext } from "react"
import { TaskContext } from "./context/TaskContext";

export const TaskItem = ({ task }) => {
  const { dispatch } = useContext( TaskContext );

  const onToggleTask = (id) => {
    dispatch({
      type: 'TOGGLE_TASK',
      payload: id
    })
  }
  
  const onDeleteTask = (id) => {
    dispatch({
      type: 'REMOTE_TASK',
      payload: id
    })
  }

  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
          className={`align-self-center ${ (task.done) ? 'text-decoration-line-through' : '' }`}
          onClick={ () => onToggleTask( task.id ) }
        >
          { task.nameTask }
        </span>
        <button 
          className="btn btn-danger"
          onClick={ () => onDeleteTask( task.id ) }
        >Borrar</button>
    </li>
  )
}