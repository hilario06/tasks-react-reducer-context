import { TaskProvider } from './context/TaskProvider';
import { TaskList } from './TaskList';
import { TaskAdd } from './TaskAdd';

export const MainApp = () => {
  return (
    <TaskProvider>
        <h2>LIST TASKS</h2>
        <TaskList />
        <div className='mt-3'>
          <TaskAdd />
        </div>
    </TaskProvider>
  )
}