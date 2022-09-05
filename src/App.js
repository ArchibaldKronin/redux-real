import logo from './logo.svg';
import './App.css';
import { ToDoAdder } from './components/TodoAdder/ToDoAdder';
import { ToDoList } from './components/ToDoList/ToDoList';
import { useDispatch } from 'react-redux'
import { toggleTheme } from './store/theme/themeSlice';


function App() {

  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
    console.log(toggleTheme());
  }

  return (
    <div>
      <header>
        <button onClick={handleChangeTheme}>Change theme</button>
      </header>
      <ToDoAdder />
      <ToDoList />
    </div>
  );
}

export default App;
