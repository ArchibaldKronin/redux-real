import React, { useState } from 'react'
import { useInput } from '../../hooks/useInput';
import { addTodo } from '../../store/todos/todosSlice';
import { useDispatch } from 'react-redux'

export const ToDoAdder = () => {

    const { value: text, onChange, reset } = useInput('');

    const dispatch = useDispatch();

    const handleAddToDo = () => {
        dispatch(addTodo(text));
        reset();
    }

    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <button onClick={handleAddToDo} disabled={text === ''}>Add Task</button>
        </div>
    )
}
