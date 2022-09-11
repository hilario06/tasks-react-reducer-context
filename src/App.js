import './App.css';
import {TaskApp} from './components/TaskApp';
import {MainApp} from './components/MainApp';

function App() {
  return (
    <div className="container"> 
        <TaskApp />
        <MainApp />    
    </div>
  );
}

export default App;
