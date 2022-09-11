import React from 'react';
import { useForm } from '../hooks/useForm';

export const TaskAdd = ({ onNewTask }) => {
	// const state = useContext(myContext);
	// const { user } = useContext( UserContext );
	const { nameTask, onInputChange, onResetForm } = useForm({ nameTask: '' });

	const onFormSubmit = (event) => {
		event.preventDefault();
		return onNewTask({
			id: new Date().getTime(),
			nameTask: nameTask,
			done: false,
		})
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