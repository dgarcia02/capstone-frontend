import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const profileApiSlice = createApi({
    reducerPath: 'profilesApi',
    baseQuery: fetchBaseQuery({
        baseUrl:"https://intense-mountain-41648.herokuapp.com/api",
    }),
    endpoints: (build) => ({
        fetchProfiles: build.query({
            query: () => ({ url:'/profiles' }),
        }),
        addProfile: build.mutation({
            query: (body) => ({
                url: `/profiles`,
                method: 'POST',
                body,
            }),
        })
    })
})

export const { useFetchProfilesQuery, useAddProfileMutation } = profileApiSlice;

export default profileApiSlice;


// // nanoid gives a random generated id 
// import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
// // check this to make sure it's from the client
// // import { client } from '../../api/client'

// const initialState = {
//     posts: {},
//     status: 'idle',
//     error: null
// }

// // createAsyncThunk takes 2 arguments
//     // a string that will be used as the prefix for generated action types
//     // a "payload creator" that returns a Promise or rejected Promise with error
// export const fetchProfile = createAsyncThunk('profile/fetchProfile', async() => {
//     const response = await client.get('/')
//     return response.profile
// })

// export const profileSlice = createSlice({
//     name: 'profile', 
//     initialState,
//     reducers: {
//         newProfile(state, action) {
//             state.push(action.payload)
//         },
//         prepare(first_name, last_name, email, image, gender, dob, phone, city, states, userId) {
//             return {
//                 payload: {
//                     // id: nanoid(),
//                     first_name, 
//                     last_name, 
//                     email, 
//                     image, 
//                     gender, 
//                     dob, 
//                     phone, 
//                     city,
//                     states,
//                     user: userId
//                 }
//             }
//         }
//     },
//     extraReducers: builder => {
//         builder
//             .addCase(fetchProfile.pending, (state, action) => {
//                 state.status = 'loading'
//             })
//             .addCase(fetchProfile.fulfilled, (state, action) => {
//                 const newEntities = {}
//                 action.payload.forEach(profile => {
//                     newEntities[profile.id] = profile
//                 })
//                 state.entities = newEntities
//                 state.status = 'idle'
//             })
//     }
// })

// export const { newProfile, editProfile } = profileSlice.actions

// export default profileSlice.reducer;

// export const selectProfileById = (state, profileId) => state.profiles.find(profile => profile.id === profile.Id)

// editProfile(state, action) {
//     const { id, first_name, last_name, email, image, gender, dob, phone, city, states } = action.payload
//     const existingProfile = state.find(profile => profile.id === id)
//     if (existingProfile) {
//         existingProfile.first_name = first_name
//         existingProfile.last_name = last_name
//         existingProfile.email = email
//         existingProfile.image = image
//         existingProfile.gender = gender
//         existingProfile.dob = dob
//         existingProfile.phone = phone
//         existingProfile.city = city
//         existingProfile.state = states
//     }
// }