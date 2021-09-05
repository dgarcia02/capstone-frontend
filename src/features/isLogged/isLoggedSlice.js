import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

let initialState = false

export const isLoggedSlice = createSlice({
    name: 'isLogged',
    initialState,
    reducers: {
        logIn: (state) => {
            !state.value
        }
    }
})

export default isLoggedSlice.reducer;
