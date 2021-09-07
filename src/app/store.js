import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import currentUserSlice from '../features/currentUser/currentUserSlice';
import { showsApiSlice } from '../api/services/shows-api-slice';
import { userAPISlice } from '../features/userAuth/userSlice';
import { profileApiSlice } from '../features/profiles/profileSlice';
import { setupListeners } from '@reduxjs/toolkit/query'

// can pass in all reducers in this object
export const store = configureStore({
    // key names will define the state
    reducer: {
        currentUser: currentUserSlice,
        [showsApiSlice.reducerPath]: showsApiSlice.reducer,
        [userAPISlice.reducerPath]: userAPISlice.reducer,
        [profileApiSlice.reducerPath]: profileApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(showsApiSlice.middleware, userAPISlice.middleware, profileApiSlice.middleware);
    }
})

setupListeners(store.dispatch)

