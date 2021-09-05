import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// can pass in all reducers in this object
export default configureStore({
    // key names will define the state
    reducer: {
        counter: counterReducer
    }
})
