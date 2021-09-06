import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import isLoggedReducer from '../features/isLogged/isLoggedSlice';
import profileReducer from '../features/profiles/profileSlice';
import newUserReducer from '../features/userAuth/newUserSlice';
import { showsApiSlice } from '../api/shows/shows-api-slice';

// can pass in all reducers in this object
export const store = configureStore({
    // key names will define the state
    reducer: {
        counter: counterReducer,
        isLogged: isLoggedReducer,
        profile: profileReducer,
        newUser: newUserReducer,
        [showsApiSlice.reducerPath]: showsApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(showsApiSlice.middleware);
    }
})


