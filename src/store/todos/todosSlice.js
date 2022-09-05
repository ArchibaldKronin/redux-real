import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [
        { id: 0, title: 'Learn React', completed: true },
        { id: 1, title: 'Learn Redux', completed: false },
        { id: 2, title: 'Build something fun!', completed: false }
    ],
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: {
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
        }
    }
})

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;