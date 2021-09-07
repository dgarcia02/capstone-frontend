import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import currentUserSlice from '../features/currentUser/currentUserSlice';
import profileReducer from '../features/profiles/profileSlice';
// import userSlice from '../features/userAuth/userSlice';
import { showsApiSlice } from '../api/services/shows-api-slice';
import { userAPISlice } from '../features/userAuth/userSlice';
import { setupListeners } from '@reduxjs/toolkit/query'

// can pass in all reducers in this object
export const store = configureStore({
    // key names will define the state
    reducer: {
        currentUser: currentUserSlice,
        profile: profileReducer,
        // user: userSlice.reducer,
        [showsApiSlice.reducerPath]: showsApiSlice.reducer,
        [userAPISlice.reducerPath]: userAPISlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(showsApiSlice.middleware, userAPISlice.middleware);
    }
})

setupListeners(store.dispatch)

