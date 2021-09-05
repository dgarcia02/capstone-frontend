import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import isLoggedReducer from '../features/isLogged/isLoggedSlice';

// can pass in all reducers in this object
export const store = configureStore({
    // key names will define the state
    reducer: {
        counter: counterReducer,
        isLogged: isLoggedReducer,
    }
})

