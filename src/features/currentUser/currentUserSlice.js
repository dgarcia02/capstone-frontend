import { createSlice } from '@reduxjs/toolkit';

let initialState = false

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        logIn: (state) => {
            state.value = !value
        }
    }
})

export const { logIn } = currentUserSlice.actions

export default currentUserSlice.reducer;
