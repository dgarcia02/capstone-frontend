// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { build } from 'vite';

// const User = {
//     username: string, 
//     password: string
// }

// const Profile = {
//     first_name: string,
//     last_name: string,
//     email: string, 
//     image: string, 
//     gender: string, 
//     dob: string,
//     phone: string,
//     city: string,
//     states: string,
//     // userId
// }

// // RTK Query
// export const usersApiSlice = createApi({
//     reducerPath: 'usersApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://intense-mountain-41648.herokuapp.com/api'
//     }),
//     endpoints: (builder) => ({
//         getUser: builder.query({
//             query(){
//                 return `${baseUrl}/users`
//             }
//         })
//     })
// })

// export const { useGetUserQuery } = usersApiSlice;

// export default usersApiSlice;