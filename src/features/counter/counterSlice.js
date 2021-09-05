import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        // Actions
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            // this is the manual input in the textbox
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const incrementAsync = (amount) =>
    (dispatch) => {
        setTimeout(() => {
            dispatch(incrementByAmount(amount))
        }, 1000);
    }

export const selectCount = state => state.counter.value

export default counterSlice.reducer

// console.log(counterSlice.actions.increment());

// exampe of how these actions are called
    // {type: "counter/increment"}
