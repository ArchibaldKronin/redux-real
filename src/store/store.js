import { configureStore } from '@reduxjs/toolkit';

import todosReducer from './todos/todosSlice';
import themeReducer from './theme/themeSlice';

const store = configureStore({
    reducer: {
        todos: todosReducer,
        theme: themeReducer,
    }
});

export default store;