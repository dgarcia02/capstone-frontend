import React, { useState } from 'react'
import { useDispatch, selectProfileById } from 'react-redux'
import { useHistory } from './profileSlice'

// CSS and Bootstrap
import Button from 'react-bootstrap/Button';

// Components
import { editProfile } from './profileApiSlice'

const EditProfileForm = ({ match }) => {
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
                    <Form.Select name='gender' onChange={handleChange}>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="non-binary">Non-Binary</option>
                        <option value="prefer not to say">Prefer not to say</option>
                    </Form.Select>
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