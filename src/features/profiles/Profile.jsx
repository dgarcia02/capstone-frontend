import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// CSS and Bootstrap
import '../../App.css'
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

// API
import profileApiSlice, { useFetchProfilesQuery } from './profileApiSlice'

const Profile = () => {
    const dispatch = useDispatch()
    // this gets access to the profiles state
    const profilesApi = useSelector(state => state.profilesApi)

    const { data, error, isLoading } = useFetchProfilesQuery()

    return (
        <div className='profile-container'>
            { error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : data ? (
                <div className='profiles'>
                    { data.map((profile) => {
                        return (
                            <div className="singleProfile" key={profile.id} id={profile.id}>
                                <img src={profile.image.url} alt="Profile Image" />
                                <h3>{profile.first_name} {profile.last_name}</h3>
                                <h4>{profile.email}</h4>
                                <h5>{profile.gender}</h5>
                                <h5>{profile.dob}</h5>
                                <h6>{profile.phone}</h6>
                                <h6>{profile.city}, {profile.state}</h6>
                                <Button>Edit Profile</Button>
                            </div>
                        )
                    }) }
                </div>
            ): null }
        </div>
    )
}

export default Profile;