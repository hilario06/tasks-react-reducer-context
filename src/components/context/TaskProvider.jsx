import { useReducer } from "react";
import { TaskContext } from "./TaskContext"

const ADD_TASK = 'ADD_TASK';
const REMOTE_TASK = 'REMOTE_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';

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

export const TaskProvider = ({ children }) => {

    const [ tasks, dispatch ] = useReducer( taskReducer, [], init );

    return (
        <TaskContext.Provider value={{tasks, dispatch}}>
            { children }
        </TaskContext.Provider>
    )
}