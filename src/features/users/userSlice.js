import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '0', name: 'Dulce Garcia', password: '123' },
    { id: '1', name: 'Gio', password: '123' },
]

const userSlice = createSlice({
    name: 'user', 
    initialState,
    reducers: {}
})

export default userSlice.reducer;