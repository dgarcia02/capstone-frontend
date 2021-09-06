import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import currentUserSlice from '../features/currentUser/currentUserSlice';
import profileReducer from '../features/profiles/profileSlice';
import newUserReducer from '../features/userAuth/newUserSlice';
import { showsApiSlice } from '../api/services/shows-api-slice';

// can pass in all reducers in this object
export const store = configureStore({
    // key names will define the state
    reducer: {
        counter: counterReducer,
        currentUser: currentUserSlice,
        profile: profileReducer,
        newUser: newUserReducer,
        [showsApiSlice.reducerPath]: showsApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(showsApiSlice.middleware);
    }
})


