import React from 'react'

export const ToDoItem = ({ toDoItem, onToggle, onDelete }) => {
    return (
        // <li>
        //     <input type="checkbox" checked={toDoItem.completed} onChange={onToggle(toDoItem.id)} />
        //     <button onClick={onDelete(toDoItem.id)}>Delete</button>
        //     {toDoItem.text}
        // </li>
        <li>
        <button onClick={onDelete(toDoItem.id)}>Delete</button>
        {toDoItem.title}
    </li>
    )
}
