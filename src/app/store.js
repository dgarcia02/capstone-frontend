import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import isLoggedReducer from '../features/isLogged/isLoggedSlice';
import profileReducer from '../features/profiles/profileSlice';
import userReducer from '../features/users/userSlice';

// can pass in all reducers in this object
export const store = configureStore({
    // key names will define the state
    reducer: {
        counter: counterReducer,
        isLogged: isLoggedReducer,
        profile: profileReducer,
        user: userReducer,
    }
})
