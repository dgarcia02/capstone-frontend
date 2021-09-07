import { createSlice } from '@reduxjs/toolkit'
import { userAPISlice } from './userSlice'

const initialState = {
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // when you click on logout, it will return to no user
        logout: () => initialState,
    },
    extraReducers: (build) => {
        build
            .addMatcher(userAPISlice.endpoints.login.matchPending, (state, action) => {
                console.log('pending', action);
            })
            .addMatcher(userAPISlice.endpoints.login.matchFulfilled, (state, action) => {
                console.log('fulfilled', action);
            })
            .addMatcher(userAPISlice.endpoints.login.matchRejected, (state, action) => {
                console.log('rejected', action);
            })
    },
})

export const { logout } = authSlice.actions

export default authSlice.reducer
