import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const selectTodos = (state) => state.todos.todos;

const RequestStatus = {
    idle: 'idle',
    pendibng: 'pending',
    error: 'error',
}

const initialState = {
    todos: [
        { id: Date.now(), title: 'Learn React', completed: true },
        { id: Date.now() + 1, title: 'Learn Redux', completed: false },
        { id: Date.now() + 2, title: 'Build something fun!', completed: false }
    ],
    status: RequestStatus.idle,
    error: null,
}

export const loadedTodos = createAsyncThunk('todos/loadedTodos', async (_, { rejectWithValue }) => {
    try {
        //https://jsonplaceholder.typicode.com/todos
        const response = await axios.get('https://js3ewrsdficode.com/todos');
        console.log(response);
        return response.data;
    }
    catch (error) { return rejectWithValue(error) }
})

// export const loadedTodos = createAsyncThunk('todos/loadedTodos', async () => {
//     try {
//         //https://jsonplaceholder.typicode.com/todos
//         const response = await axios.get('https://jфываываcode.com/todos');
//         console.log(response);
//         return response.data;
//     }
//     catch (error) { console.log(1) }

// })

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
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadedTodos.pending, (state, action) => {
                state.status = RequestStatus.pendibng;
            })
            .addCase(loadedTodos.fulfilled, (state, action) => {
                debugger
                const todos = action.payload;
                state.todos.push(...todos);
                state.status = RequestStatus.idle;
            })
            .addCase(loadedTodos.rejected, (state, action) => {
                debugger
                state.error = action.error;
                state.status = RequestStatus.error;
                console.log('Error: ' + state.error.message);
                state.status = RequestStatus.idle;
                state.error = null;
            })
    }
})

export const { todoAdded, todoDeleted, todoToggled } = todosSlice.actions;

export default todosSlice.reducer;