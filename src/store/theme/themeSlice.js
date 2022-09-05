import { createSlice } from "@reduxjs/toolkit"

export const themeStates = {
    light: 'light',
    dark: 'dark',
}

const initialState = {
    theme: themeStates.light,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state, action) {
            // debugger
            if (state.theme === themeStates.light)
                state.theme = themeStates.dark;
            else
                state.theme = themeStates.light;
        },
    }
})

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;