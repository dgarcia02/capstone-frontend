import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { username: 'Dulce Garcia', password: '123' },
    { username: 'Gio', password: '123' },
]

const newUserSlice = createSlice({
    name: 'user', 
    initialState,
    reducers: {}
})

export default newUserSlice.reducer;