import React, { useReducer, useContex } from 'react';
import { useForm } from '../hooks/useForm';


const ADD_TASK = 'ADD_TASK';
const REMOTE_TASK = 'REMOTE_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';
// const SEARCH_TASK = 'SEARCH_TASK';
// state.filter(task => task.nameTask.toLocaleLowerCase().includes(action.payload))

const taskContext = React.createContext(null);

const init = () => {
    return [
		{
			id: 1234,
			done: false,
			nameTask: 'Aprender devise'
		},
		{
			id: 4567,
			done: true,
			nameTask: 'Aprender pundit'
		}
	]
}

const taskReducer = (state, action) => {
	switch(action.type){
		case ADD_TASK:
			return [ ...state, action.payload ];
		case REMOTE_TASK:
			return state.filter(task => task.id !== action.payload);
		case TOGGLE_TASK:
			return state.map(task => task.id === action.payload ? {...task, done: !task.done} : task);
		default:
			return state;
	}
}

export const TaskApp = () => {
	const [ tasks, dispatch ] = useReducer( taskReducer, [], init );
	const { searchText, onInputChange } = useForm({ searchText: '' });
	
	const onNewTask = (payload) => {
		dispatch({
			type: ADD_TASK,
			payload
		})
	}

	const onToggleTask = (id) => {
		dispatch({
			type: TOGGLE_TASK,
			payload: id
		})
	}

	const onDeleteTask = (id) => {
		dispatch({
			type: REMOTE_TASK,
			payload: id
		})
	}

	const onSearchSubmit = (event) => {
		event.preventDefault();
		console.log(searchText)
		/*dispatch({
			type: SEARCH_TASK,
			payload: searchText
		})*/
	}
	return (
		<taskContext.Provider value={{tasks, dispatch}}>
	      	<div>
				<h2>LIST TASKS</h2>
				<form onSubmit={ onSearchSubmit }>
	              <input 
	                type="text"
	                placeholder="Search a hero"
	                className="form-control"
	                name="searchText"
	                autoComplete="off"
	                value={ searchText }
	                onChange={ onInputChange }
	              />

	              <button className="btn btn-outline-primary mt-1">
	                Search
	              </button>
	            </form>
				<ul className="list-group">
			        {
			            tasks.map( task => (
			                <li key={task.id} className="list-group-item d-flex justify-content-between">
						        <span 
						          className={`align-self-center ${ (task.done) ? 'text-decoration-line-through' : '' }`}
						          onClick={() => onToggleTask(task.id)}
						        >
						          { task.nameTask }
						        </span>
						        <button 
						          className="btn btn-danger"
						          onClick={() => onDeleteTask(task.id)}
						        >Borrar</button>
						    </li>
			            ))
			        }
			    </ul>
			    
			</div>
	    </taskContext.Provider>
		
	)
}