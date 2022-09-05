import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { themeStates } from '../../store/theme/themeSlice';
import { todoDeleted, todoToggled } from '../../store/todos/todosSlice';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import styles from './ToDoList.module.css'

export const ToDoList = () => {

    const toDoListArray = useSelector((state) => state.todos.todos);
    const theme = useSelector(state => state.theme.theme)

    const dispatch = useDispatch();

    const handleToggleChange = (id) => {
        return () => {
            dispatch(todoToggled(id));
        }
    }

    const handleDelete = (id) => {
        return () => {
            dispatch(todoDeleted(id));
        }
    }

    console.log(toDoListArray, theme);
    return (
        <ul className={theme === themeStates.dark ? styles.toDoListdark : ''}>
            {toDoListArray.map(toDoItem => {
                return <ToDoItem key={toDoItem.id} toDoItem={toDoItem} onDelete={handleDelete} onToggle={handleToggleChange} />
            })}
        </ul>
    )
}
