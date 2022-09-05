import './App.css';
import { ToDoAdder } from './components/TodoAdder/ToDoAdder';
import { ToDoList } from './components/ToDoList/ToDoList';
import { useDispatch } from 'react-redux'
import { toggleTheme } from './store/theme/themeSlice';
import { loadedTodos } from './store/todos/todosSlice';


function App() {

  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
    console.log(toggleTheme());
  }

  const handleLoadClick = async (e) => {
    await dispatch(loadedTodos());
  }
 
  

  return (
    <div>
      <header>
        <button onClick={handleChangeTheme}>Change theme</button>
        <button onClick={handleLoadClick}>Load todos</button>
      </header>
      <ToDoAdder />
      <ToDoList />
    </div>
  );
}

export default App;
