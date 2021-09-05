import React from 'react'
import { useSelector } from 'react-redux'

const ProfileList = () => {
    const profiles = useSelector(state => state.profile)

    const renderedProfiles = profiles.map(profile => (
        <div className='profiles' key={profile.id}>
            <h3>Name: {profile.first_name} {profile.last_name}</h3>
            <h4>Email: {profile.email}</h4>
            <h4>{profile.image}</h4>
            <h4>Gender: {profile.gender}</h4>
            <h4>Date of Birth: {profile.dob}</h4>
            <h4>Phone: {profile.phone}</h4>
            <h4>City: {profile.city}</h4>
            <h4>State: {profile.state}</h4>
        </div>
    ))

    return (
        <div className='profile-container'>
            <h2>Profiles</h2>
            {renderedProfiles}
        </div>
    )
}

export default ProfileList;