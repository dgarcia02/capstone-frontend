import React from 'react'
import { useSelector } from 'react-redux'

const ProfileList = () => {
    const profiles = useSelector(state => state.profile)

    const renderedProfiles = profiles.map(profile => (
        <div className='profiles' key={profile.id}>
            <h3>Name: {profile.first_name}{profile.last_name}</h3>
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