import { useContext, useState, useEffect  } from "react"
import { TaskContext } from "./context/TaskContext";
import { TaskItem } from "./TaskItem";
import { useForm } from '../hooks/useForm';

export const TaskList = () => {
  
  const { tasks } = useContext( TaskContext );
  const [list, setList] = useState([]);
  const { searchText, onInputChange } = useForm({ searchText: '' });

useEffect(() => {
  setList(tasks);
}, [tasks]);

useEffect(() => {
  setList(tasks.filter(task => task.nameTask.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())));
}, [searchText]);

const onSearchSubmit = (event) => {
  event.preventDefault();
  setList(tasks.filter(task => task.nameTask.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())));
}
  return (
    <>
      <form onSubmit={ onSearchSubmit } className="input-group mb-3">
        <input 
          type="text"
          placeholder="Search a hero"
          className="form-control"
          name="searchText"
          autoComplete="off"
          value={ searchText }
          onChange={ onInputChange }
        />

        <button className="btn btn-outline-primary">
          Search
        </button>
      </form>
      
      <ul className="list-group">
        {
            list.map( task => (
                <TaskItem 
                  key={ task.id } 
                  task={ task }
                />
            ))
        }
      </ul>
    </>
  )
}