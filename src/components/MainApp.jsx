import { TaskProvider } from './context/TaskProvider';
import { TaskList } from './TaskList';
import { TaskAdd } from './TaskAdd';

export const MainApp = () => {
  return (
    <TaskProvider>
        <h2>LISTA DE TAREAS</h2>
        <div className='mb-3'>
          <TaskList />
        </div>
        <TaskAdd />
    </TaskProvider>
  )
}