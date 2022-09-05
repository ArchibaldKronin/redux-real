import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToDoItem } from '../ToDoItem/ToDoItem';
import styles from './ToDoList.module.css'

export const ToDoList = () => {
    const toDoListArray = useSelector((state) => state.todos.todos);

    const handleToggleChange = (id) => {
        return
    }

    const handleDelete = (id) => {
        return
    }

    console.log(toDoListArray);
    return (
        <ul>
            {toDoListArray.map(toDoItem => {
                return <ToDoItem key={toDoItem.id} toDoItem={toDoItem} onDelete={handleDelete} onToggle={handleToggleChange} />
            })}
        </ul>
    )
}
