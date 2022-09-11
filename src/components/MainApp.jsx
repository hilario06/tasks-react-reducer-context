import { TaskProvider } from './context/TaskProvider';
import { TaskList } from './TaskList';

export const MainApp = () => {
  return (
    <TaskProvider>
        <h2>LIST TASKS</h2>
        <TaskList />
    </TaskProvider>
  )
}