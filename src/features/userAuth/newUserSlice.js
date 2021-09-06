import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { username: 'Dulce Garcia', password: '123' },
    { username: 'Gio', password: '123' },
]

const newUserSlice = createSlice({
    name: 'user', 
    initialState,
    reducers: {
        newUser(state, action) {
            state.push(action.payload)
        },
    }
})

export const { newUser } = newUserSlice.actions

export default newUserSlice.reducer;