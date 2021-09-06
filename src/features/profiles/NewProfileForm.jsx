import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// gives the item a generated id
import { nanoid } from '@reduxjs/toolkit'

import { newProfile } from './profileSlice'

const NewProfileForm = () => {
    const [first_name, setFirst_Name] = useState('')
    const [last_name, setLast_Name] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDob] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')

    const dispatch = useDispatch()

    const onFirstNameChange = e => setFirst_Name(e.target.value)
    const onLastNameChange = e => setLast_Name(e.target.value)
    const onEmailChange = e => setEmail(e.target.value)
    const onImageChange = e => setImage(e.target.value)
    const onGenderChange = e => setGender(e.target.value)
    const onDobChange = e => setDob(e.target.value)
    const onPhoneChange = e => setPhone(e.target.value)
    const onCityChange = e => setCity(e.target.value)
    const onStateChange = e => setState(e.target.value)

    const onSaveProfile = () => {
        if (first_name && last_name && email && image && gender && dob && phone && city && state) {
            dispatch(
                newProfile({
                    id: nanoid(),
                    first_name,
                    last_name,
                    email,
                    image, 
                    gender,
                    dob,
                    phone,
                    city,
                    state
                })
            )
            setFirst_Name('')
            setLast_Name('')
            setEmail('')
            setImage('')
            setGender('')
            setDob('')
            setPhone('')
            setCity('')
            setState('')
        }
    }

    return (
        <div className='newProfile-container'>
            <h3>Create new profile.</h3>
            <form>
                <label htmlFor="profileFirstName">First Name</label>
                <input
                    type="text"
                    id='profileFirstName'
                    name='profileFirstName'
                    value={first_name}
                    onChange={onFirstNameChange}
                />
                <br/>
                <label htmlFor='profileLastName'>Last Name</label>
                <input 
                    type='text'
                    id='profileLastName'
                    name='profileLastName'
                    value={last_name}
                    onChange={onLastNameChange}
                />
                <br/>
                <label htmlFor='profileEmail'>Email</label>
                <input 
                    type='email'
                    id='profileEmail'
                    name='profileEmail'
                    value={email}
                    onChange={onEmailChange}
                />
                <br/>
                <label htmlFor='profileImage'>Image</label>
                <input 
                    type='text'
                    id='profileImage'
                    name='profileImage'
                    value={image}
                    onChange={onImageChange}
                />
                <br/>
                <label htmlFor='profileGender'>Gender</label>
                <input 
                    type='text'
                    id='profileGender'
                    name='profileGender'
                    value={gender}
                    onChange={onGenderChange}
                />
                <br/>
                <label htmlFor='profileDob'>Date of Birth</label>
                <input 
                    type='text'
                    id='profileDob'
                    name='profileDob'
                    value={dob}
                    onChange={onDobChange}
                />
                <br/>
                <label htmlFor='profilePhone'>Phone</label>
                <input 
                    type='text'
                    id='profilePhone'
                    name='profilePhone'
                    value={phone}
                    onChange={onPhoneChange}
                />
                <br/>
                <label htmlFor='profileCity'>City</label>
                <input 
                    type='text'
                    id='profileCity'
                    name='profileCity'
                    value={city}
                    onChange={onCityChange}
                />
                <br/>
                <label htmlFor='profileState'>State</label>
                <input 
                    type='text'
                    id='profileState'
                    name='profileState'
                    value={state}
                    onChange={onStateChange}
                />
                <br/>
                <button type='button' onClick={onSaveProfile}>Save Profile</button>
            </form>
        </div>
    )

}

export default NewProfileForm;