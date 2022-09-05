import logo from './logo.svg';
import './App.css';
import { ToDoAdder } from './components/TodoAdder/ToDoAdder';
import { ToDoList } from './components/ToDoList/ToDoList';

function App() {
  return (
    <div>
      <ToDoAdder />
      <ToDoList />
    </div>
  );
}

export default App;
