import * as React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// API
import { useFetchProfilesQuery, useAddProfileMutation } from './profileSlice';

const NewProfileForm = () => {
    const dispatch = useDispatch()

    const emptyProfile = {
        first_name: '',
        last_name: '',
        email: '',
        image: '', 
        gender: '',
        dob: '',
        phone: '',
        city: '',
        state: '',
    }

    const [profile, setProfile] = useState(emptyProfile)
    const [addProfile, { isLoading }] = useAddProfileMutation()


    // const users = useSelector(state => state.currentUser)

    const handleChange = (event) => {
        setProfile({ ...profile, [event.target.name]: event.target.value })
    }

    const handleAddProfile = () => addProfile(profile).then(() => setProfile(emptyProfile))

    return (
        <div className='newProfile-container'>
            <h3>Create new profile.</h3>
            <Form
                className='newProfileForm'
                onSubmit={handleAddProfile}
            >
                <Form.Group className='mb-3'>
                    <Form.Label>First Name</Form.Label>    
                    <Form.Control name='first_name' type="text" onChange={handleChange}/>
                </Form.Group>
                
                <Form.Group className='mb-3'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name='last_name' type='text' onChange={handleChange}/>
                </Form.Group>
                
                <Form.Group className='mb-3' >
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' type='email' onChange={handleChange}/>
                </Form.Group>
                <br/>
                <Form.Group className='mb-3' >
                    <Form.Label>Image</Form.Label>
                    <Form.Control name='image' type='text' onChange={handleChange}/>
                </Form.Group>
                <br/>
                <Form.Group className='mb-3' >
                    <Form.Label>Gender</Form.Label>
                    <Form.Control name='gender' type='text' onChange={handleChange}/>
                </Form.Group>
                <br/>
                <Form.Group className='mb-3' >
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control name='dob' type='date' onChange={handleChange}/>
                </Form.Group>
                <br/>
                <Form.Group className='mb-3' >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control name='phone' type='text' onChange={handleChange}/>
                </Form.Group>
                <br/>
                <Form.Group className='mb-3' >
                    <Form.Label>City</Form.Label>
                    <Form.Control name='city' type='text' onChange={handleChange}/>
                </Form.Group>
                <br/>
                <Form.Group className='mb-3' >
                    <Form.Label>State</Form.Label>
                    <Form.Control name='state' type='text' onChange={handleChange}/>
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">
                   { isLoading ? 'Creating...' : 'Create Profile' }
                </Button>
            </Form>
        </div>
    )


}

export default NewProfileForm;




// this was the first try I did, it only works locally
    // // Profile states
    // const [first_name, setFirst_Name] = useState('')
    // const [last_name, setLast_Name] = useState('')
    // const [email, setEmail] = useState('')
    // const [image, setImage] = useState('')
    // const [gender, setGender] = useState('')
    // const [dob, setDob] = useState('')
    // const [phone, setPhone] = useState('')
    // const [city, setCity] = useState('')
    // const [states, setStates] = useState('')
    // const [userId, setUserId] = useState('')

    // const onFirstNameChange = e => setFirst_Name(e.target.value)
    // const onLastNameChange = e => setLast_Name(e.target.value)
    // const onEmailChange = e => setEmail(e.target.value)
    // const onImageChange = e => setImage(e.target.value)
    // const onGenderChange = e => setGender(e.target.value)
    // const onDobChange = e => setDob(e.target.value)
    // const onPhoneChange = e => setPhone(e.target.value)
    // const onCityChange = e => setCity(e.target.value)
    // const onStatesChange = e => setStates(e.target.value)

// const onSaveProfile = () => {
//     if (first_name && last_name && email && image && gender && dob && phone && city && states) {
//         dispatch(
//             newProfile({
//                 // id: nanoid(),
//                 first_name,
//                 last_name,
//                 email,
//                 image, 
//                 gender,
//                 dob,
//                 phone,
//                 city,
//                 states,
//                 userId
//             })
//         )
//         setFirst_Name('')
//         setLast_Name('')
//         setEmail('')
//         setImage('')
//         setGender('')
//         setDob('')
//         setPhone('')
//         setCity('')
//         setStates('')
//     }
// }