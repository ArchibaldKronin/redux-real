import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [
        { id: Date.now(), title: 'Learn React', completed: true },
        { id: Date.now()+1, title: 'Learn Redux', completed: false },
        { id: Date.now()+2, title: 'Build something fun!', completed: false }
    ],
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdded: {
            reducer(state, action) {
                const { newTodo } = action.payload;
                state.todos.push(newTodo);
            },
            prepare(title) {
                const newTodo = {
                    id: Date.now(),
                    title,
                    completed: false,
                }
                return {
                    payload: { newTodo }
                }
            }
        },
        todoDeleted(state, action) {
            state.todos = state.todos.filter(elem => elem.id !== action.payload);
        },
        todoToggled(state, action) {
            state.todos = state.todos.map(elem => {
                if (elem.id === action.payload)
                    return { ...elem, completed: !elem.completed }
                return elem;
            })
        },
    }
})

export const { todoAdded, todoDeleted, todoToggled } = todosSlice.actions;

export default todosSlice.reducer;