import { createSlice, nanoid } from '@reduxjs/toolkit'

let initialState = [
    { first_name: 'dulce', last_name: 'garcia', email: 'dulcegarcia05.21@gmail.com', image: '.jpeg', gender: 'female', dob: '05/21/1997', phone: '9567407419', city: 'Laredo', state: 'TX' },
    { first_name: 'giovanni', last_name: 'garcia', email: 'example@gmail.com', image: '.jpeg', gender: 'male', dob: '05/20/2002', phone: '9567751085', city: 'Laredo', state: 'TX' }
 ]

export const profileSlice = createSlice({
    name: 'profile', 
    initialState,
    reducers: {
        newProfile(state, action) {
            state.push(action.payload)
        },
        prepare(first_name, last_name, email, image, gender, dob, phone, city, states, userId) {
            return {
                payload: {
                    // id: nanoid(),
                    first_name, 
                    last_name, 
                    email, 
                    image, 
                    gender, 
                    dob, 
                    phone, 
                    city,
                    states,
                    user: userId
                }
            }
        }
    }
})

export const { newProfile, editProfile } = profileSlice.actions

export default profileSlice.reducer;


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