import React from 'react';
import { useForm } from '../hooks/useForm';
import { useContext } from "react"
import { TaskContext } from "./context/TaskContext";

export const TaskAdd = () => {

	const { dispatch } = useContext( TaskContext );
	const { nameTask, onInputChange, onResetForm } = useForm({ nameTask: '' });

	const onFormSubmit = (event) => {
		event.preventDefault();
		dispatch({
			type: 'ADD_TASK',
			payload: {
				id: new Date().getTime(),
				nameTask: nameTask,
				done: false,
			}
		});
		onResetForm();
	}

	return (
		<form onSubmit={ onFormSubmit }>
            <input 
                type="text" 
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="nameTask"
                value={ nameTask }
                onChange={ onInputChange }
            />

            <button 
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
	)
}