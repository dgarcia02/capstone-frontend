import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

const initialState = false

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
