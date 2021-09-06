import React, { useState } from 'react'
import { useDispatch, selectProfileById } from 'react-redux'
import { useHistory } from './profileSlice'

import { editProfile } from './profileSlice'

const EditProfileForm = ({ match }) => {
    const { postId } = match.params

    // this finds the profile by id to edit
    const profile = useSelector(state => selectProfileById(profile => profile.id === profile.Id)
    )

    // setting the use state as profile.'#' to call the current state
    const [first_name, setFirst_Name] = useState(profile.first_name)
    const [last_name, setLast_Name] = useState(profile.last_name)
    const [email, setEmail] = useState(profile.email)
    const [image, setImage] = useState(profile.image)
    const [gender, setGender] = useState(profile.gender)
    const [dob, setDob] = useState(profile.dob)
    const [phone, setPhone] = useState(profile.phone)
    const [city, setCity] = useState(profile.city)
    const [states, setStates] = useState(profile.states)

    const dispatch = useDispatch()
    const history = useHistory()

    const onFirstNameChange = e => setFirst_Name(e.target.value)
    const onLastNameChange = e => setLast_Name(e.target.value)
    const onEmailChange = e => setEmail(e.target.value)
    const onImageChange = e => setImage(e.target.value)
    const onGenderChange = e => setGender(e.target.value)
    const onDobChange = e => setDob(e.target.value)
    const onPhoneChange = e => setPhone(e.target.value)
    const onCityChange = e => setCity(e.target.value)
    const onStatesChange = e => setState(e.target.value)

    const onSaveProfile = () => {
        if (first_name && last_name && email && image && gender && dob && phone && city && states) {
            dispatch(
                editProfile({
                    id: postId,
                    first_name,
                    last_name,
                    email,
                    image, 
                    gender,
                    dob,
                    phone,
                    city,
                    states
                })
            )
                history.push(`/posts/${postId}`)
        }
    }

    return (
        <div className='newProfile-container'>
            <h3>Edit profile.</h3>
            <form>
                <label htmlFor="profileFirstName">First Name</label>
                <input
                    type="text"
                    id='profileFirstName'
                    name='profileFirstName'
                    placeholder={profile.first_name}
                    value={first_name}
                    onChange={onFirstNameChange}
                />
                <br/>
                <label htmlFor='profileLastName'>Last Name</label>
                <input 
                    type='text'
                    id='profileLastName'
                    name='profileLastName'
                    placeholder={profile.last_name}
                    value={last_name}
                    onChange={onLastNameChange}
                />
                <br/>
                <label htmlFor='profileEmail'>Email</label>
                <input 
                    type='email'
                    id='profileEmail'
                    name='profileEmail'
                    placeholder={profile.email}
                    value={email}
                    onChange={onEmailChange}
                />
                <br/>
                <label htmlFor='profileImage'>Image</label>
                <input 
                    type='text'
                    id='profileImage'
                    name='profileImage'
                    placeholder={profile.image}
                    value={image}
                    onChange={onImageChange}
                />
                <br/>
                <label htmlFor='profileGender'>Gender</label>
                <input 
                    type='text'
                    id='profileGender'
                    name='profileGender'
                    placeholder={profile.gender}
                    value={gender}
                    onChange={onGenderChange}
                />
                <br/>
                <label htmlFor='profileDob'>Date of Birth</label>
                <input 
                    type='text'
                    id='profileDob'
                    name='profileDob'
                    placeholder={profile.dob}
                    value={dob}
                    onChange={onDobChange}
                />
                <br/>
                <label htmlFor='profilePhone'>Phone</label>
                <input 
                    type='text'
                    id='profilePhone'
                    name='profilePhone'
                    placeholder={profile.phone}
                    value={phone}
                    onChange={onPhoneChange}
                />
                <br/>
                <label htmlFor='profileCity'>City</label>
                <input 
                    type='text'
                    id='profileCity'
                    name='profileCity'
                    placeholder={profile.city}
                    value={city}
                    onChange={onCityChange}
                />
                <br/>
                <label htmlFor='profileStates'>State</label>
                <input 
                    type='text'
                    id='profileStates'
                    name='profileStates'
                    placeholder={profile.states}
                    value={states}
                    onChange={onStatesChange}
                />
                <br/>
                <button type='button' onClick={onSaveProfile}>Save Profile</button>
            </form>
        </div>
    )

}

export default NewProfileForm;