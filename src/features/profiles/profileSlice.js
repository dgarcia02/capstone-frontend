import { createSlice } from '@reduxjs/toolkit'

let initialState = [
    { first_name: 'dulce', last_name: 'garcia', email: 'dulcegarcia05.21@gmail.com', image: '.jpeg', gender: 'female', dob: '05/21/1997', phone: '9567407419', city: 'Laredo', state: 'TX' },
    { first_name: 'giovanni', last_name: 'garcia', email: 'example@gmail.com', image: '.jpeg', gender: 'male', dob: '05/20/2002', phone: '9567751085', city: 'Laredo', state: 'TX' }
 ]

export const profileSlice = createSlice({
    name: 'profile', 
    initialState,
    reducers: {}
})

export default profileSlice.reducer;