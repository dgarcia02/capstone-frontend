import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAPISlice = createApi({
    reducerPath: 'usersAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://intense-mountain-41648.herokuapp.com/api",
    }),
    endpoints: (build) => ({
        login: build.mutation({
            query: () => ({
                url: '/users/login',
                method: 'PUT',
                body,
            })
        }),
        fetchUsers: build.query({
            query: () => ({ url:'/users' }),
        }),
        addUser: build.mutation({
            query: (body) => ({
                url: '/users',
                method: 'POST',
                body,
            }),
        })
    })
})

export const { useFetchUsersQuery, useAddUserMutation } = userAPISlice;

export const { endpoints: { login }, } = userAPISlice;

export default userAPISlice;









// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// // create the thunk
//     // this accepts 3 parameters: type, payloadCreator, and options
//         // 1. type: string to generate additional action type constants
//         // 2. payloadCreator: callback function that returns a promise of an async logic
//         // 3. options: object containing some fields
// export const signUpUser = createAsyncThunk(
//     // this is the type
//     'user/signUpUser',
//     // this is the payloadCreator
//         // payloadCreator takes 2 arguments
//             // 1. arg: a single value; could be used for passing certain values like IDs
//             // 2. thunkAPI: object containing thunk methods
//     async({ username, password }, thunkAPI) => {
//         try {
//             const response = await fetch(
//                 "https://intense-mountain-41648.herokuapp.com/api/users",
//                 {
//                     method: 'POST',
//                     headers: {
//                         Accept: 'application/json',
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({
//                         username,
//                         password,
//                     }),
//                 }
//             )
//             let data = await response.json()
//             console.log('data', data)
                
//             // Error Messages
//             if (response.status === 200) {
//                 localStorage.setItem('token', data.token)
//                 return { ...data, username: username, password: password }
//             } else {
//                 return thunkAPI.rejectWithValue(data)
//             }
//         } catch (e) {
//             console.log('Error', e.response.data);
//             return thunkAPI.rejectWithValue(e.response.data)
//         }
//     }
//     // options go here
// )

// const initialState = {
//     username: '',
//     password: '',
//     // loading: 'idle',
//     isFetching: false,
//     isSuccess: false,
//     isError: false,
//     errorMessage: '',
// }

// // handle actions in reducers
// const userSlice = createSlice({
//     name: 'user', 
//     initialState,
//     reducers: {
//         newUser(state, action) {
//             state.push(action.payload)
//         },
//     },
//     extraReducers: {
//         [signUpUser.fulfilled]: (state, { payload }) => {
//             state.isFetching = false
//             state.isSuccess = true
//             state.password = payload.user.password
//             state.username = payload.user.username
//         },
//         [signUpUser.pending]: (state) => {
//             state.isFetching = true
//         }, 
//         [signUpUser.rejected]: (state, { payload  }) => {
//             state.isFetching = false
//             state.isError = true
//             state.errorMessage = payload.message
//         }
//     }
// })

// export const { newUser } = userSlice.actions

// export default userSlice.reducer;






// this is part of initial state in first example
// isFetching: false,
// isSuccess: false,
// isError: false,
// errorMessage: '',

// this is from the first example
// {
//     [signUpUser.fulfilled]: (state, { payload }) => {
//         state.isFetching = false
//         state.isSuccess = true
//         state.password = payload.user.password
//         state.username = payload.user.username
//     },
//     [signUpUser.pending]: (state) => {
//         state.isFetching = true
//     }, 
//     [signUpUser.rejected]: (state, { payload  }) => {
//         state.isFetching = false
//         state.isError = true
//         state.errorMessage = payload.message
//     }
// }



// this is from the 2nd example, it goes in extraReducers